const mongoose = require("mongoose");
const { Schema } = mongoose;

const CLOSchema = new Schema({
  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'},
  clo: {
    type: String,
    required: true,
  },
  newclass:{
    type: String,
    required: true,
  },
  plo: {
    type: String,
    required: true,
  },
});
const CLO=mongoose.model("clo", CLOSchema);
module.exports = CLO;