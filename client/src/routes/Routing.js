import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RouteNames from "./RouteNames";
import StudentState from "../context/students/StudentState";
import { Navbar } from "../pages";
const Routing = () => {
  return (
    <>
      <StudentState>
        <Router>
          <Navbar />
          <Routes>
            {/* Navebar Menus */}
            <Route
              path={RouteNames.Default.route}
              element={RouteNames.Default.component}
            ></Route>
            <Route
              path={RouteNames.courseInformation.route}
              element={RouteNames.courseInformation.component}
            ></Route>
            <Route
              path={RouteNames.closinfo.route}
              element={RouteNames.closinfo.component}
            ></Route>
            <Route
              path={RouteNames.plosInfo.route}
              element={RouteNames.plosInfo.component}
            ></Route>
            <Route
              path={RouteNames.departments.route}
              element={RouteNames.departments.component}
            ></Route>
            <Route
              path={RouteNames.semesters.route}
              element={RouteNames.semesters.component}
            ></Route>
            <Route
              path={RouteNames.courses.route}
              element={RouteNames.courses.component}
            ></Route>
            <Route
              path={RouteNames.assessmentTasks.route}
              element={RouteNames.assessmentTasks.component}
            ></Route>
            <Route
              path={RouteNames.plos.route}
              element={RouteNames.plos.component}
            ></Route>
            <Route
              path={RouteNames.clos.route}
              element={RouteNames.clos.component}
            ></Route>
            <Route
              path={RouteNames.questions.route}
              element={RouteNames.questions.component}
            ></Route>
            <Route
              path={RouteNames.qmapclo.route}
              element={RouteNames.qmapclo.component}
            ></Route>
            <Route
              path={RouteNames.enrollment.route}
              element={RouteNames.enrollment.component}
            ></Route>
            <Route
              path={RouteNames.results.route}
              element={RouteNames.results.component}
            ></Route>
            <Route
              path={RouteNames.signIn.route}
              element={RouteNames.signIn.component}
            ></Route>
            <Route
              path={RouteNames.signUp.route}
              element={RouteNames.signUp.component}
            ></Route>
            {/* Create New Page Links */}
            <Route
              path={RouteNames.newEnrollment.route}
              element={RouteNames.newEnrollment.component}
            ></Route>
            <Route
              path={RouteNames.newSemester.route}
              element={RouteNames.newSemester.component}
            ></Route>
            <Route
              path={RouteNames.newCourse.route}
              element={RouteNames.newCourse.component}
            ></Route>
            <Route
              path={RouteNames.newAssessment.route}
              element={RouteNames.newAssessment.component}
            ></Route>
            <Route
              path={RouteNames.newPLO.route}
              element={RouteNames.newPLO.component}
            ></Route>
            <Route
              path={RouteNames.newCLO.route}
              element={RouteNames.newCLO.component}
            ></Route>
            <Route
              path={RouteNames.newQuestion.route}
              element={RouteNames.newQuestion.component}
            ></Route>
            <Route
              path={RouteNames.newQMapCLO.route}
              element={RouteNames.newQMapCLO.component}
            ></Route>
          </Routes>
        </Router>
      </StudentState>
    </>
  );
};

export default Routing;
