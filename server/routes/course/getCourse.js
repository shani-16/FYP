require("dotenv").config();
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { User, Department, Course } = require("../../models");
const {
  successResponse,
  failedResponse,
  HTTP_STATUS,
} = require("../../utils/commonFunctions");
const METHOD_NAME_FOR_LOG = "Get Course API ERROR";
router.get("/", verifyAuthToken, async (req, res) => {
  try {
    let userID = req.user.id;
    let user = mongoose.Types.ObjectId(userID);
    console.log("header user id : ", userID);

    const courseObj = await Course.find({
      user,
    });
    console.log("courseObj ", courseObj);
    if (courseObj.length == 0) {
      console.log("courseObj if ", courseObj);
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` You don't have added any course yet `
      );
      return;
    }
    successResponse(res, HTTP_STATUS.OK, `Course Succesfully get `, courseObj);
  } catch (error) {
    console.error(error.message);
    failedResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      `  ${METHOD_NAME_FOR_LOG} ${error.message} `
    );
  }
});
module.exports = router;
