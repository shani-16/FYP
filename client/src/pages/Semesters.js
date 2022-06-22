import React from 'react'

const Semesters = () => {
  return (
    <>
{/* Create New Semesters */}
<div className="container my-2">
    <h2>Create</h2>
    <h4>Semester</h4>
    </div>
    <div className="container">
    <table className="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Semester</th>
      <th scope="col">Department</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><input type="text" className="form-control" id="Semester"/></td>
      <td><select className="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
<td><button type="button" className="btn btn-primary">Save</button></td>
    </tr>
  </tbody>
</table>
    </div>

    {/* Display Semesters */}
     <div className="container">
    

        <table className="table my-2">
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
    </>
  )
}

export default Semesters;