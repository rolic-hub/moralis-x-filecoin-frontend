import React, { useState, useEffect } from "react";
import Image from "next/image";
import vector from "../assest/Vector.png";
import Funder from "../assest/Funder.png";
import { COnnectButton } from "./connectButton";
import { useRouter } from "next/router";

const Navbar = ({ callRouter, setCallrouter }) => {
  const router = useRouter();

  useEffect(() => {
    if (callRouter) {
      router.push("/Home");
    } else {
      router.push("/overview");
    }
  }, [callRouter]);

  return (
    <div className="flex border-b-4 p-5 justify-between ">
      <div className="flex">
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
          onClick={() => setCallrouter(true)}
          className="text-2xl text-green-600 hover:underline hover:cursor-pointer font-bold mr-5 mt-3"
        >
          Home
        </p>
        <p
          onClick={() => setCallrouter(false)}
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
