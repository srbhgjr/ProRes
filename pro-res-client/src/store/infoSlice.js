import { createSlice } from "@reduxjs/toolkit";

export const infoSlice = createSlice({
  name: "info",
  initialState: {
    firstname: "",
    lastname: "",
    email: "",
    contact_no: "",
  },
  reducers: {
    setPersonalInfo(state, action) {
      const { type, value } = action.payload;
      state[type] = value;
    }
  }
})