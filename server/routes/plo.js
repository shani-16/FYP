const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { PLO } = require("../models");

//Route 1: Add a new semester using POST : /api/plo/createplo : LOGIN REQUIRED

router.post(
  "/createplo",
  verifyAuthToken,
  [
    body("plo", "enter a valid Assessment type"),
    body("newclass", "enter a valid class"),
  ],
  async (req, res) => {
    try {
      const { plo, newclass } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const newPlo = new PLO({
        plo,
        newclass,
        user: req.user.id,
      });
      const savedPLO = await newPlo.save();
      res.json(savedPLO);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);
module.exports = router;
