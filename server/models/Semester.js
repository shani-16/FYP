const mongoose = require("mongoose");
const { Schema } = mongoose;

const SemesterSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  semester: {
    type: Number,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
});
const Semester = mongoose.model("semester", SemesterSchema);
module.exports = Semester;
