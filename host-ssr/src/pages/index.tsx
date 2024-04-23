import { lazy } from "react";
import dynamic from "next/dynamic";

import type { RootState } from "@/store";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

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
