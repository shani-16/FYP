const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { User, Course } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

const METHOD_NAME_FOR_LOG = "Update Course API ERROR";
router.put("/:id", verifyAuthToken, async (req, res) => {
  const { courseCode, courseTitle, creditHours } = req.body;

  try {
    const updateCourse = {};
    if (courseCode) {
      updateCourse.courseCode = courseCode;
    }
    if (courseTitle) {
      updateCourse.courseTitle = courseTitle;
    }
    if (creditHours) {
      updateCourse.creditHours = creditHours;
    }
    let courseID = await Course.findById(req.params.id);
    console.log("Course Id ", courseID);
    if (courseID == null) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${req.params.id} Course does not exist `
      );
      return null;
    }

    if (courseID?.user.toString() != req.user.id) {
      failedResponse(
        res,
        HTTP_STATUS.BAD_REQUEST,
        ` ${courseID} METHOD_NAME_FOR_LOG `
      );
      return null;
    }

    courseID = await Course.findByIdAndUpdate(
      req.params.id,
      { $set: updateCourse },
      { new: true }
    );
    console.log("Updated Course", courseID);
    successResponse(
      res,
      HTTP_STATUS.OK,
      ` ${courseID.courseTitle} Course Updated Succesfully`,
      courseID.courseTitle
    );
  } catch (error) {
    console.error(error.message);
    // return res.status(500);
    failedResponse(
      res,
      HTTP_STATUS.INTERNAL_SERVER_ERROR,
      ` ${METHOD_NAME_FOR_LOG} `
    );
  }
});
module.exports = router;
