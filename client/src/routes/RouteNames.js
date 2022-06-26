import { Navigate } from "react-router-dom";
import {
  AssessmentTasks,
  CLOS,
  CLOSINFO,
  Courses,
  CoursesInformation,
  Departments,
  Home,
  PLOS,
  PLOSINFO,
  QuestionMapCLO,
  Questions,
  Results,
  Semesters,
  SignIn,
  SignUp,
  Enrollment,
} from "../pages";
import { routeNameCONST } from "../utils/constants";
const protectedRoutes = [
  {
    route: routeNameCONST.course_information,
    component: CoursesInformation,
  },
  {
    route: routeNameCONST.closinfo,
    component: CLOSINFO,
  },
  {
    route: routeNameCONST.plosinfo,
    component: PLOSINFO,
  },
  {
    route: routeNameCONST.departments,
    component: Departments,
  },

  {
    route: routeNameCONST.semesters,
    component: Semesters,
  },
  {
    route: routeNameCONST.courses,
    component: Courses,
  },
  {
    route: routeNameCONST.assessment_tasks,
    component: AssessmentTasks,
  },
  {
    route: routeNameCONST.plos,
    component: PLOS,
  },
  {
    route: routeNameCONST.clos,
    component: CLOS,
  },
  {
    route: routeNameCONST.questions,
    component: Questions,
  },
  {
    route: routeNameCONST.qmapclo,
    component: QuestionMapCLO,
  },
  {
    route: routeNameCONST.enrollment,
    component: Enrollment,
  },
  {
    route: routeNameCONST.results,
    component: Results,
  },

  {
    route: "*",
    component: <Navigate to={routeNameCONST.sign_in} />,
  },
];
const publicRoutes = [
  {
    route: routeNameCONST.default,
    component: Home,
  },
  {
    route: routeNameCONST.sign_in,
    component: SignIn,
  },
  {
    route: routeNameCONST.adminSignUp,
    component: SignUp,
  },
  {
    route: "*",
    component: <Navigate to={routeNameCONST.sign_in} />,
  },
];
const RouteName = {
  publicRoutes,
  protectedRoutes,
};
export default RouteName;
