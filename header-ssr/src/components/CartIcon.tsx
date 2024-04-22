import React from "react";
import type { RootState } from "@/store";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "@cencommerce/paris-uikit";

const CartIcon = () => {
  const { items } = useAppSelector((state: RootState) => state.cart);

  return (
    <div className="hd-flex hd-items-center hd-relative hd-mr-3">
      <Icon name="shopping-cart" fill="white" width={32} height={32} />
      {items[0].quantity > 0 && (
        <div className="hd-bg-error-500 hd-p-1 hd-h-6 hd-w-6 hd-text-caption hd-rounded-full hd-justify-center hd-flex hd-absolute hd--top-2 hd-left-5">
          {items[0].quantity}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
