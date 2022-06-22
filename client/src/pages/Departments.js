import React, { useState } from "react";

const Departments = () => {

  const [inputDepartment, setInputDepartment] = useState('');
  const [addDepartments, setAddDepartments] = useState([]);
  
  //Input Event
  const InputEvent = (event) => {
    setInputDepartment(event.target.value)
  }
  //Submit Event
  const onSubmit = (event) =>{
    if(!inputDepartment){

    }
    else {
      setAddDepartments([...addDepartments, inputDepartment]); //Add new Department
      setInputDepartment('');
    }
  }
  
  //Post Data    
  const handleSubmit = async (e) => {
    
  };



  return (
    <>
      <div className="container">
        <h3 className="text-left my-2">Add a New Department</h3>
        <div className="container bg-dark ">
          <form onSubmit={handleSubmit}>
            <div className="mb-2">
              <label htmlFor="department" className="form-label">
                Department Title
              </label>
              <input
                type="text"
                className="form-control"
                id="department"
                placeholder="Enter Department Name"
                value={inputDepartment}
                required onChange={InputEvent}
              />
            </div>
            <button
              type="submit"
              value="Submit"
              className="btn btn-primary mb-4"
              onClick={onSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="container">
      <h3 className="text-left my-2">Departments List</h3>
      {
        addDepartments.map((elem, ind) => {
          return (
            <div className="eachItem">
            <h6>{elem}</h6>  
            </div>
          )
        })
      }
      </div>
      
    </>
  );
};

export default Departments;
