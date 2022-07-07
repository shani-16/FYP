import React, { useEffect, useState } from "react";
import {
  addNewTaskAPI,
  getUserCoursesAPI,
  getUserTaskAPI,
} from "../services/adminApi";

const AssessmentTasks = () => {
  //States of Assessment Task Type & Semester
  const taskTypeDataArray = ["QUIZ", "ASSIGNMENT", "MID", "FINAL"];
  const [taskType, setTaskType] = useState("");
  const [taskTypeArray, setTaskTypeArray] = useState(taskTypeDataArray[0]);
  const [semester, setSemester] = useState("");
  const [semesterArray, setSemesterArray] = useState([]);

  //Submit Event
  const onSubmit = async (e) => {
    e.preventDefault();
    if (taskType === "" || semester === "") {
      console.log("Type any Name");
    } else {
      var modal = { taskType, semester };
      console.log("Assessment modal", modal);
      const response = await addNewTaskAPI(modal);
      const { data } = response;

      if (data?.success) {
        console.log("Assessment Page succussful ==> ", data.data);
      } else {
        console.log("Assessment Page not succussful ==> ", data?.message);
      }
      const getResponse = await getUserTaskAPI();
      setTaskTypeArray(getResponse?.data?.data);
      setSemester("");
      setTaskType("");
    }
  };

  useEffect(() => {
    getUserCoursesAPI()
      .then((res) => {
        const { data } = res;
        setTaskType(data?.data[0].semester);
        setTaskTypeArray(data?.data);
      })
      .catch((err) =>
        console.log("Assessment Type Page api response error", err)
      );
  }, []);
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
                <select
                  type="select"
                  className="form-control"
                  name="task"
                  id="task"
                  value={taskType}
                  required
                  onChange={(e) => setTaskType(e.target.value)}
                >
                  {taskTypeDataArray.map((value, index) => (
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
                  name="semester"
                  id="semester"
                  value={semester}
                  required
                  onChange={(e) => setTaskType(e.target.value)}
                >
                  {semesterArray?.map((value, index) => (
                    <option value={value.semester} key={index}>
                      {value.semester}
                    </option>
                  ))}
                </select>
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
