require("dotenv").config();
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { User, QuestionMap } = require("../../models");
const {
  successResponse,
  failedResponse,
  HTTP_STATUS,
} = require("../../utils/commonFunctions");
const METHOD_NAME_FOR_LOG = "Question Map API ERROR";
router.get("/", verifyAuthToken, async (req, res) => {
  try {
    let userID = req.user.id;
    let user = mongoose.Types.ObjectId(userID);
    console.log("header user id : ", userID);

    const questionMapObj = await QuestionMap.find({
      user,
    });
    console.log("questionMapObj ", questionMapObj);
    if (questionMapObj.length == 0) {
      console.log("questionMapObj if ", questionMapObj);
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` You don't have added any QuestionMap yet `
      );
      return;
    }
    successResponse(
      res,
      HTTP_STATUS.OK,
      `Question Map Succesfully get `,
      questionMapObj
    );
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
