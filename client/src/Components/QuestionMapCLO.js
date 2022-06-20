import React from 'react';
import { Link } from 'react-router-dom';

const QMapCLO = () => {
  return (
    <>
    <div className="container">
       <h1 className="text-left my-2">Index</h1>
       <Link to="newQMapCLO">Create New Map Question</Link>
       <div className="container">
       <table class="table my-2">
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
     </div>
   </>
  )
}

export default QMapCLO;