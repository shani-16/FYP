import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  return (
    <>
    <div className="container">
       <h1 className="text-left my-2">Index</h1>
       <Link to="newResult">Create New Result</Link>
       <div className="container">
       <table class="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">Class Number</th>
     <th scope="col">Student ID</th>
     <th scope="col">Assessment Task</th>
     <th scope="col">Question</th>
     <th scope="col">Weightage Marks</th>
     <th scope="col">Obtain Marks</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>Lab-2</td>
     <td>0042-BS-CS-2018</td>
     <td>Mid</td>
     <td>1</td>
     <td>10</td>
     <td>8</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Lab-2</td>
     <td>0042-BS-CS-2018</td>
     <td>Mid</td>
     <td>2</td>
     <td>10</td>
     <td>7</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>Lab-2</td>
     <td>0042-BS-CS-2018</td>
     <td>Mid</td>
     <td>3</td>
     <td>10</td>
     <td>9</td>
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

export default Results;