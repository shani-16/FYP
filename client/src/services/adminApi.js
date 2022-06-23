import { create } from "./http.service";
const CREATE_USER_URL = `/api/auth/createuser`;

export const createUserAPI = async (body) => {
  return create(CREATE_USER_URL, body);
};
