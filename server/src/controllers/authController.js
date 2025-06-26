import UserModel from "../models/user.js";
import appError from "../utils/appError.js";
import response from "../utils/handelRespone.js";
import sendCookie from "../utils/sendCookie.js";
import sendEmail from "../utils/sendEmail.js";
import { passwordResetCodeTemplate } from "../utils/emailTempletes.js";
import catchAsync from "../middelwares/catchAsync.js";
//create new User
export const signUp = catchAsync(async (req, res, next) => {
	const { firstName, lastName, email, phoneNumber, password, confirmPassword } =
		req.body;
	const user = await UserModel.create({
		firstName,
		lastName,
		email,
		password,
		confirmPassword,
		phoneNumber,
	});
	if (!user) return next(appError("user not signUp", 400));
	const token = user.createJwt();
	user.password = undefined;
	sendCookie(res, token);
	response(res, 201, { user, token });
});

// login user
export const login = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;
	// check if email and password exist
	if (!email || !password)
		return next(appError("please provide email and password", 400));
	// check if user is exist and password is correct
	const user = await UserModel.findOne({ email }).select("+password");

	if (!user || !(await user.isCorrectPass(password, user.password)))
		return next(new appError("email or password is wrong", 400));

	const token = user.createJwt();

	sendCookie(res, token);
	response(res, 200, { token, user });
});
// logout user
export const logOut = catchAsync(async (req, res, next) => {
	sendCookie(res, "");
	response(res, 200, {});
});
// forgot password using email
export const forgotPassord = catchAsync(async (req, res, next) => {
	const { email } = req.body;
	if (!email) return next(new appError("please provide email", 400));
	// find the user by email
	const user = await UserModel.findOne({ email });
	if (!user) return next(new appError("user not found", 404));

	// create random code from 6 digits
	const resetCode = user.createPasswordResetCode();

	await user.save({ validateBeforeSave: false });

	// check if reset code is exist
	if (!resetCode) return next(new appError("something went wrong", 400));
	// send email
	const Email = sendEmail({
		email: user.email,
		subject: "PASSWORD RESET CODE",
		html: passwordResetCodeTemplate(
			resetCode,
			`${user.firstName} ${user.lastName}`,
			user.passwordResetExpires
		),
	});
	// check if email is sent
	if (!Email) return next(new appError("something went wrong", 400));
	response(res, 200, {});
});
// reset password
export const resetPassword = catchAsync(async (req, res, next) => {
	// get resetCode and password from req.body
	const { resetCode, password, confirmPassword } = req.body;
	// check if resetCode and password are provided
	if (!resetCode || !password || !confirmPassword)
		return next(new appError("please provide all fields", 400));

	// find the user using resetCode
	const user = await UserModel.findOne({
		passwordResetCode: resetCode,
		passwordResetExpires: { $gt: Date.now() },
	});

	// check if user or not
	if (!user) return next(new appError("code is invalid or has expired", 400));
	// update password
	user.password = req.body.password;
	user.confirmPassword = req.body.confirmPassword;
	user.passwordResetCode = undefined;
	user.passwordResetExpires = undefined;
	// save user
	await user.save();

	const token = user.createJwt();
	//send token and response
	sendCookie(res, token);
	response(res, 200, { user, token });
});
// update password
export const updatePassword = catchAsync(async (req, res, next) => {
	// get passwords from req.body
	const { newPassword, confirmNewPassword, password } = req.body;
	// check if passwords are provided
	if (!newPassword || !confirmNewPassword || !password)
		return next(new appError("please provide all fields", 400));

	const user = await UserModel.findById(req.user._id).select("+password");
	const correctPass = await user.isCorrectPass(password, user.password);

	// check if password is correct
	if (!correctPass) return next(new appError("password is incorrect", 400));

	// update password
	user.password = newPassword;
	user.confirmPassword = confirmNewPassword;
	// save user
	await user.save();
	const token = user.createJwt();

	sendCookie(res, token);
	response(res, 201, { user, token });
});
