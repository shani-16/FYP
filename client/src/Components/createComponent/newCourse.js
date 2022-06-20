import React from 'react'

const NEWCourse = () => {
  return (
   <>
   <div className="container my-2">
    <h2>Create</h2>
    <h4>Course</h4>
    </div>
    <div className="container">
    <table class="table my-2">
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
      <td><input type="text" class="form-control"/></td>
      <td><input type="text" class="form-control"/></td>
      <td><input type="text" class="form-control"/></td>
      <td>
<select class="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select class="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select class="form-select">
  <option selected>Select</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        </td>
      <td>
<select class="form-select">
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
<button type="button" class="btn btn-primary">Create</button>
</div>
    </div>
   </>
  )
}

export default NEWCourse;