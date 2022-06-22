import {
  AssessmentTasks,
  CLOS,
  CLOSINFO,
  Courses,
  coursesInformation,
  Departments,
  Enrollment,
  Home,
  PLOS,
  PLOSINFO,
  QuestionMapCLO,
  Questions,
  Results,
  Semesters,
  SignIn,
  SignUp,
} from "../pages";
import { routeNameCONST } from "../utils/constants";

const RouteNames = {
  Default: {
    route: "/",
    component: <Home />,
  },
  courseInformation: {
    route: routeNameCONST.course_information,
    component: <coursesInformation />,
  },
  closinfo: {
    route: routeNameCONST.closinfo,
    component: <CLOSINFO />,
  },
  plosInfo: {
    route: routeNameCONST.plosinfo,
    component: <PLOSINFO />,
  },
  departments: {
    route: routeNameCONST.departments,
    component: <Departments />,
  },

  semesters: {
    route: routeNameCONST.semesters,
    component: <Semesters />,
  },
  courses: {
    route: routeNameCONST.courses,
    component: <Courses />,
  },
  assessmentTasks: {
    route: routeNameCONST.assessment_tasks,
    component: <AssessmentTasks />,
  },
  plos: {
    route: routeNameCONST.plos,
    component: <PLOS />,
  },
  clos: {
    route: routeNameCONST.clos,
    component: <CLOS />,
  },
  questions: {
    route: routeNameCONST.questions,
    component: <Questions />,
  },
  qmapclo: {
    route: routeNameCONST.qmapclo,
    component: <QuestionMapCLO />,
  },
  enrollment: {
    route: routeNameCONST.enrollment,
    component: <Enrollment />,
  },
  results: {
    route: routeNameCONST.results,
    component: <Results />,
  },
  signIn: {
    route: routeNameCONST.sign_in,
    component: <SignIn />,
  },
  signUp: {
    route: routeNameCONST.adminSignUp,
    component: <SignUp />,
  },
  newEnrollment: {
    route: routeNameCONST.enrollmentNewEnrollment,
    component: <newEnrollment />,
  },
  newSemester: {
    route: routeNameCONST.semestersNewSemester,
    component: <newSemester />,
  },
  newCourse: {
    route: routeNameCONST.coursesNewCourse,
    component: <newCourse />,
  },
  newAssessment: {
    route: routeNameCONST.assessmentTasksNewAssessment,
    component: <newAssessment />,
  },
  newPLO: {
    route: routeNameCONST.plosNewPLO,
    component: <newPLO />,
  },
  newCLO: {
    route: routeNameCONST.closNewCLO,
    component: <newCLO />,
  },
  newQuestion: {
    route: routeNameCONST.questionsNewQuestion,
    component: <newQuestion />,
  },
  newQMapCLO: {
    route: routeNameCONST.qmapcloNewQMapCLO,
    component: <newQMapCLO />,
  },
};

export default RouteNames;
