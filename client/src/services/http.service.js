import { axiosInstance } from "../helper/axiosInstance";
export const create = async (url, data) => {
  let res = null;
  res = await axiosInstance.post(`${url}`, data);
  console.log("API AxiosInstance RES ", res);
  return res;
};
export const get = async (url) => {
  let res = null;
  res = await axiosInstance.get(`${url}`);
  console.log("API AxiosInstance RES ", res);
  return res;
};
