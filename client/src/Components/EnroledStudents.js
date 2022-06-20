import React, { useContext } from 'react';
import studentContext from '../context/students/studentContext';
import SingleStudent from './SingleStudent';


const EnroledStudents = () => {
    const context=useContext(studentContext)
   // eslint-disable-next-line 
  const {students,setStudents}=context;
  return (
      <div className='container'>
    <div className='row my-3'>
    <div class="table-responsive">
    <table className="table table-dark">
  <thead>
     <tr>
      <th scope="col">Session</th>
      <th scope="col">Registration No.</th>
      <th scope="col">Student Name</th>
      <th scope="col">Father Name</th>
      <th scope="col">CNIC</th>
      <th scope="col">Course Code</th>
      <th scope="col">Course Title</th>
      <th scope="col">Credit Hours</th>
    </tr> 
  </thead>
  </table>
  </div>
{students?.map((student)=>{
   return<SingleStudent student={student}/>;

})}
</div>
    </div>
   
  )
}

export default EnroledStudents
