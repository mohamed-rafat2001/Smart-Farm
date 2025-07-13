import express from "express";
import { protect } from "../middelwares/authMiddelware.js";
import {
	createFarm,
	deletefarmByUser,
	getFarm,
	updateFarmByUser,
	userFarms,
} from "../controllers/farmController.js";

const Router = express.Router();

// add protect func to all routes
Router.use(protect);

Router.route("/").post(createFarm).get(userFarms);
Router.route("/:id")
	.get(getFarm)
	.delete(deletefarmByUser)

	.patch(updateFarmByUser);
export default Router;
