require("dotenv").config();
const express = require("express");
const router = express.Router();
const fetchuser = require("../../middleware/fetchuser");
const { User } = require("../../models");
router.post("/", fetchuser, async (req, res) => {
  try {
    const { id } = req.user;
    let user = await User.findById(id).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router;
