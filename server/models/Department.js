const mongoose = require("mongoose");
const { Schema } = mongoose;

const DepartmentSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  dept: {
    type: String,
    required: true,
  },
});
const Department = mongoose.model("department", DepartmentSchema);
module.exports = Department;
