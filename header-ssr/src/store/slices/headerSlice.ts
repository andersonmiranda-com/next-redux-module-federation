import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerSlice",
  initialState: {
    appName: "header",
  },
  reducers: {},
});

export const { reducer: headerReducer, actions } = headerSlice;

export default headerSlice.reducer;
