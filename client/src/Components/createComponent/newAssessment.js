import React from 'react'

const NEWAssessment = () => {
  return (
    <>
    <div className="container my-2">
    <h2>Create</h2>
    <h4>Assessment Task</h4>
    </div>
    <div className="container">
    <table class="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Assessment Task Title</th>
      <th scope="col">Class Number</th>
    </tr>
  </thead>
  <tbody>
    <tr>
<td>
<select class="form-select">
  <option selected>Select</option>
  <option value="1">Quiz</option>
  <option value="2">Assignment</option>
  <option value="3">Mid</option>
  <option value="4">Final</option>
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

export default NEWAssessment;