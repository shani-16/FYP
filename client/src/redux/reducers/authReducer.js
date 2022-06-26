import { createSlice } from "@reduxjs/toolkit";
const authReducer = createSlice({
  name: "token",
  initialState: {
    token: "",
  },
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export default authReducer;
