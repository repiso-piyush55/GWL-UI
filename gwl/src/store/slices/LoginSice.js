import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",

  initialState: {
    isLoggedIn: false,
  },

  reducers: {
    toggleSideBar: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleSideBar } = loginSlice.actions;

export default loginSlice.reducer;
