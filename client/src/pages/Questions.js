import React, { useState } from "react";

const Questions = () => {
  //Use States of Questions, Course Title, Task Type
  const [question, setQuestion] = useState("");
  const [taskType, setTaskType] = useState("");
  const [courseTitle, setCourseTitle] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Question No. = ", question);
    console.log("Task Type = ", taskType);
    console.log("Course Title = ", courseTitle);

    if (question === "" || taskType === "" || courseTitle === "") {
      console.log("Type any Name");
    } else {
      var modal = { question, taskType, courseTitle };
      console.log(modal);
      setQuestion("");
      setTaskType("");
      setCourseTitle("");
    }
  };

  return (
    <>
      {/* Create New Question */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Question</h4>
      </div>
      <div className="container">
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Question No.</th>
              <th scope="col">Assessment Task Title</th>
              <th scope="col">Course Title</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="question"
                  id="question"
                  placeholder="Enter Question Number"
                  value={question}
                  required
                  onChange={(e) => setQuestion(e.target.value)}
                />
              </td>
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

      {/* Display Questions */}
      <div className="container my-2">
        <h3 className="text-left my-2">Questions List</h3>
      </div>
    </>
  );
};

export default Questions;
