const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const { QuestionMap } = require("../models");

//Route 1: Map a question using POST : /api/questionmap/mapquestion : LOGIN REQUIRED

router.post(
  "/mapquestion",
  fetchuser,
  [
    body("class_number"),
    body("assessment_task"),
    body("question_number"),
    body("clo"),
    body("weightage"),
  ],
  async (req, res) => {
    try {
      const { class_number, assessment_task, question_number, clo, weightage } =
        req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newQuestionMap = new QuestionMap({
        class_number,
        assessment_task,
        question_number,
        clo,
        weightage,
        user: req.user.id,
      });
      const savedQuestionMap = await newQuestionMap.save();
      res.json(savedQuestionMap);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
