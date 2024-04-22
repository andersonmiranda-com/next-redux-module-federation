import React from "react";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/slices/cartSlice";
import { Button } from "@cencommerce/paris-uikit";

const HomeComponent = () => {
  const { items } = useAppSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="ct-max-w-6xl ct-mx-auto ct-mt-10 ct-text-xl">
      <div>localhost:3004</div>
      <div>Name: Cart</div>
      <div>Cart Qty: {items[0].quantity}</div>
      <Button
        onClick={() => {
          dispatch(addToCart(1));
        }}
        className="lg-mt-2"
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default HomeComponent;
