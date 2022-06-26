import React, { useState } from "react";

const Courses = () => {
  //States of All Inputs
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseType, setCourseType] = useState("");
  const [courseCredits, setCourseCredits] = useState("");
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Course Title = ", courseTitle);
    console.log("Course Code = ", courseCode);
    console.log("Course Type = ", courseType);
    console.log("Course Credit Hours = ", courseCredits);
    console.log("Semester = ", semester);
    console.log("Departmente = ", department);

    if (semester === "" || department === "") {
      console.log("Type any Name");
    } else {
      var modal = {
        courseTitle,
        courseCode,
        courseType,
        courseCredits,
        semester,
        department,
      };
      console.log(modal);

      setCourseTitle("");
      setCourseCode("");
      setCourseType("");
      setCourseCredits("");
      setSemester("");
      setDepartment("");
    }
  };

  return (
    <>
      {/* Create New Course */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Course</h4>
      </div>
      <div className="container">
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Course Title</th>
              <th scope="col">Course Code</th>
              <th scope="col">Course Type</th>
              <th scope="col">Credit Hour(s)</th>
              <th scope="col">Semester</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="coursetitle"
                  id="coursetitle"
                  placeholder="Enter Course Title"
                  value={courseTitle}
                  required
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="coursecode"
                  id="coursecode"
                  placeholder="Enter Course Code"
                  value={courseCode}
                  required
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="coursetype"
                  id="coursetype"
                  placeholder="Enter Course Type"
                  value={courseType}
                  required
                  onChange={(e) => setCourseType(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="credithours"
                  id="credithours"
                  placeholder="Enter Credit Hours"
                  value={courseCredits}
                  required
                  onChange={(e) => setCourseCredits(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="semester"
                  id="semester"
                  placeholder="Enter Semester"
                  value={semester}
                  required
                  onChange={(e) => setSemester(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="department"
                  id="department"
                  placeholder="Enter Department"
                  value={department}
                  required
                  onChange={(e) => setDepartment(e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <div className="contanier">
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary mb-4"
            onClick={() => onSubmit()}
          >
            Create
          </button>
        </div>
      </div>

      {/* Display Course */}
      <div className="container my-2">
        <h3 className="text-left my-2">Courses List</h3>
      </div>
    </>
  );
};

export default Courses;
