import { useState } from "react";
import StudentContext from "./studentContext";

const StudentState = (props) => {

    const enrolledStudents=[
        {
          "_id": "6294679531e6aba5355210ea",
          "user": "6294675831e6aba5355210e2",
          "session": 2018,
          "registrationNo": "0042",
          "studentName": "Mobeen Fatima",
          "fatherName": "Tawasil Hussain",
          "cnic": "34501-3905643-8",
          "courseCode": "Cs-104",
          "courseTitle": "OOP",
          "creditHours": 3,
          "__v": 0
        },
        {
          "_id": "62974bffb0535e596bd83722",
          "user": "6294675831e6aba5355210e2",
          "session": 2018,
          "registrationNo": "0043",
          "studentName": "Musa Raza",
          "fatherName": "Qalab i Abbas",
          "cnic": "34501-3905643-9",
          "courseCode": "Cs-104",
          "courseTitle": "OOP",
          "creditHours": 3,
          "__v": 0
        },
        {
          "_id": "62983c9e6f72531e7ea65f2c",
          "user": "6294675831e6aba5355210e2",
          "session": 2018,
          "registrationNo": "0041",
          "studentName": "Musa Raza",
          "fatherName": "Qalab i Abbas",
          "cnic": "34501-3905643-2",
          "courseCode": "Cs-104",
          "courseTitle": "OOP",
          "creditHours": 3,
          "__v": 0
        }
      ]
      const[students,setStudents]=useState(enrolledStudents);


  return (
    <StudentContext.Provider value={{students,setStudents}}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentState;
