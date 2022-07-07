import React, { useEffect, useState } from "react";
import {
  addNewCourseAPI,
  getUserCoursesAPI,
  getUserSemesterAPI,
} from "../services/adminApi";

const Courses = () => {
  //States of All Inputs
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [semester, setSemester] = useState("");
  const [semesterArray, setSemesterArray] = useState([]);
  const [dept, setDept] = useState("");
  const [courseArray, setCourseArray] = useState([]);

  //Submit Event
  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      semester == "" ||
      dept == "" ||
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
        dept,
      };
      console.log("Course Modal ", modal);
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
    }
  };
  useEffect(() => {
    getUserSemesterAPI()
      .then((res) => {
        const { data } = res;
        console.log("User semester data ", data);
        console.log("data?.data ", data?.data);
        setSemester(data?.data[0].semester);
        setSemesterArray(data?.data);
      })
      .catch((err) => console.log("Courses Page api response error", err));
  }, []);
  console.log("Semester Array ", semesterArray);
  console.log("Semester", semester);

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
                <select
                  type="select"
                  className="form-control"
                  name="semester"
                  id="semester"
                  value={semester}
                  required
                  onChange={(e) => {
                    setSemester(e.target.value);
                  }}
                >
                  {semesterArray?.map((value, index) => (
                    <option value={value.semester} key={index}>
                      {value.semester}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <select
                  type="select"
                  className="form-control"
                  name="dept"
                  id="dept"
                  value={dept}
                  required
                  onChange={(e) => {
                    console.log("e.target.value ", e.target.value);
                    setDept(e.target.value);
                  }}
                >
                  {semesterArray?.map((value, index) => (
                    <option value={value.dept} key={index}>
                      {value.dept}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="contanier">
          <button
            type="submit"
            value="Submit"
            className="btn btn-primary mb-4"
            onClick={onSubmit}
          >
            Create
          </button>
        </div>
      </div>

      {/* Display Course */}
      <div className="container my-2">
        <h3 className="text-left my-2">Courses List</h3>
        <>
          <table className="table">
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
                      <td>{value.courseTitle.toUpperCase()}</td>
                      <td>{value.courseCode.toUpperCase()}</td>
                      <td>{value.creditHours.toUpperCase()}</td>
                      <td>{value.semester.toUpperCase()}</td>
                      <td>{value.dept.toUpperCase()}</td>
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
