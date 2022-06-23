import axios from "axios";
import { parseErrors } from "../utils/utilFunctions";
const LOCAL_HOST = "http://localhost:5000";

// /api/auth/createuser
export const create = async (url, data) => {
  console.log("URL data = ", data);
  try {
    let res = null;
    res = await axios.post(`${LOCAL_HOST}${url}`, data);
    return {
      success: res.data.success,
      data: res.data.data,
      message: res.data.message,
    };
  } catch (error) {
    return parseErrors(error);
  }
};
