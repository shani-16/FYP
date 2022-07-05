import { createSlice } from "@reduxjs/toolkit";
import WebStorage from "../../utils/webStorage";
const authReducer = createSlice({
  name: "token",
  initialState: {
    token: WebStorage.getAuthToken() ? WebStorage.getAuthToken() : null,
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default authReducer;
