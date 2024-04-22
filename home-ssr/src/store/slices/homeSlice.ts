import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    appName: "home",
  },
  reducers: {},
});

export const { reducer: homeReducer, actions } = homeSlice;

export default homeSlice.reducer;
