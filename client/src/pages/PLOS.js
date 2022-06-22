import React from 'react';


const PLOS = () => {
  return (
    <>
{/* Create New PLO */}
<div className="container my-2">
    <h2>Create</h2>
    <h4>PLO</h4>
    </div>
    <div className="container">
    <table className="table my-2">
  <thead className='table-dark'>
    <tr>
      <th scope="col">PLO</th>
      <th scope="col">Class Number</th>
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
    </tr>
  </tbody>
</table>
<div className="container">
<button type="button" className="btn btn-primary">Save</button>
</div>
    </div>

    {/* Display PLOS */}
    <div className="container">

       <table className="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">PLO</th>
     <th scope="col">Class Number</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>1</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>3</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>2</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>7</td>
     <td>Room-26</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>4a</td>
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

export default PLOS;