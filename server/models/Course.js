const mongoose = require("mongoose");

// Define the Courses schema

const coursesSchema = new mongoose.Schema(
	{
		//item==course bro
	courseName: { type: String },


	courseDescription: { type: String },

	instructor: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user"
	},
	//HOSTEL NAME&NUMBER
	address: {
		type: String,
	},

	price: {
		type: Number,
	},
	contact: {
		type: Number,
	},
	thumbnail: {
		type: String,
	},

	tag: {
		type: [String],
		required: true,
	},

	category: {
		type: mongoose.Schema.Types.ObjectId,
		// required: true,
		ref: "Category",
	},

	//STUDENT LIKEDDD
	studentsEnrolled: [
		{
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "user",
		},
	],
	// instructions: {
	// 	type: [String],
	// },
	// status: {
	// 	type: String,
	// 	enum: ["Draft", "Published"],
	// },
}
);

// Export the Courses model
module.exports = mongoose.model("Course", coursesSchema);