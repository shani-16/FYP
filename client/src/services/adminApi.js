import { create, get } from "./http.service";
const CREATE_USER_URL = `/api/auth/createuser`;
const ADD_NEW_COURSE = `/api/course/add`;
const GET_USER_COURSE = `/api/course/get`;

export const createUserAPI = async (body) => {
  return create(CREATE_USER_URL, body);
};
export const addNewCourseAPI = async (body) => {
  console.log("addNewCourse", body);
  return create(ADD_NEW_COURSE, body);
};
export const getUserCoursesAPI = async () => {
  return get(GET_USER_COURSE);
};
