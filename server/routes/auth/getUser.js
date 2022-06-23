require("dotenv").config();
const express = require("express");
const router = express.Router();
const verifyAuthToken = require("../../middleware/verifyAuthToken");
const { User } = require("../../models");
const METHOD_NAME_FOR_LOG = "Get User API ERROR";
router.post("/", verifyAuthToken, async (req, res) => {
  try {
    const { id } = req.user;
    let user = await User.findById(id).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send(`${METHOD_NAME_FOR_LOG} ${error.message}`);
  }
});
module.exports = router;
