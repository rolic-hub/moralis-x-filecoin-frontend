import { useState } from "react";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    const [currentPage, setCurrentPage] = useState(0)
  const router = useRouter();
  const notClicked =
    "bg-green-600 hover:bg-green-800 rounded-lg p-2 mb-4 font-bold";
  const onClickedOn = "bg-green-800 rounded-lg p-2 mb-4 font-bold";
  const _profilepage = () => {
    setCurrentPage(0)
    router.push("/profile/8");
  };
  const _fundingPage = () => {
    setCurrentPage(1)
    router.push("/my-funding-projects");
  };
  const _fundingProgram = () => {
    setCurrentPage(2)
    router.push("/funding-programs");
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="flex w-80 h-full border-r-4 border-black dark:border-green-600">
          <div className="flex flex-col p-10 mt-10 ml-5 h-screen">
            <button className={router.pathname === "/overview" ? onClickedOn : notClicked} onClick={_profilepage}>
              My Profile
            </button>
            <button onClick={_fundingPage} className={router.pathname === "/my-funding-projects" ? onClickedOn : notClicked}>
              My Funding Projects
            </button>
            <button onClick={_fundingProgram} className={router.pathname === "/funding-programs" ? onClickedOn : notClicked}>
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
