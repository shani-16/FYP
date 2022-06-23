const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Question } = require("../models");

//Route 1: Add a new semester using POST : /api/question/createquestion : LOGIN REQUIRED

router.post(
  "/createquestion",
  verifyAuthToken,
  [
    body("question_number"),
    body("question_type"),
    body("newclass", "enter a valid class"),
  ],
  async (req, res) => {
    try {
      const { question_number, question_type, newclass } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newQuestion = new Question({
        question_number,
        question_type,
        newclass,
        user: req.user.id,
      });
      const savedQuestion = await newQuestion.save();
      res.json(savedQuestion);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
