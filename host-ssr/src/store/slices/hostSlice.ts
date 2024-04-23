import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  appName: "host",
};

const hostSlice = createSlice({
  name: "hostSlice",
  initialState,
  reducers: {},
});

export const { reducer: hostReducer, actions } = hostSlice;

export default hostSlice.reducer;
