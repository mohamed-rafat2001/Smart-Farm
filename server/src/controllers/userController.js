import catchAsync from "../middelwares/catchAsync.js";
import UserModel from "../models/user.js";
import response from "../utils/handelRespone.js";
import appError from "../utils/appError.js";
import { deactivateDoc, updateDoc } from "./handlerFactory.js";

//  @desc	get user profile
// route   /api/v1/user
// method  get
// access  private/user
export const getMe = catchAsync(async (req, res, next) => {
	const user = await UserModel.findById(req.user._id);
	if (!user) return next(new appError("user not found", 404));
	response(res, 200, user);
});

//	@desc   update ME
// route   /api/v1/user
// method  patch
// access  private/user

export const updateMe = updateDoc(UserModel, "user", [
	"firstName",
	"lastName",
	"email",
	"phoneNumber",
]);

// @desc	 delete Me
// route   /api/v1/user
// method  delete
// access  private/user
export const deleteMe = deactivateDoc(UserModel, "user");
