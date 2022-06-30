require("dotenv").config();
const express = require("express");
var mongoose = require("mongoose");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { User, Department } = require("../../models");
const {
  successResponse,
  failedResponse,
  HTTP_STATUS,
} = require("../../utils/commonFunctions");
const METHOD_NAME_FOR_LOG = "Get User API ERROR";
router.get("/", verifyAuthToken, async (req, res) => {
  try {
    let userID = req.user.id;
    let user = mongoose.Types.ObjectId(userID);
    console.log("header user id : ", userID);

    const departmentObj = await Department.find({
      user,
    });
    console.log("departmentObj ", departmentObj);
    if (departmentObj.length < 1) {
      console.log("departmentObj if ", departmentObj);
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` You don't have added any department yet `
      );
    }
    successResponse(
      res,
      HTTP_STATUS.OK,
      `Department Succesfully get `,
      departmentObj
    );
  } catch (error) {
    console.error(error.message);
    // res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
    failedResponse(
      res,
      HTTP_STATUS.BAD_REQUEST,
      `  ${METHOD_NAME_FOR_LOG} ${error.message} `
    );
  }
});
module.exports = router;
