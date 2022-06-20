import React from 'react'

const NEWQMapCLO = () => {
  return (
    <>
    <div className="container my-2">
    <h2>Create</h2>
    <h4>Question</h4>
    </div>
    <div className="container">
    <table class="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Class Number</th>
      <th scope="col">Assessment Task Title</th>
      <th scope="col">Question No.</th>
      <th scope="col">CLO</th>
      <th scope="col">Weightage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><select class="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select class="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select class="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select class="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
<td><input type="text" class="form-control"/></td>
    </tr>
  </tbody>
</table>
<div className="container">
<button type="button" class="btn btn-primary">Save</button>
</div>
    </div>
    </>
  )
}

export default NEWQMapCLO;