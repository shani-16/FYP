import React from 'react';
import { Link } from 'react-router-dom';

const PLOS = () => {
  return (
    <>
    <div className="container">
       <h1 className="text-left my-2">Index</h1>
       <Link to="newPLO">Create New PLO</Link>
       <div className="container">
       <table class="table my-2">
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
     </div>
   </>
  )
}

export default PLOS;