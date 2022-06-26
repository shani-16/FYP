import { axiosInstance } from "../helper/axiosInstance";
export const create = async (url, data) => {
  let res = null;
  res = await axiosInstance.post(`${url}`, data);
  console.log("API AxiosInstance RES ", res);
  return res;
};
