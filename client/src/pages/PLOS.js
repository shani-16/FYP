import React, { useState } from "react";

const PLOS = () => {
  //States of PLOS and Course Title
  const [plo, setPlo] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("PLO = ", plo);
    console.log("Course Title = ", courseTitle);

    if (plo === "" || courseTitle === "") {
      console.log("Type any Name");
    } else {
      var modal = { plo, courseTitle };
      console.log(modal);
      setPlo("");
      setCourseTitle("");
    }
  };

  return (
    <>
      {/* Create New PLO */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>PLO</h4>
      </div>
      <div className="container">
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Program Learning Outcomes</th>
              <th scope="col">Course Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="plo"
                  id="plo"
                  placeholder="Enter PLO Name"
                  value={plo}
                  required
                  onChange={(e) => setPlo(e.target.value)}
                />
              </td>
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
            </tr>
          </tbody>
        </table>
        <div className="container">
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

      {/* Display PLOS */}
      <div className="container my-2">
        <h3 className="text-left my-2">Program Learning Outcomes List</h3>
      </div>
    </>
  );
};

export default PLOS;
