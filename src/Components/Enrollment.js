import EnroledStudents from "./EnroledStudents";
const Enrollment = () => {
  
  return (
    <>
    {/* For New Enrollment  */}
    <div className="container my-2">
    <h2>Create</h2>
    <h4>Students Enrolled</h4>
    </div>
    <div className="container">
    <table class="table my-2">
  <thead className='table-dark'>
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
  <tbody>
    <tr>
      <td><input type="text" class="form-control" id="Session"/></td>
      <td><input type="text" class="form-control" id="RegistrationNo"/></td>
      <td><input type="text" class="form-control" id="StudentName"/></td>
      <td><input type="text" class="form-control" id="FatherName"/></td>
      <td><input type="text" name="cnic" id="identificationFieldInput" class="form-control " />
      
      </td>
      <td><input type="text" class="form-control" id="CourseCode"/></td>
      <td><input type="text" class="form-control" id="CourseTitle"/></td>
      {/* <td><input type="text" class="form-control" id="CreditHours"/></td> */}
      <td><select name="credithours" id="CreditHours" class="form-control">
     <option value="credithours">1</option>
      <option value="credithours">2</option>
      <option value="credithours">3</option>
      <option value="credithours">4</option>

    </select></td>
    </tr>
   
  </tbody>
</table>
<div className="contanier">
<button type="button" class="btn btn-primary">Save</button>
</div>
    </div>
<EnroledStudents/>

    </>
  )
}

export default Enrollment;