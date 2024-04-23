import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface ICart {
  items: Array<ICartItem>;
}

const initialState = {
  items: [
    {
      id: "1",
      name: "iPhone 13 Pro Max",
      price: 1000,
      quantity: 1,
    },
  ],
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      state.items[0].quantity = state.items[0].quantity + action.payload;
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
