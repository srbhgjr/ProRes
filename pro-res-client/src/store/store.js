import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./loginSlice";
import { infoSlice } from "./infoSlice";

export const store = configureStore({
  reducer: {
    loginStore: loginSlice.reducer,
    infoStore: infoSlice.reducer,
  }
})

export const loginActions = loginSlice.actions;
export const infoActions = infoSlice.actions;