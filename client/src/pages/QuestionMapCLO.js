import React from 'react';

const QMapCLO = () => {
  return (
    <>
{/* Create New Map */}
<div className="container my-2">
    <h2>Create</h2>
    <h4>Question</h4>
    </div>
    <div className="container">
    <table className="table my-2">
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
      <td><select className="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select className="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select className="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
      <td><select className="form-select">
  <option selected>Select</option>
  <option value="1">Computer Science</option>
  <option value="2">Food Science</option>
  <option value="3">Bio Technology</option>
</select></td>
<td><input type="text" className="form-control"/></td>
    </tr>
  </tbody>
</table>
<div className="container">
<button type="button" className="btn btn-primary">Save</button>
</div>
    </div>

    {/* Display Results */}
    <div className="container">
       <table className="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">Class Number</th>
     <th scope="col">Assessment Task</th>
     <th scope="col">Question</th>
     <th scope="col">CLO</th>
     <th scope="col">Weightage</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>Room-26</td>
     <td>Mid</td>
     <td>1</td>
     <td>1</td>
     <td>5</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Room-26</td>
     <td>Mid</td>
     <td>2</td>
     <td>1</td>
     <td>5</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Room-26</td>
     <td>Mid</td>
     <td>3</td>
     <td>2</td>
     <td>10</td>
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

export default QMapCLO;