import axios from "axios";

import { parseErrors } from "../utils/utilFunctions";
import WebStorage from "../utils/webStorage";
let authToken = WebStorage.getAuthToken();

export const axiosInstance = axios.create({
  headers: { Authorization: `Bearer ${authToken}` },
});

axiosInstance.interceptors.request.use(function (req) {
  if (!authToken) {
    authToken = WebStorage.getAuthToken();
    req.headers.Authorization = `Bearer ${authToken}`;
    console.log("interceptors REQ ", req);
  }
  return req;
});

axiosInstance.interceptors.response.use(
  async (res) => {
    console.log("interceptors RES ", res);
    const { data } = res;
    if (data?.token) {
      WebStorage.setAuthToken(data.token);
    }
    return res;
  },
  (error) => {
    return parseErrors(error);
  }
);
