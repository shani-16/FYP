const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Course, User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

const METHOD_NAME_FOR_LOG = "Delete Course API ERROR";
router.delete("/:id", verifyAuthToken, async (req, res) => {
  try {
    let courseID = await Course.findById(req.params.id);
    console.log("Course Id ", courseID);
    if (courseID == null) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${req.body.courseTitle} Course does not exist `
      );
      return;
    }

    if (courseID?.user.toString() != req.user.id) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${courseID} METHOD_NAME_FOR_LOG `
      );
      return;
    }

    courseID = await Course.findByIdAndDelete(req.params.id);
    successResponse(
      res,
      HTTP_STATUS.OK,
      ` ${courseID.courseTitle} Course Deleted Succesfully`,
      courseID.course
    );
  } catch (error) {
    console.error(error.message);
    // return res.status(500);
    failedResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ` METHOD_NAME_FOR_LOG `
    );
  }
});
module.exports = router;
