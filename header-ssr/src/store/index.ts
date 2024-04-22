import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/store/slices/headerSlice";
import loginReducer from "login/loginReducer";
import cartReducer from "cart/cartReducer";

const staticReducers = {
  header: headerReducer,
};

const store = configureStore({
  reducer: {
    header: headerReducer,
    login: loginReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
