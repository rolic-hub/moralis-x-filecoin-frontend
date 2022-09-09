import React, { useState } from "react";
import Layout from "../components/Layout";
import program1 from "../assest/program1.png";
import Image from "next/image";

const FundingProgram = () => {
  const [currentPage, setcurrentPage] = useState(2);
  const [verify, setVerify] = useState(true);
  const [progress, setProgress] = useState(false);
  const [completed, setCompleted] = useState(false);

  const verifyClick = () => {
    setProgress(false);
    setCompleted(false);
    setVerify(true);
  };
  const progressClick = () => {
    setVerify(false);
    setCompleted(false);
    setProgress(true);
  };
  const completedClick = () => {
    setVerify(false);
    setProgress(false);
    setCompleted(true);
  };
  return (
    <div>
      <Layout>
        <div className="w-full mt-10">
          <div>
            <p className="text-green-600 font-bold ml-20 text-3xl">
              Funding programs
            </p>
          </div>
          <div className="flex mt-14 ml-44 justify-between mr-80">
            <p className="text-xl font-bold hover:cursor-pointer">Verifying</p>
            <p className="text-xl font-bold  hover:cursor-pointer ml-40">
              In progress
            </p>
            <p className="text-xl font-bold  hover:cursor-pointer ml-48">
              Completed
            </p>
          </div>
        </div>
        <hr className="w-full mt-5" />
        <div>
          {verify && (
            <div>
              <div className="mt-10 ml-24 border rounded-lg shadow-md w-60">
                <Image
                  src={program1}
                  width="300px"
                  height="150px"
                  alt="program-1"
                />
                <p className="font-bold ml-2">Health care program</p>
                <p className="text-xs mt-2 leading-normal text-left ml-2 font-bold text-gray-500">
                  Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor
                </p>
                <button className="mt-5 bg-orange-600 p-1 ml-24 text-white rounded-md mb-3 ">
                  verify
                </button>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default FundingProgram;
