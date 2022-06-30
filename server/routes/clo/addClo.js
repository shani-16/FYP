const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { body, validationResult } = require("express-validator");
const { CLO, User } = require("../../models");
const {
  failedResponse,
  HTTP_STATUS,
  successResponse,
} = require("../../utils/commonFunctions");

//Route 1: Add a new clo using POST : /api/clo/add : LOGIN REQUIRED
const METHOD_NAME_FOR_LOG = "Add CLO API ERROR";
router.post(
  "/",
  verifyAuthToken,
  [body("clo", "enter a valid clo")],
  async (req, res) => {
    let userID = req.user.id;
    const { clo } = req.body;
    let userRegistered = await User.findOne({ userID });
    try {
      if (!userRegistered) {
        failedResponse(
          res,
          HTTP_STATUS.BAD_REQUEST,
          `Given userID = ${userID} is not registered `
        );
      } else {
        let cloObj = await CLO.findOne({ clo });
        if (cloObj?.clo == clo) {
          failedResponse(
            res,
            HTTP_STATUS.BAD_REQUEST,
            ` ${clo} clo is already registered By ${userRegistered?.email}`
          );
        } else {
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
          const newCLO = new CLO({
            clo,
            user: userID,
          });
          const savedCLO = await newCLO.save();
          successResponse(
            res,
            HTTP_STATUS.OK,
            `CLO Added Succesfully By ${userRegistered?.email}`,
            savedCLO
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
