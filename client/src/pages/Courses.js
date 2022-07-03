import React, { useEffect, useState } from "react";
import { addNewCourseAPI, getUserCoursesAPI } from "../services/adminApi";

const Courses = () => {
  //States of All Inputs
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [creditHours, setCreditHours] = useState("");
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
      creditHours == ""
    ) {
      console.log("Kindly Fill fields");
    } else {
      var modal = {
        courseTitle,
        courseCode,
        creditHours,
        semester,
        department,
      };
      const response = await addNewCourseAPI(modal);
      console.log("response ", response);
      const { data } = response;
      if (data?.success) {
        console.log("COURSES Page succussful ==> ", data.data);
      } else {
        console.log("COURSES Page not succussful ==> ", data?.message);
      }
      const getResponse = await getUserCoursesAPI();
      setCourseArray(getResponse?.data?.data);
      setCourseTitle("");
      setCourseCode("");
      setCreditHours("");
      setSemester("");
      setDepartment("");
    }
  };
  useEffect(() => {
    getUserCoursesAPI()
      .then((res) => setCourseArray(res?.data?.data))
      .catch((err) => console.log("COURSES Page api response error", err));
  }, []);
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
                  value={creditHours}
                  required
                  onChange={(e) => setCreditHours(e.target.value)}
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
                      <td>{value.creditHours}</td>
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
