const mongoose = require("mongoose");
const { Schema } = mongoose;

const CourseSchema = new Schema({
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
  },
  creditHours: {
    type: String,
  },
  semester: {
    type: String,
  },
  department: {
    type: String,
  },
});
const Course = mongoose.model("course", CourseSchema);
module.exports = Course;
