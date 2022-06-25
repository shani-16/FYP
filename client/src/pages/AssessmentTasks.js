import React, { useState } from "react";

const AssessmentTasks = () => {
  //States of Assessment Task Type & Semester
  const [taskType, setTaskType] = useState("");
  const [semester, setSemester] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Task Type = ", taskType);
    console.log("Semester = ", semester);

    if (taskType === "" || semester === "") {
      console.log("Type any Name");
    } else {
      var modal = { taskType, semester };
      console.log(modal);
      setTaskType("");
      setSemester("");
    }
  };

  return (
    <>
      {/* New Assessment Task */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Assessment Task</h4>
      </div>
      <div className="container">
        <table class="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Assessment Task Title</th>
              <th scope="col">Class Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="task"
                  id="task"
                  placeholder="Enter Task Type"
                  value={taskType}
                  required
                  onChange={(e) => setTaskType(e.target.value)}
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

      {/* Assessment Task Display */}

      <div className="container my-2">
        <h3 className="text-left my-2">Assessment Tasks List</h3>
      </div>
    </>
  );
};
export default AssessmentTasks;
