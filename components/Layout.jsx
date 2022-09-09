import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children}) => {


  const router = useRouter();
  const notClicked =
    "bg-green-600 hover:bg-green-800 rounded-lg p-2 mb-4 font-bold";
  const onClickedOn = "bg-green-800 rounded-lg p-2 mb-4 font-bold";
  const _profilepage = () => {
    router.push("/overview");
  };
  const _fundingPage = () => {
    router.push("/my-funding-projects");
  };
  const _fundingProgram = () => {
    router.push("/funding-programs");
  };

  return (
    <div>
      <Navbar/>
      <div className="flex">
        <div className="flex w-80 h-full border-r-4">
          <div className="flex flex-col p-10 mt-10 ml-5 h-screen">
            <button
              className={notClicked}
              onClick={_profilepage}
            >
              My Profile
            </button>
            <button
              onClick={_fundingPage}
              className={ notClicked}
            >
              My Funding Projects
            </button>
            <button
              onClick={_fundingProgram}
              className={ notClicked}
            >
              Funding Programs
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
