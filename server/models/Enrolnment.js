const mongoose = require("mongoose");
const { Schema } = mongoose;

const EnrolnmentSchema = new Schema({
  user:{
type:mongoose.Schema.Types.ObjectId,
ref:'user'
  },
    session: {
    type: Number,
    required: true,
  },
  registrationNo: {
    type: String,
    required: true,
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  fatherName: {
    type: String,
    required: true,
  },
  cnic: {
    type: String,
    required: true,
    unique: true,
  },
  courseCode: {
    type: String,
    required: true,
  },
  courseTitle: {
    type: String,
    required: true
  },
  creditHours:{
    type:Number,
    required:true
  }
});
const Enrolnment=mongoose.model("Enrolnment", EnrolnmentSchema);
module.exports = Enrolnment;