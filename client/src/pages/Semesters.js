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
    if (semester == "" || dept == "") {
      console.log("Kindly Fill fields");
    } else {
      var modal = {
        semester,
        dept,
      };
      console.log("Semester modal", modal);
      const response = await addNewSemesterAPI(modal);
      const { data } = response;

      if (data?.success) {
        console.log("SEMESTER Page succussful ==> ", data.data);
      } else {
        console.log("SEMESTER Page not succussful ==> ", data?.message);
      }
      const getResponse = await getUserSemesterAPI();
      setSemesterArray(getResponse?.data?.data);
    }
  };

  useEffect(() => {
    getUserSemesterAPI()
      .then((res) => {
        const { data } = res;
        setSemester(semesterDataArray[0]);
        setSemesterArray(data?.data);
      })
      .catch((err) =>
        console.log("Semesters response Page api response error", err)
      );
    getUserDepartmentsAPI()
      .then((res) => {
        const { data } = res;
        setDept(data?.data[0].dept);
        setDeptArray(data?.data);
      })
      .catch((err) => console.log("Semesters Page api response error", err));
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
                  {deptArray?.map((value, index) => (
                    <option value={value.dept} key={index}>
                      {value.dept.toUpperCase()}
                    </option>
                  ))}
                </select>
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
