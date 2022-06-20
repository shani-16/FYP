const dotenv=require("dotenv")
dotenv.config()
const mongoose = require("mongoose");
const mongoURI =process.env.DB_URL;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongoose successfully");
  });
};

module.exports = connectToMongo;
