import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "@/store/slices/homeSlice";
import cartReducer from "cart/cartReducer";

const staticReducers = {
  home: homeReducer,
};

const store = configureStore({
  reducer: {
    home: homeReducer,
    cart: cartReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
