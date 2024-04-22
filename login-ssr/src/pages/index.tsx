import React from "react";

import { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { toggleLoginModal } from "@/store/slices/loginSlice";
import { Button } from "@cencommerce/paris-uikit";

const HomeComponent = () => {
  const { sessionData, modalState } = useAppSelector(
    (state: RootState) => state.login
  );
  const dispatch = useAppDispatch();
  return (
    <div className="lg-max-w-6xl lg-mx-auto lg-mt-10 lg-text-xl">
      <div>localhost:3003</div>
      <div>Name: Login</div>
      <div>Modal isOpen: {modalState.isOpen ? "Yes" : "No"}</div>
      <div>User FirstName: {sessionData.firstName}</div>
      <Button
        onClick={() => {
          dispatch(toggleLoginModal(!modalState.isOpen));
        }}
        className="lg-mt-2"
      >
        Toggle LoginModal
      </Button>
    </div>
  );
};

export default HomeComponent;
