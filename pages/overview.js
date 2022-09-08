import Image from "next/image";
import React, { useState } from "react";
import moneyBag from "../assest/moneyBag.png";
import cryptodonate from "../assest/crytodonate.png";
import program1 from "../assest/program1.png";
import Layout from "../components/Layout";

const Overview = () => {
  return (
    <div>
      <Layout>
        <div className="flex">
          <p className="text-3xl font-bold text-green-600 mt-7">My Profile</p>
          <div className="flex ml-96">
            <Image
              src={moneyBag}
              style={{ marginBottom: "40px" }}
              alt="moneyBag"
            />
            <div className="mt-5 flex">
              <div className="bg-green-600 p-1 rounded-md h-fit">
                Total funds donated
              </div>
              <p className="text-3xl ml-1 mr-1">:</p>
              <div className="bg-green-600 p-1 rounded-md h-fit w-fit">
                $500
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mt-5 text-2xl font-bold mb-3 ml-5">NFT's Recieved</p>
          <Image src={cryptodonate} alt="nft-holder" />
        </div>
        <div>
          <p className="text-2xl font-bold mb-3 mt-7 ml-5">Programs Donated</p>
          <div className="rounded-lg border shadow-md w-fit ">
            <Image src={program1} alt="program-holder" />
            <p className="text-center">Health care program</p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Overview;
