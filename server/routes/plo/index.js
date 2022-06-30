const express = require("express");
const router = express.Router();

const addPloAPI = require("./addPlo");
router.use("/add", addPloAPI);

module.exports = router;
