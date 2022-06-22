const express = require("express");
const router = express.Router();
const createUserAPI = require("./createUser");
const loginAPI = require("./login");
const getUserAPI = require("./getUser");

router.use("/createuser", createUserAPI);
router.use("/login", loginAPI);
router.use("/getuser", getUserAPI);

module.exports = router;
