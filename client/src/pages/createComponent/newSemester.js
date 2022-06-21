import React from "react";

const newSemester = () => {
  return (
    <>
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Semester</h4>
      </div>
      <div className="container">
        <table class="table my-2">
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
                <input type="text" class="form-control" id="Semester" />
              </td>
              <td>
                <select class="form-select">
                  <option selected>Select</option>
                  <option value="1">Computer Science</option>
                  <option value="2">Food Science</option>
                  <option value="3">Bio Technology</option>
                </select>
              </td>
              <td>
                <button type="button" class="btn btn-primary">
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default newSemester;
