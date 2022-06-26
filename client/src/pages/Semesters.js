import React, { useState } from "react";

const Semesters = () => {
  //Declaration of Semester & Department
  const [semester, setSemester] = useState("");
  const [department, setDepartment] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Semester Added = ", semester);
    console.log("Departmente Added = ", department);
    if (semester === "" || department === "") {
      console.log("Type any Name");
    } else {
      var modal = { semester, department };
      console.log(modal);
      setDepartment("");
      setSemester("");
    }
  };

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
              <td>
                <button
                  type="submit"
                  value="Submit"
                  className="btn btn-primary mb-4"
                  onClick={() => onSubmit()}
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
        <h3 className="text-left my-2">Semesters List</h3>
        {/* {onSubmit.map((semester, department) => {
          return (
            <div className="conatiner">
              <h6>{semester}</h6>
              <h6>{department}</h6>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default Semesters;
