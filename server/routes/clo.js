const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { CLO } = require("../models");

//Route 1: Add a new semester using POST : /api/clo/createclo : LOGIN REQUIRED

router.post(
  "/createclo",
  verifyAuthToken,
  [
    body("clo", "enter a valid Assessment type"),
    body("plo", "enter a valid Assessment type"),
    body("newclass", "enter a valid class"),
  ],
  async (req, res) => {
    try {
      const { clo, plo, newclass } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newClo = new CLO({
        clo,
        plo,
        newclass,
        user: req.user.id,
      });
      const savedCLO = await newClo.save();
      res.json(savedCLO);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
