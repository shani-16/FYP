import React from 'react'

const AssessmentTasks = () => {
  return (
    <>
{/* New Assessment Task */}
<div className="container my-2">
    <h2>Create</h2>
    <h4>Assessment Task</h4>
    </div>
    <div className="container">
    <table class="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">Assessment Task Title</th>
      <th scope="col">Class</th>
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

{/* Assessment Task Display */}

       <div className="container my-2">
       <table class="table my-3">
 <thead className='table-dark'>
   <tr>
     <th scope="col">Assessment Task Title</th>
     <th scope="col">Class Number</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>Assignment</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Quiz</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Lab</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Mid</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Final</td>
     <td>Room-26</td>
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
export default AssessmentTasks;