import React from 'react';
import { Link } from 'react-router-dom';

const CLOS = () => {
  return (
    <>
    {/* New CLO */}
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

    {/* Result of CLO */}
    <div className="container">
       <h1 className="text-left my-2">Index</h1>
       <Link to="newCLO">Create New CLO</Link>
       <div className="container">
       <table class="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">CLO</th>
     <th scope="col">Class Number</th>
     <th scope="col">PLO</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Room-26</td>
     <td>1</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>3</td>
     <td>Room-26</td>
     <td>2</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>2</td>
     <td>Room-26</td>
     <td>1</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>4</td>
     <td>Room-26</td>
     <td>2</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>2</td>
     <td>Room-26</td>
     <td>2</td>
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

export default CLOS;