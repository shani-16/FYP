import React from 'react'
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <>
    <div className="container">
       <h1 className="text-left my-2">Index</h1>
       <Link to="newCourse">Create New Course</Link>
       <div className="container">
       <table class="table my-2">
 <thead className='table-dark'>
   <tr>
     <th scope="col">Course Title</th>
     <th scope="col">Course Code</th>
     <th scope="col">Class Number</th>
     <th scope="col">Type of Course</th>
     <th scope="col">Credit Hour(s)</th>
     <th scope="col">Department</th>
     <th scope="col">Semester</th>
     <th scope="col"></th>
     <th scope="col"></th>
     <th scope="col"></th>
   </tr>
 </thead>
 <tbody>
   <tr>
     <td>NC</td>
     <td>CS-4xx</td>
     <td>Lab-2</td>
     <td>Theory</td>
     <td>3</td>
     <td>Computer Science</td>
     <td>8th</td>
     <td>Edit</td>
     <td>Details</td>
     <td>Delete</td>
   </tr>
   <tr>
     <td>SPM</td>
     <td>CS-4xx</td>
     <td>Room-26</td>
     <td>Theory</td>
     <td>3</td>
     <td>Computer Science</td>
     <td>8th</td>
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

export default Courses;