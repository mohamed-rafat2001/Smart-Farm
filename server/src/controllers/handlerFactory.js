import appError from "../utils/appError.js";
import catchAsync from "../middelwares/catchAsync.js";
import response from "../utils/handelRespone.js";
import validationBody from "../utils/validationBody.js";

// delete doc
const handelBodyError = (object, next) => {
	if (Object.keys(object).length == 0)
		return next(new appError("please provide all fields", 400));
};
export const deleteByOwner = (Model) =>
	catchAsync(async (req, res, next) => {
		// get id from req.params
		const _id = req.params.id;
		// check if id is provided
		if (!_id) return next(new appError("please provide id", 400));
		// delete doc

		const doc = await Model.findOne({ _id, owner: req.user._id });
		if (doc.active == true) {
			doc.active = false;
		} else {
			doc.active = true;
		}
		await doc.save();
		// check if doc is deleted
		if (!doc) return next(new appError("doc not deleted", 400));

		response(res, 200, doc);
	});

// get doc by params
export const getByParams = (Model) =>
	catchAsync(async (req, res, next) => {
		// get id from req.params
		const { id } = req.params;
		// find doc
		const doc = await Model.findById(id);
		// check if doc is found
		if (!doc || !id) return next(new appError("doc not found", 404));
		// send response
		response(res, 200, doc);
	});

// get docs by owner
export const getByOwner = (Model) =>
	catchAsync(async (req, res, next) => {
		// get docs
		const docs = await Model.find({ owner: req.user._id });

		if (!docs) return next(new appError("no docs found", 404));

		response(res, 200, { docs, results: docs.length });
	});

// create doc By Owner
export const CreateByOwner = (Model, fields) =>
	catchAsync(async (req, res, next) => {
		// get feilds from req.body
		const objectFromBody = validationBody(req.body, fields);
		// check if all fields are provided
		handelBodyError(objectFromBody, next);
		// create doc
		const doc = await Model.create({
			...objectFromBody,
			owner: req.user._id,
		});
		// check if doc is created
		if (!doc) return next(new appError("doc not created", 400));
		// send response
		response(res, 201, doc);
	});

// update by owner
export const updateByOwner = (Model, fields) =>
	catchAsync(async (req, res, next) => {
		const _id = req.params.id;
		// check if id is provided
		if (!_id) return next(new appError("please provide id", 400));
		// get feilds from req.body
		const objectFromBody = validationBody(req.body, fields);
		// check if all fields are provided
		handelBodyError(objectFromBody, next);
		// update doc
		const doc = await Model.findOneAndUpdate(
			{ _id, owner: req.user._id },
			{ ...objectFromBody },
			{
				new: true,
				runValidators: true,
			}
		);

		if (!doc || !_id) return next(new appError("doc not updated", 400));

		response(res, 200, doc);
	});

export const createDocByAdmin = (Model, fields) =>
	catchAsync(async (req, res, next) => {
		// get feilds from req.body
		const objectFromBody = validationBody(req.body, fields);

		// check if all fields are provided
		handelBodyError(objectFromBody, next);
		// create doc
		const doc = await Model.create({
			...objectFromBody,
		});
		// check if doc is created
		if (!doc) return next(new appError("doc not created", 400));
		// send response
		response(res, 201, doc);
	});
//get all docs
export const getAllDocsByAdmin = (Model) =>
	catchAsync(async (req, res, next) => {
		const docs = await Model.find();

		if (!docs) return next(new appError("docs not found", 404));

		response(res, 200, { docs, results: docs.length });
	});

// deactivate doc by user or admin
export const deactivateDoc = (Model, role) =>
	catchAsync(async (req, res, next) => {
		if (role == "admin") {
			// get id from req.params
			const { id } = req.params;
			// check if id is provided
			if (!id) return next(new appError("please provide id", 400));
			// deactivate doc
			const doc = await Model.findByIdAndUpdate(
				id,
				{ active: false },
				{ new: true, runValidators: true }
			);
			// check if doc is deactivate
			if (!doc) return next(new appError("doc not found", 404));
			// send response
			response(res, 200, doc);
		} else {
			const _id = req.user._id;
			// deactivate doc
			const doc = await Model.findByIdAndUpdate(
				_id,
				{ active: false },
				{ new: true, runValidators: true }
			);
			// check if doc is deactivate
			if (!doc) return next(new appError("doc not found", 404));
			// send response
			response(res, 200, doc);
		}
	});

export const updateDoc = (Model, role, fields) =>
	catchAsync(async (req, res, next) => {
		// get feilds from req.body
		const objectFromBody = validationBody(req.body, fields);

		// check if all fields are provided
		handelBodyError(objectFromBody, next);
		// update doc
		if (role == "admin") {
			// get id from req.params
			const { id } = req.params;
			// check if id is provided
			if (!id) return next(new appError("please provide id", 400));
			// update doc
			const doc = await Model.findByIdAndUpdate(
				id,
				{ ...objectFromBody },
				{
					new: true,
					runValidators: true,
				}
			);
			// check if doc is updated
			if (!doc) return next(new appError("doc not found", 404));
			//send response
			response(res, 200, doc);
		} else {
			const _id = req.user._id;
			// update doc
			const doc = await Model.findByIdAndUpdate(
				_id,
				{ ...objectFromBody },
				{
					new: true,
					runValidators: true,
				}
			);
			// check if doc is updated
			if (!doc) return next(new appError("doc not found", 404));
			//send response
			response(res, 200, doc);
		}
	});
