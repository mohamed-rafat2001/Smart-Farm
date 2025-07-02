import FarmModel from "../models/farm.js";
import {
	CreateByOwner,
	deleteByOwner,
	getByOwner,
	getByParams,
	updateByOwner,
} from "./handlerFactory.js";

// create farm
export const createFarm = CreateByOwner(FarmModel, [
	"name",
	"location",
	"firebaseUrl",
]);

// get user farms
export const userFarms = getByOwner(FarmModel);

// delete farm
export const deletefarmByUser = deleteByOwner(FarmModel);

// update farm detales
export const updateFarmByUser = updateByOwner(
	FarmModel,
	"name",
	"location",
	"firebaseUrl"
);

// get farm by id params
export const getFarm = getByParams(FarmModel);
