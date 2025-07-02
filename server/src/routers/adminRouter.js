import express from "express";
import { protect, restrictTo } from "../middelwares/authMiddelware.js";
import {
	createUser,
	deleteFarm,
	deleteUser,
	getAllFarms,
	getAllUsers,
	getUserByParams,
	updateUser,
} from "../controllers/adminController.js";

const Router = express.Router();

Router.use(protect, restrictTo("admin"));

// routes for users
Router.route("/users").get(getAllUsers).post(createUser);
Router.route("/users/:id")
	.get(getUserByParams)
	.delete(deleteUser)
	.patch(updateUser);

// routes for farms
Router.route("/farms").get(getAllFarms);
Router.route("/farms/:id").delete(deleteFarm);
export default Router;
