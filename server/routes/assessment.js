const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { Assessment } = require("../models");
// const Assessment = require("../models/Assessment");
//Route 1: Add a new semester using POST : /api/assessment/createassessment : LOGIN REQUIRED

router.post(
  "/createassessment",
  verifyAuthToken,
  [
    body("assessment", "enter a valid Assessment type"),
    body("newclass", "enter a valid class"),
  ],
  async (req, res) => {
    try {
      const { assessment, newclass } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newAssessment = new Assessment({
        assessment,
        newclass,
        user: req.user.id,
      });
      const savedAssessment = await newAssessment.save();
      res.json(savedAssessment);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
