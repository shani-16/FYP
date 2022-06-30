const express = require("express");
const router = express.Router();
const getDepartmentAPI = require("./getDepartment");
const addDepartmentsAPI = require("./addDepartment");

router.use("/add", addDepartmentsAPI);
router.use("/getall", getDepartmentAPI);

module.exports = router;
