import React from "react";
import type { RootState } from "@/store";
import { setSessionData } from "login/loginReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { Brand, Button } from "@cencommerce/paris-uikit";
import CartIcon from "./CartIcon";

const Header = () => {
  const { sessionData } = useAppSelector((state: RootState) => state.login);
  const state = useAppSelector((state: RootState) => state);
  console.log("state", state);
  const dispatch = useAppDispatch();

  return (
    <div className="hd-flex hd-items-center hd-justify-between hd-py-2 hd-px-4 hd-h-20 hd-text-white hd-bg-primary-500 ">
      <Brand customSize={50} />

      <div className="hd-flex hd-items-center hd-gap-2">
        {sessionData.isLoggedIn && <div>Hola {sessionData.firstName}</div>}
        <Button
          variant="secondary"
          className="hm-m-4"
          onClick={() => {
            dispatch(
              setSessionData({
                ...sessionData,
                isLoggedIn: !sessionData.isLoggedIn,
              })
            );
          }}
        >
          {sessionData.isLoggedIn ? "Logout" : "Login"}
        </Button>
        <CartIcon />
      </div>
    </div>
  );
};

export default Header;
