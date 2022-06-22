const mongoose = require("mongoose");
const connectToMongo = async (mongoURI) => {
  await mongoose.connect(mongoURI, (err, res) => {
    if (err) console.log(`DB NOT CONNECT ERR = ${err}`);
    else console.log("connected to mongoose successfully");
  });
};
module.exports = connectToMongo;
