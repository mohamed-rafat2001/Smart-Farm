import mongoose from "mongoose";
const farmSchema = new mongoose.Schema(
	{
		firebaseUrl: {
			type: String,
			trim: true,
			required: [true, "Url is required"],
			unique: true,
		},
		name: {
			type: String,
			required: [true, "name is required"],
			minlength: 3,
		},
		owner: {
			type: mongoose.Schema.ObjectId,
			ref: "UserModel",
		},
		location: {
			type: {
				type: String,
				default: "Point",
				enum: ["Point"],
			},
			coordinates: [Number],
			address: String,
		},
		active: {
			type: Boolean,
			default: true,
		},
	},

	{ timestamps: true }
);
farmSchema.pre(/^find/, function (next) {
	this.populate({
		path: "owner",
		select: "profileImg firstName lastName",
	});

	next();
});
export default mongoose.model("FarmModel", farmSchema);
