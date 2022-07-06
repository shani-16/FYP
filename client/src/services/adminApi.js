import { create, get } from "./http.service";
const CREATE_USER_URL = `/api/auth/createuser`;
const LOGIN_USER_URL = `/api/auth/login`;
const ADD_NEW_COURSE = `/api/course/add`;
const ADD_NEW_DEPRTMENT = `/api/department/add`;
const GET_USER_DEPRTMENT = `/api/department/getall`;
const ADD_NEW_SEMESTER = `/api/semester/add`;
const GET_USER_SEMESTER = `/api/semester/get`;

const GET_USER_COURSE = `/api/course/get`;

export const createUserAPI = async (body) => {
  return create(CREATE_USER_URL, body);
};
export const addNewDepartmentAPI = async (body) => {
  return create(ADD_NEW_DEPRTMENT, body);
};
export const getUserDepartmentsAPI = async () => {
  return get(GET_USER_DEPRTMENT);
};
export const addNewSemesterAPI = async (body) => {
  return create(ADD_NEW_SEMESTER, body);
};
export const getUserSemesterAPI = async () => {
  return get(GET_USER_SEMESTER);
};
export const loginUserAPI = async (body) => {
  return create(LOGIN_USER_URL, body);
};
export const addNewCourseAPI = async (body) => {
  return create(ADD_NEW_COURSE, body);
};
export const getUserCoursesAPI = async () => {
  return get(GET_USER_COURSE);
};
