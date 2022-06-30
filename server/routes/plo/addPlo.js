const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { PLO, User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new Plo using POST : /api/Plo/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add PLO API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("plo", "enter a valid plo")],
  async (req, res) => {
    let userID = req.user.id;
    const { plo } = req.body;
    let userRegistered = await User.findOne({ userID });
    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let ploObj = await PLO.findOne({ plo });
        if (ploObj?.plo == plo) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${plo} plo is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newPLO = new PLO({
            plo,
            user: userID,
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
