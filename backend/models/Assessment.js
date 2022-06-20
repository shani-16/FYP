const mongoose = require("mongoose");
const { Schema } = mongoose;

const AssessmentSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  assessment: {
    type: String,
    required: true,
  },
  newclass:{
    type: String,
    required: true,
  }
});
const Assessment=mongoose.model("assessment", AssessmentSchema);
module.exports = Assessment;