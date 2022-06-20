// import React from 'react'
const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { Enrolnment } = require("../models");
const { body, validationResult } = require("express-validator");

//Route 1: Get all the students using GET : /api/enrolnment/allstudents : LOGIN REQUIRED
router.get("/allstudents", fetchuser, async (req, res) => {
  try {
    const enrolled_students = await Enrolnment.find({ user: req.user.id });

    res.json(enrolled_students);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});

//Route 2: Add a new student using POST : /api/enrolnment/addstudent : LOGIN REQUIRED

router.post(
  "/addstudent",
  fetchuser,
  [
    body("session", "enter a valid Session").isNumeric(),
    body("registrationNo", "enter a valid email").isLength({ min: 1 }),
    body("studentName", "enter a valid name").isLength({
      min: 3,
    }),
    body("fatherName", "enter a valid name").isLength({ min: 3 }),
    body("cnic", "enter a valid CNIC").isLength({ min: 3 }),
    body("courseCode"),
    body("courseTitle", "enter a valid course title").isLength({ min: 3 }),
    body("creditHours", "enter valid credit Hours"),
  ],
  async (req, res) => {
    try {
      const {
        session,
        registrationNo,
        studentName,
        fatherName,
        cnic,
        courseCode,
        courseTitle,
        creditHours,
      } = req.body;
      //If there are errors, return bad request and errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const enrolled_student = new Enrolnment({
        session,
        registrationNo,
        studentName,
        fatherName,
        cnic,
        courseCode,
        courseTitle,
        creditHours,
        user: req.user.id,
      });
      const savedStudent = await enrolled_student.save();
      res.json(savedStudent);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error Occured");
    }
  }
);

//Route 3: Update a  student using PUT : /api/enrolnment/updatestudent : LOGIN REQUIRED

router.put("/updatestudent/:id", fetchuser, async (req, res) => {
  const {
    session,
    registrationNo,
    studentName,
    fatherName,
    cnic,
    courseCode,
    courseTitle,
    creditHours,
  } = req.body;

  try {
    //Create NewStudent Object

    const newStudent = {};
    if (session) {
      newStudent.session = session;
    }
    if (registrationNo) {
      newStudent.registrationNo = registrationNo;
    }
    if (studentName) {
      newStudent.studentName = studentName;
    }
    if (fatherName) {
      newStudent.fatherName = fatherName;
    }
    if (cnic) {
      newStudent.cnic = cnic;
    }
    if (courseCode) {
      newStudent.courseCode = courseCode;
    }
    if (courseTitle) {
      newStudent.courseTitle = courseTitle;
    }
    if (creditHours) {
      newStudent.creditHours = creditHours;
    }
    //Find the Student to be updated and update it
    let enrolled_student = await Enrolnment.findById(req.params.id);
    if (!enrolled_student) {
      return res.status(404).send("not found");
    }

    //Allow deletion lny if a teacher owns the student
    if (enrolled_student.user.toString() !== req.user.id) {
      return res.status(404).send("not allowed");
    }

    enrolled_student = await Enrolnment.findByIdAndDelete(
      req.params.id,
      { $set: newStudent },
      { new: true }
    );
    res.json({ enrolled_student });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});

//Route 4: Delete a  student using DELETE : /api/enrolnment/deletestudent : LOGIN REQUIRED

router.delete("/deletestudent/:id", fetchuser, async (req, res) => {
  const {
    session,
    registrationNo,
    studentName,
    fatherName,
    cnic,
    courseCode,
    courseTitle,
    creditHours,
  } = req.body;

  try {
    //Find the Student to be deleted and delete it
    let enrolled_student = await Enrolnment.findById(req.params.id);
    if (!enrolled_student) {
      return res.status(404).send("not found");
    }

    if (enrolled_student.user.toString() !== req.user.id) {
      return res.status(404).send("not allowed");
    }

    enrolled_student = await Enrolnment.findByIdAndDelete(req.params.id);
    res.json({ Success: "Student has been deleted" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Some Error Occured");
  }
});
module.exports = router;

// export default enrolnment
