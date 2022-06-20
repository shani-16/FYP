import React from 'react'

const NEWCLO = () => {
  return (
<>
    <div className="container my-2">
    <h2>Create</h2>
    <h4>CLO</h4>
    </div>
    <div className="container">
    <table class="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Class Number</th>
      <th scope="col">PLO</th>
      <th scope="col">CLO</th>
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

export default NEWCLO;