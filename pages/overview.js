import Image from "next/image";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import moneyBag from "../assest/moneyBag.png";

const Overview = () => {
  const [callRouter, setCallrouter] = useState(false);
  return (
    <div>
      <Navbar callRouter={callRouter} setCallrouter={setCallrouter} />
      <div className="flex">
        <div className="flex w-80 h-full border-r">
          <div className="flex flex-col p-10 mt-10 ml-5 h-screen">
            <button className="bg-green-600 hover:bg-green-800 rounded-lg p-2 mb-4 font-bold ">
              My Profile
            </button>
            <button className="bg-green-600 hover:bg-green-800 rounded-lg p-2 mb-4 font-bold">
              My Funding Projects
            </button>
            <button className="bg-green-600 hover:bg-green-800 rounded-lg p-2 mb-2 font-bold">
              Funding Programs
            </button>
          </div>
        </div>
        <div className="p-10">
          <div className="flex justify-between">
            <p className="text-3xl font-bold text-green-600">My Profile</p>
            <div className="flex">
              <Image src={moneyBag} alt="moneyBag" />
              <div className="bg-green-600 p-2 rounded-md h-fit">
                Total funds donated
              </div>
              <p className="text-3xl ml-1 mr-1">:</p>
              <div className="bg-green-600 p-2 rounded-md h-fit w-fit">
                $500
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
