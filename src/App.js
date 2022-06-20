import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import CI from './Components/Courses_Information';
import CLOSINFO from './Components/CLOSINFO';
import SI from './Components/Sign_In';
import SU from './Components/Sign_Up';
import Home from './Components/Home';
import PLOSINFO from './Components/PLOSINFO';
import Departments from './Components/Departments';
import Semesters from './Components/Semesters';
import Courses from './Components/Courses';
import AssessmentTasks from './Components/AssessmentTasks';
import PLOS from './Components/PLOS';
import CLOS from './Components/CLOS';
import Questions from './Components/Questions';
import QMapCLO from './Components/QuestionMapCLO';
import Enrollment from './Components/Enrollment';
import Results from './Components/Results';
import NEWEnrollment from './Components/createComponent/newEnrollment';
import NEWSemester from './Components/createComponent/newSemester';
import NEWCourse from './Components/createComponent/newCourse';
import NEWAssessment from './Components/createComponent/newAssessment';
import NEWPLO from './Components/createComponent/newPLO';
import NEWCLO from './Components/createComponent/newCLO';
import NEWQuestion from './Components/createComponent/newQuestion';
import NEWQMapCLO from './Components/createComponent/newQMapCLO';
import StudentState from './context/students/StudentState';

function App() {
  return (
  <>
  <StudentState>
  <Router>
  <Navbar/>
  <Routes>
    {/* Navebar Menus */}
  <Route exact path="/" element={<Home/>}></Route>
  <Route exact path="/course_information" element={<CI/>}></Route>
  <Route exact path="/closinfo" element={<CLOSINFO/>}></Route>
  <Route exact path="/plosinfo" element={<PLOSINFO/>}></Route>
  <Route exact path="/departments" element={<Departments/>}></Route>
  <Route exact path="/semesters" element={<Semesters/>}></Route>
  <Route exact path="/courses" element={<Courses/>}></Route>
  <Route exact path="/assessment_tasks" element={<AssessmentTasks/>}></Route>
  <Route exact path="/plos" element={<PLOS/>}></Route>
  <Route exact path="/clos" element={<CLOS/>}></Route>
  <Route exact path="/questions" element={<Questions/>}></Route>
  <Route exact path="/qmapclo" element={<QMapCLO/>}></Route>
  <Route exact path="/enrollment" element={<Enrollment/>}></Route>
  <Route exact path="/results" element={<Results/>}></Route>
  <Route exact path="/sign_in" element={<SI/>}></Route>
  <Route exact path="/sign_up" element={<SU/>}></Route>
  {/* Create New Page Links */}
  <Route exact path="/enrollment/newEnrollment" element={<NEWEnrollment/>}></Route>
  <Route exact path="/semesters/newSemester" element={<NEWSemester/>}></Route>
  <Route exact path="/courses/newCourse" element={<NEWCourse/>}></Route>
  <Route exact path="/assessment_tasks/newAssessment" element={<NEWAssessment/>}></Route>
  <Route exact path="/plos/newPLO" element={<NEWPLO/>}></Route>
  <Route exact path="/clos/newCLO" element={<NEWCLO/>}></Route>
  <Route exact path="/questions/newQuestion" element={<NEWQuestion/>}></Route>
  <Route exact path="/qmapclo/newQMapCLO" element={<NEWQMapCLO/>}></Route>
  </Routes>
 </Router>
 </StudentState>
  </>
  );
}
export default App;