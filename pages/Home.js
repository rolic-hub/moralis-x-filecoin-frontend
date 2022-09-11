import Image from "next/image";
import React, {useState} from "react";
import donate from "../assest/donateMoney.png";
import Navbar from "../components/Navbar";


const HomePage = () => {
  
  return (
    <div>
      <Navbar/>
      <div className="flex">
        <div className="p-10 w-8/12 pt-32">
          <p className="text-3xl font-bold text-green-500 pb-10">
            A place where you can gather funding for your projects
          </p>
          <p className="text-2xl ">
            Funder is a web3 charity funding platform. Where organizers could
            post projects and gather funding for your project in a decentralized
            and transparent manner. Users can donate with crypto currency and help
            others in their goal
          </p>
        </div>
        <div>
          <Image src={donate} alt="donate-funds" />
        </div>
      </div>
      <p className="text-center text-3xl text-green-500 font-bold">What we are all about</p>
    </div>
  );
};

export default HomePage;
