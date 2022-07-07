const mongoose = require("mongoose");
const { Schema } = mongoose;

const courseSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true,
  },
  creditHours: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});
const Course = mongoose.model("course", courseSchema);
module.exports = Course;
