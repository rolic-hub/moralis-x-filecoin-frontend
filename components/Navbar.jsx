import React, { useState, useEffect } from "react";
import Image from "next/image";
import vector from "../assest/Vector.png";
import Funder from "../assest/Funder.png";
import { COnnectButton } from "./connectButton";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const backHome = () => {
    router.push("/");
  };
  const homeclick = () => {
    router.push("/Home");
  };
  const mainpageclick = () => {
    router.push("/overview");
  };

  return (
    <div className="flex border-b-4  p-5 justify-between">
      <div className="flex hover:cursor-pointer" onClick={backHome}>
        {" "}
        <div className="pl-5 pr-5">
          <Image src={vector} alt="logo" />
        </div>
        <div className="mt-3">
          <Image src={Funder} alt="funders" />
        </div>
      </div>
      <div className="flex">
        <p
          onClick={homeclick}
          className="text-2xl text-green-600 hover:underline hover:cursor-pointer font-bold mr-5 mt-3"
        >
          Home
        </p>
        <p
          onClick={mainpageclick}
          className="text-2xl text-green-600 font-bold mt-3 hover:underline hover:cursor-pointer"
        >
          Main Page
        </p>
      </div>
      <COnnectButton />
    </div>
  );
};

export default Navbar;
