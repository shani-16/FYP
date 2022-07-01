const express = require("express");
const router = express.Router();
var mongoose = require("mongoose");
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { PLO, User, Semester } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new PLO using POST : /api/plo/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add Program Learning Outcome API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("plo", "enter a valid plo")],
  async (req, res) => {
    let userID = req.user.id;
    let semesterID = req.semester.id;

    console.log("header semester id : ", req.semester.id);
    console.log("header user id : ", userID);
    const { plo } = req.body;
    let userRegistered = await User.findOne({
      _id: mongoose.Types.ObjectId(userID),
    });
    let semesterRegistered = await Semester.findOne({
      _id: mongoose.Types.ObjectId(semesterID),
    });
    console.log("mongo user :  ", userRegistered);
    console.log("mongo semester :  ", semesterRegistered);

    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let ploObj = await PLO.findOne({
          user: mongoose.Types.ObjectId(userID),
        });
        console.log("mongo PLO obj :  ", ploObj);
        if (ploObj?.plo == plo) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${plo} PLO is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newPLO = new PLO({
            plo,
            user: req.user.id,
          });
          const savedPLO = await newPLO.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `PLO Added Succesfully By ${userRegistered?.email}`,
            savedPLO
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
