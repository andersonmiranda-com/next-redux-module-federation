import { configureStore } from "@reduxjs/toolkit";
import hostReducer from "@/store/slices/hostSlice";
import loginReducer from "login/loginReducer";
import cartReducer from "cart/cartReducer";

const staticReducers = {
  host: hostReducer,
};

const store = configureStore({
  reducer: {
    host: hostReducer,
    login: loginReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
