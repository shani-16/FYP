import React from "react";

const SingleStudent = (props) => {
  const { student } = props;

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th> */}
          </tr>
        </thead>
        <tbody>
          <tr key={student}>
            <td scope="row">{student.session}</td>
            <td scope="row">{student.registrationNo}</td>
            <td scope="row">{student.studentName}</td>
            <td scope="row">{student.fatherName}</td>
            <td scope="row">{student.cnic}</td>
            <td scope="row">{student.courseCode}</td>
            <td scope="row">{student.courseTitle}</td>
            <td scope="row">{student.creditHours}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default SingleStudent;
