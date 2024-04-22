import dynamic from "next/dynamic";

import type { RootState } from "@/store";
import { setSessionData } from "login/loginReducer";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Button } from "@cencommerce/paris-uikit";

const HeaderRemote = dynamic(() => import("header/Header"), { ssr: true });
const HomeRemote = dynamic(() => import("home/Home"), { ssr: true });

import "header/styles";
import "home/styles";
import "login/styles";

export default function Host() {
  const { sessionData, modalState } = useAppSelector(
    (state: RootState) => state.login
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <HeaderRemote />
      {sessionData.isLoggedIn && (
        <div className="ht-m-4">Hola {sessionData.firstName}!</div>
      )}
      <HomeRemote />
    </>
  );
}
