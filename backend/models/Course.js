const mongoose = require("mongoose");
const { Schema } = mongoose;


const CourseSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  courseTitle: {
    type: String,
    required: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  creditHours: {
    type: Number,
    required: true,
  },
});
const Course=mongoose.model("course", CourseSchema);
module.exports = Course;