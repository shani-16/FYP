import React, { useEffect, useState } from "react";
import {
  addNewSemesterAPI,
  getUserSemesterAPI,
  getUserDepartmentsAPI,
} from "../services/adminApi";
const Semesters = () => {
  //Declaration of Semester & Department
  const semesterDataArray = [1, 2, 3, 4, 5, 6, 7, 8];
  const [semester, setSemester] = useState(semesterDataArray[0]);
  const [dept, setDept] = useState("");
  const [semesterArray, setSemesterArray] = useState([]);
  const [deptArray, setDeptArray] = useState([]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      semester == "" ||
      semester == undefined ||
      dept == "" ||
      dept == undefined
    ) {
      console.log("Kindly Fill fields");
    } else {
      var modal = {
        semester,
        dept,
      };
      console.log("Semester modal", modal);
      const response = await addNewSemesterAPI(modal);
      console.log("Semester response", response);
      if (response) {
        if (response?.success == false) {
          console.log("Response failed message ", response?.message);
          return;
        }
        const { data } = response;
        console.log("SEMESTER Page succussful ==> ", data);
      }
      const getResponse = await getUserSemesterAPI();
      console.log("getResponse- ", getResponse);
      setSemesterArray(getResponse?.data?.data);
    }
  };
  const handleGetUserSemesterApiRes = async () => {
    const response = await getUserSemesterAPI();
    console.log("response - ", response);
    if (response?.success) {
      console.log("Response data -- ", response?.data);
      setSemester(semesterDataArray[0]);
      setSemesterArray(response?.data);
    } else console.log("Response Error - ", response?.message);
  };
  const handleGetUserDeptApiRes = async () => {
    const response = await getUserDepartmentsAPI();
    console.log("resres - ", response);
    if (response?.success) {
      console.log("Response data -- ", response?.data);
      setDeptArray(response?.data);
    } else console.log("Response Error - ", response?.message);
  };
  useEffect(() => {
    handleGetUserSemesterApiRes();
    handleGetUserDeptApiRes();
  }, []);
  return (
    <>
      {/* Create New Semesters */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Semester</h4>
      </div>
      <div className="container">
        {/* <form action="" onChange={onSubmit}> */}
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Semester</th>
              <th scope="col">Department</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <select
                  type="select"
                  className="form-control"
                  name="semester"
                  id="semester"
                  value={semester}
                  required
                  onChange={(e) => setSemester(e.target.value)}
                >
                  {semesterDataArray.map((value, index) => (
                    <option value={value} key={index}>
                      {value}
                    </option>
                  ))}
                </select>
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="dept"
                  id="dept"
                  placeholder="Enter Department"
                  value={dept}
                  required
                  onChange={(e) => setDept(e.target.value)}
                />
              </td>
              <td>
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mb-4"
                  onClick={onSubmit}
                >
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {/* </form> */}
      </div>

      {/* Display Semesters */}
      <div className="container">
        <h4>Semesters List</h4>
        <table class="table">
          <thead className="table-dark">
            <tr>
              <th scope="col">Semester</th>
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {semesterArray
              ? semesterArray.map((value, index) => (
                  <tr>
                    <td>{value.semester}</td>
                    <td>{value.dept}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Semesters;
