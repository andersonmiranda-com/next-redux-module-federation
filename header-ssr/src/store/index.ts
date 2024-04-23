import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "@/store/slices/headerSlice";
import loginReducer from "login/loginReducer";
import cartReducer from "cart/cartReducer";

const store = configureStore({
  reducer: {
    host: headerReducer,
    login: loginReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
