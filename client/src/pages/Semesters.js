import React, { useState } from "react";

const Semesters = () => {
  //Declaration of Semesters
  const [semester, setSemetser] = useState("");
  const [addSemester, setAddSemetser] = useState([]);

  //Declaration of Departments Manually
  const [department, setDepartment] = useState("");
  // useState([
  //   {
  //     label: "Computer Science",
  //     value: "computerScience",
  //   },
  //   {
  //     label: "Food Science & Technology",
  //     value: "foodScience",
  //   },
  //   {
  //     label: "Bio Technology",
  //     value: "bioTechnology",
  //   },
  //   {
  //     label: "Fine Arts",
  //     value: "fineArts",
  //   },
  // ]);
  const [addDepartment, setAddDepartment] = useState([]);

  //Input Event
  const InputEvent = (event) => {
    setSemetser(event.target.value);
    setDepartment(event.target.value);
  };

  //Submit Event
  const onSubmit = (event) => {
    console.log("Semester Added");
    if (!semester) {
    } else {
      setAddSemetser([...addSemester, semester]); //Add new Semester
      setAddDepartment([...addDepartment, department]);
      setDepartment("");
      setSemetser("");
    }
  };

  //Handle Submit
  const handleSubmit = (event) => {
    alert("A name was submitted");
    event.preventDefault();
  };

  return (
    <>
      {/* Create New Semesters */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Semester</h4>
      </div>
      <div className="container">
        <form action="" onSubmit={handleSubmit}>
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
                    id="semester"
                    placeholder="Enter Semester"
                    value={semester}
                    required
                    onChange={InputEvent}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-select"
                    id="department"
                    placeholder="Enter Department"
                    value={department}
                    required
                    onChange={InputEvent}
                  />
                </td>
                <td>
                  <button
                    type="submit"
                    value="Submit"
                    className="btn btn-primary mb-4"
                    onClick={onSubmit}
                  >
                    Save
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>

      {/* Display Semesters */}
      <div className="container">
        <h3 className="text-left my-2">Semesters List</h3>
        {addSemester.map((elem) => {
          return (
            <div className="eachItem">
              <h6>{elem}</h6>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Semesters;
