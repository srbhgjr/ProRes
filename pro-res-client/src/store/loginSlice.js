import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    username: null,
  },
  reducers: {
    setUserProfile(state, action) {
      const { username } = action.payload;
      state.username = username;
    }
  }
})