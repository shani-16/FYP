import React from 'react'
import { Link } from 'react-router-dom';

const Semesters = () => {
  return (
    <>
     <div className="container">
        <h1 className="text-left my-2">Index</h1>
        <Link to="newSemester">Create New Semester</Link>
        <div className="container">
        <table class="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Semester</th>
      <th scope="col">Department</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1st</td>
      <td>Computer Science</td>
      <td>Edit</td>
      <td>Details</td>
      <td>Delete</td>
    </tr>
    <tr>
        <td>8th</td>
        <td>Computer Science</td>
        <td>Edit</td>
        <td>Details</td>
        <td>Delete</td>
    </tr>
  </tbody>
</table>
        </div>
      </div>
    </>
  )
}

export default Semesters;