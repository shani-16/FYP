const express = require("express");
const router = express.Router();

const addDepartmentsAPI = require("./addDepartment");
router.use("/add", addDepartmentsAPI);

module.exports = router;
