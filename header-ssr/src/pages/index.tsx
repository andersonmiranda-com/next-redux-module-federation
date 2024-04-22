import React from "react";
import Header from "@/components/Header";

const HeaderComponent = () => {
  return (
    <>
      <Header />
      <div className="hd-max-w-6xl hd-mx-auto hd-mt-10 hd-text-xl">
        <div>localhost:3002</div>
        <div>Name: Header</div>
      </div>
    </>
  );
};

export default HeaderComponent;
