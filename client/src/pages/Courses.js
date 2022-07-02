import React, { useEffect, useState } from "react";
import { addNewCourseAPI, getUserCoursesAPI } from "../services/adminApi";

const Courses = () => {
  //States of All Inputs
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCredits, setCourseCredits] = useState("");
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");
  const [courseArray, setCourseArray] = useState([]);
  //Submit Event
  const onSubmit = async () => {
    if (
      semester == "" ||
      department == "" ||
      courseTitle == "" ||
      courseCode == "" ||
      courseCredits == ""
    ) {
      console.log("Kindly Fill fields");
    } else {
      var modal = {
        courseTitle,
        courseCode,
        courseCredits,
        semester,
        department,
      };
      console.log("modal ", modal);
      const response = await addNewCourseAPI(modal);
      const { data } = response;
      console.log("data ", data);
      console.log("response ", response);
      if (data?.success) {
        console.log("response succussful ==> ", data.data);
      } else {
        console.log("response not succussful ==> ", data.message);
      }
      setCourseArray(response);
      setCourseTitle("");
      setCourseCode("");

      setCourseCredits("");
      setSemester("");
      setDepartment("");
    }
  };
  useEffect(() => {
    getUserCoursesAPI()
      .then((res) => setCourseArray(res.data.data))
      .catch((err) => console.log("api response error", err));
  }, [courseArray]);
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
        <>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Course Title</th>
                <th scope="col">Course Code</th>
                <th scope="col">Credit Hours</th>
                <th scope="col">Semester</th>
                <th scope="col">Department</th>
              </tr>
            </thead>
            <tbody>
              {courseArray
                ? courseArray.map((value, index) => (
                    <tr>
                      <td>{value.courseTitle}</td>
                      <td>{value.courseCode}</td>
                      <td>1</td>
                      <td>{value.semester}</td>
                      <td>{value.department}</td>
                    </tr>
                  ))
                : null}
            </tbody>
          </table>
        </>
      </div>
    </>
  );
};

export default Courses;
