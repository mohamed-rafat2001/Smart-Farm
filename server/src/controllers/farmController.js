import FarmModel from "../models/farm.js";
import {
	CreateByOwner,
	deleteByOwner,
	getByOwner,
	getByParams,
	updateByOwner,
} from "./handlerFactory.js";

// @desc   create farm
// @route  POST /api/v1/farm
// @access private

export const createFarm = CreateByOwner(FarmModel, [
	"name",
	"location",
	"firebaseUrl",
]);

// @desc  get user farms
// @route  GET /api/v1/farm
// @access private
export const userFarms = getByOwner(FarmModel);

// @desc  delete farm
// @route  DELETE /api/v1/farm/:id
// @access private
export const deletefarmByUser = deleteByOwner(FarmModel);

// @desc  update farm detales
// @route  PATCH /api/v1/farm/:id
// @access private
export const updateFarmByUser = updateByOwner(FarmModel, [
	"name",
	"location",
	"firebaseUrl",
]);

// @desc  get farm by id params
// @route  GET /api/v1/farm/:id
// @access private
export const getFarm = getByParams(FarmModel);
