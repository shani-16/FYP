import axios from "axios";

import { parseErrors, parseSuccess } from "../utils/utilFunctions";
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
    console.log("interceptors RES successful ", res);
    const { data } = res;
    if (data?.token) {
      WebStorage.setAuthToken(data.token);
    }
    return parseSuccess(res);
    // return res;
  },
  (error) => {
    console.log("interceptors RES error ", error);
    return parseErrors(error);
  }
);
