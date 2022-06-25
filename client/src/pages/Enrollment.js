import React, { useState } from "react";

const Enrollment = () => {
  //Declaration of States
  const [session, setSession] = useState("");
  const [registrationNo, setRegistrationNo] = useState("");
  const [studentName, setStudentName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [cnic, setCnic] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseCredits, setCourseCredits] = useState("");

  //Submit Event
  const onSubmit = () => {
    console.log("Session = ", session);
    console.log("Registration No. = ", registrationNo);
    console.log("Student Name = ", studentName);
    console.log("Father Name = ", fatherName);
    console.log("CNIC = ", cnic);
    console.log("Course Title = ", courseTitle);
    console.log("Course Code = ", courseCode);
    console.log("Credit Hours = ", courseCredits);

    if (courseCode === "" || courseCredits === "" || courseTitle === "") {
      console.log("Type any Name");
    } else {
      var modal = {
        session,
        registrationNo,
        studentName,
        fatherName,
        cnic,
        courseTitle,
        courseCode,
        courseCredits,
      };
      console.log(modal);
      setSession("");
      setRegistrationNo("");
      setStudentName("");
      setFatherName("");
      setCnic("");
      setCourseTitle("");
      setCourseCode("");
      setCourseCredits("");
    }
  };

  return (
    <>
      {/* For New Enrollment  */}
      <div className="container my-2">
        <h2>Create</h2>
        <h4>Students Enrolled</h4>
      </div>
      <div className="container">
        <table className="table my-2">
          <thead className="table-dark">
            <tr>
              <th scope="col">Session</th>
              <th scope="col">Registration No.</th>
              <th scope="col">Student Name</th>
              <th scope="col">Father Name</th>
              <th scope="col">CNIC</th>
              <th scope="col">Course Title</th>
              <th scope="col">Course Code</th>
              <th scope="col">Credit Hours</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="session"
                  id="session"
                  placeholder="Enter Session"
                  value={session}
                  onChange={(e) => setSession(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="registration"
                  id="registration"
                  placeholder="Enter Registration No."
                  value={registrationNo}
                  onChange={(e) => setRegistrationNo(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="studentname"
                  id="studentname"
                  placeholder="Enter Student Name"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="fathername"
                  id="fathername"
                  placeholder="Enter Father Name"
                  value={fatherName}
                  onChange={(e) => setFatherName(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="cnic"
                  id="cnic"
                  placeholder="Enter CNIC"
                  value={cnic}
                  onChange={(e) => setCnic(e.target.value)}
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
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  name="coursecode"
                  id="coursecode"
                  placeholder="Enter Course Code"
                  value={courseCode}
                  onChange={(e) => setCourseCode(e.target.value)}
                />
              </td>
              <td>
                <select
                  type="select"
                  className="form-select"
                  name="value"
                  id="value"
                  value={courseCredits}
                  onChange={(e) => setCourseCredits(e.target.value)}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
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
            Save
          </button>
        </div>
      </div>
      <div className="container my-2">
        <h3 className="text-left my-2">Students Enrolled List</h3>
      </div>
    </>
  );
};

export default Enrollment;
