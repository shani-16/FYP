import React from "react";

const Departments = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-left my-2">Index</h1>
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
              />
            </div>
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary mb-4"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container">
        <h1>Result</h1>
      </div>
    </>
  );
};

export default Departments;
