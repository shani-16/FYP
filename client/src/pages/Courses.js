import React from 'react'

const Courses = () => {
  return (
    <>
    {/* Create New Course */}
    <div className="container my-2">
    <h2>Create</h2>
    <h4>Course</h4>
    </div>
    <div className="container">
    <table className="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Course Title</th>
      <th scope="col">Course Code</th>
      <th scope="col">Class Number</th>
      <th scope="col">Department</th>
      <th scope="col">Semester</th>
      <th scope="col">Course Type</th>
      <th scope="col">Credit Hour(s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" className="form-control"/></td>
      <td><input type="text" className="form-control"/></td>
      <td><input type="text" className="form-control"/></td>
      <td>
<select className="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select className="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select className="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select className="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
    </tr>
  </tbody>
</table>
<div className="contanier">
<button type="button" className="btn btn-primary">Create</button>
</div>
    </div>

    {/* Display Course */}
    <div className="container">
       <table className="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">Course Title</th>
     <th scope="col">Course Code</th>
     <th scope="col">Class Number</th>
     <th scope="col">Type of Course</th>
     <th scope="col">Credit Hour(s)</th>
     <th scope="col">Department</th>
     <th scope="col">Semester</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>NC</td>
     <td>CS-4xx</td>
     <td>Lab-2</td>
     <td>Theory</td>
     <td>3</td>
     <td>Computer Science</td>
     <td>8th</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>SPM</td>
     <td>CS-4xx</td>
     <td>Room-26</td>
     <td>Theory</td>
     <td>3</td>
     <td>Computer Science</td>
     <td>8th</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
 </tbody>
</table>
       </div>
   </>
  )
}

export default Courses;