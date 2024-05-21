import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLogin: false,
  user: {},
};
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logged: (state, action) => {
      state.isLogin = action?.payload?.success;
      state.user = action?.payload.data;
    },
  },
});

export default authSlice.reducer;
export const { logged } = authSlice.actions;
