import React, { useState } from "react";

const Departments = () => {
  const [inputDepartment, setInputDepartment] = useState("");
  const [addDepartments, setAddDepartments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputDepartment("");
  };
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
                id="department"
                placeholder="Enter Department Name"
                value={inputDepartment}
                required
                onChange={(e) => setInputDepartment(e.target.value)}
              />
            </div>
            <button
              value="Submit"
              className="btn btn-primary mb-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <h3 className="text-left my-2">Departments List</h3>
        {addDepartments.map((value, index) => {
          return (
            <div className="eachItem">
              <h6>{value}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Departments;
