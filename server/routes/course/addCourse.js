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

//Route 1: Add a new course using POST : /api/course/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Course API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [
    body("courseCode", "enter a valid course code"),
    body("courseTitle", "enter valid credit title"),
    body("creditHours", "enter valid credit hours"),
    body("semester", "enter valid semester"),
    body("department", "enter valid credit hours"),
  ],
  async (req, res) => {
    let userID = req.user.id;

    console.log("header user id : ", userID);
    const { courseCode, courseTitle, creditHours, semester, department } =
      req.body;
    let userRegistered = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    });

    console.log("mongo user :  ", userRegistered);
    console.log("course request body:  ", req.body);

    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let courseObj = await Course.findOne({
          user: mongoose.Types.ObjectId(userID),
          courseCode,
          courseTitle,
          department,
        });
        console.log("mongo course obj :  ", courseObj);
        if (
          courseObj?.courseCode == courseCode &&
          courseObj?.department == department &&
          courseObj?.courseTitle == courseTitle
        ) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${courseCode} course is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }

          const newCourse = new Course({
            courseCode,
            courseTitle,
            creditHours,
            semester,
            department,
            user: req.user.id,
          });
          const savedCourse = await newCourse.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `Course Added Succesfully By ${userRegistered?.email}`,
            savedCourse
          );
        }
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
    }
  }
);
module.exports = router;
