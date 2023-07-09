import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";

export const store = configureStore({
  reducer: {
    loginStore: loginSlice.reducer
  }
})

export const loginActions = loginSlice.actions;