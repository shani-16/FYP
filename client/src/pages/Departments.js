import React, { useEffect, useState } from "react";
import {
  addNewDepartmentAPI,
  getUserDepartmentsAPI,
} from "../services/adminApi";

const Departments = () => {
  const [dept, setAddDepartments] = useState("");
  const [departmentsArray, setDepartmentsArray] = useState([]);

  //Submit Event
  const onSubmit = async (e) => {
    e.preventDefault();
    if (dept == "") {
      console.log("Kindly Fill fields");
    } else {
      var modal = {
        dept,
      };
      const response = await addNewDepartmentAPI(modal);
      const getResponse = await getUserDepartmentsAPI();
      setDepartmentsArray(getResponse?.data);
      setAddDepartments("");
    }
  };
  const handleGetUserDeptApiRes = async () => {
    const response = await getUserDepartmentsAPI();
    if (response?.success) {
      console.log("Response data -- ", setDepartmentsArray(response?.data));
    } else console.log("Response Error - ", response?.message);
  };
  useEffect(() => {
    handleGetUserDeptApiRes();
  }, []);
  return (
    <>
      <div className="container">
        <h3 className="text-left my-2">Add a New Department</h3>
        <div className="container bg-dark ">
          <form>
            <div className="mb-2">
              <label htmlFor="department" className="form-label">
                Department Title
              </label>
              <input
                type="text"
                className="form-control"
                name="dept"
                id="dept"
                placeholder="Enter Department"
                value={dept}
                required
                onChange={(e) => setAddDepartments(e.target.value)}
              />
            </div>
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary mb-4"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <table class="table ">
          <thead>
            <tr>
              <th scope="col">
                <h3>Departments</h3>
              </th>
            </tr>
          </thead>
          <tbody>
            {departmentsArray
              ? departmentsArray.map((value, index) => (
                  <tr>
                    <td>{value.dept}</td>
                    <button
                      type="submit"
                      value="Submit"
                      style={{
                        backgroundColor: "#0d6efd ",
                        marginRight: "3px",
                      }}
                      className="btn btn-primary mb-4"
                      //  onClick={() => onSubmit()}
                    >
                      Update
                    </button>
                    <button
                      type="submit"
                      value="Submit"
                      style={{ backgroundColor: "#0d6efd" }}
                      className="btn btn-primary mb-4 "
                      // onClick={() => onSubmit()}
                    >
                      Delete
                    </button>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Departments;
