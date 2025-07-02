import { deleteMe, getMe, updateMe } from "../controllers/userController.js";
import { protect } from "../middelwares/authMiddelware.js";
import express from "express";

const Router = express.Router();

// add protect func to all routes
Router.use(protect);

Router.route("/").get(getMe).patch(updateMe).delete(deleteMe);

export default Router;
