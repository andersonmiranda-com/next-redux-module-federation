import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/store/slices/cartSlice";

export const cartStore = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof cartStore.getState>;

export type AppDispatch = typeof cartStore.dispatch;
