const express = require("express");
const router = express.Router();

const addCloAPI = require("./addClo");
router.use("/add", addCloAPI);

module.exports = router;
