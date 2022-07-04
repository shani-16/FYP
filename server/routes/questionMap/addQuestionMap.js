const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { User, QuestionMap } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new course using POST : /api/course/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Question Map API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [
    body("courseTitle", "enter a valid courseTitle"),
    body("assessmentTask", "enter valid assessmentTask"),
    body("questionNumber", "enter valid questionNumber"),
    body("clo", "enter valid clo"),
    body("plo", "enter valid plo"),
    body("weightage", "enter valid weightage"),
  ],
  async (req, res) => {
    let userID = req.user.id;

    console.log("Question Map header user id : ", userID);
    const { courseTitle, assessmentTask, questionNumber, clo, plo, weightage } =
      req.body;
    let userRegistered = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    });

    console.log("mongo user :  ", userRegistered);
    console.log("Question Map request body:  ", req.body);

    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let questionMapObj = await QuestionMap.findOne({
          user: mongoose.Types.ObjectId(userID),
          assessmentTask,
          questionNumber,
          // courseTitle,
          // department,
        });
        console.log("mongo Map Question obj :  ", questionMapObj);
        if (
          questionMapObj?.assessmentTask._id == assessmentTask._id &&
          questionMapObj?.questionNumber == questionNumber
        ) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${questionNumber}  is already Mapped By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }

          const newQuestionMap = new QuestionMap({
            courseTitle,
            assessmentTask,
            questionNumber,
            clo,
            plo,
            weightage,
            user: req.user.id,
          });
          const savedQuestionMap = await newQuestionMap.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `QuestionMap Mapped Succesfully By ${userRegistered?.email}`,
            savedQuestionMap
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
