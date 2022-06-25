import React, { useState } from "react";

const QMapCLO = () => {
  //States
  const [courseTitle, setCourseTitle] = useState("");
  const [taskType, setTaskType] = useState("");
  const [question, setQuestion] = useState("");
  const [clo, setClo] = useState("");
  const [weightage, setWeightage] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Course Title = ", courseTitle);
    console.log("Task Type = ", taskType);
    console.log("Question No. = ", question);
    console.log("CLO = ", clo);
    console.log("Weightage = ", weightage);

    if (
      clo === "" ||
      taskType === "" ||
      courseTitle === "" ||
      question === "" ||
      weightage === ""
    ) {
      console.log("Type any Name");
    } else {
      var modal = { clo, question, taskType, courseTitle, weightage };
      console.log(modal);
      setCourseTitle("");
      setTaskType("");
      setQuestion("");
      setClo("");
      setWeightage("");
    }
  };

  return (
    <>
      {/* Create New Map */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Question</h4>
      </div>
      <div className="container">
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Course Title</th>
              <th scope="col">Assessment Task Title</th>
              <th scope="col">Question No.</th>
              <th scope="col">CLO</th>
              <th scope="col">Weightage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
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
                  name="clo"
                  id="clo"
                  placeholder="Enter CLO Detail"
                  value={clo}
                  required
                  onChange={(e) => setClo(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="weightage"
                  id="weightage"
                  placeholder="Enter Weightage"
                  value={weightage}
                  required
                  onChange={(e) => setWeightage(e.target.value)}
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

      {/* Display Results */}
      <div className="container my-2">
        <h3 className="text-left my-2">Question Mapping List</h3>
      </div>
    </>
  );
};

export default QMapCLO;
