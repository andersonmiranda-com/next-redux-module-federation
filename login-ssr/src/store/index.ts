import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "@/store/slices/loginSlice";

export const loginStore = configureStore({
  reducer: {
    login: loginReducer,
  },
});

export type RootState = ReturnType<typeof loginStore.getState>;

export type AppDispatch = typeof loginStore.dispatch;
