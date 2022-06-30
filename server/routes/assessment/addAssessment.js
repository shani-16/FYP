const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Assessment, User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new assessment using POST : /api/assessment/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Assessment API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("assessment", "enter a valid assessment")],
  async (req, res) => {
    let userID = req.user.id;
    const { assessment } = req.body;
    let userRegistered = await User.findOne({ userID });
    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let assessmentObj = await Assessment.findOne({ assessment });
        if (assessmentObj?.assessment == assessment) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${assessment} assessment is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newAssessment = new Assessment({
            assessment,
            user: userID,
          });
          const savedAssessment = await newAssessment.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `Assessment Added Succesfully By ${userRegistered?.email}`,
            savedAssessment
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
