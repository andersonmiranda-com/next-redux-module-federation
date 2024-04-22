import { createSlice } from "@reduxjs/toolkit";

const hostSlice = createSlice({
  name: "hostSlice",
  initialState: {
    appName: "host",
  },
  reducers: {},
});

export const { reducer: hostReducer, actions } = hostSlice;

export default hostSlice.reducer;
