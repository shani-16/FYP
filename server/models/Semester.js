const mongoose = require("mongoose");
const { Schema } = mongoose;

const SemesterSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  department:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'department'},
  semester: {
    type: String,
    required: true,
  }
});
const Semester=mongoose.model("semester", SemesterSchema);
module.exports = Semester;