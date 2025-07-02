import UserModel from "../models/user.js";
import FarmModel from "../models/farm.js";

import {
	createDocByAdmin,
	deactivateDoc,
	getAllDocsByAdmin,
	getByParams,
	updateDoc,
} from "./handlerFactory.js";

//  @desc  get all users in system
// route   /api/v1/admin/users
// method  get
// access  private/Admin
export const getAllUsers = getAllDocsByAdmin(UserModel);

// @desc    create user
// route   /api/v1/admin/users
// method  post
// access  private/Admin
export const createUser = createDocByAdmin(UserModel, [
	"firstName",
	"lastName",
	"email",
	"password",
	"confirmPassword",
	"phoneNumber",
	"role",
]);

// @desc   delete user by id
// route   /api/v1/admin/users/:id
// method  delete
// access  private/Admin
export const deleteUser = deactivateDoc(UserModel, "admin");

//  @desc   update user by id
// route   /api/v1/admin/users/:id
// method  patch
// access  private/Admin
export const updateUser = updateDoc(UserModel, "admin", [
	"firstName",
	"lastName",
	"email",
	"password",
	"confirmPassword",
	"phoneNumber",
	"role",
]);

// @desc	get user by params
// route   /api/v1/admin/users/:id
// method  get
// access  private/Admin
export const getUserByParams = getByParams(UserModel);

// admin controller for farms

// @desc	get all farms
// route   /api/v1/admin/farms
// method  get
// access  private/Admin
export const getAllFarms = getAllDocsByAdmin(FarmModel);

// @desc    delete farm by id
// route   /api/v1/admin/farms/:id
// method  delete
// access  private/Admin
export const deleteFarm = deactivateDoc(FarmModel, "admin");
