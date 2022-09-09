import React from "react";
import Image from "next/image";
import vector from "../../assest/Vector.png";
import Funder from "../../assest/Funder.png";
import program1 from "../../assest/program1.png";
import moneybag from "../../assest/moneyBag.png";
import video from "../../assest/video.png";
import { BiNotepad } from "react-icons/bi";
import {
  AiFillCheckCircle,
  AiOutlineTwitter,
  AiFillCloseSquare,
} from "react-icons/ai";
import { IoTimeSharp } from "react-icons/io5";
import {
  BsFillPersonFill,
  BsFillChatDotsFill,
  BsFacebook,
} from "react-icons/bs";
import { GiOnTarget } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

const Verifypage = () => {
  return (
    <div className="p-5 flex justify-between">
      <div>
        <div className="flex hover:cursor-pointer w-44">
          {" "}
          <div className="pl-5 pr-2">
            <Image src={vector} alt="logo" />
          </div>
          <div className="mt-3">
            <Image src={Funder} alt="funders" />
          </div>
        </div>
        <div className="ml-5">
          <div>
            <p className="mt-10 text-2xl text-orange-400 ml-10 font-bold">
              Verifying Stage
            </p>
            <p className="mt-5 ml-10 w-3/5 text-md">
              The program is in Verifying Stage. Please Look at the program
              carefully and then vote. If the program is fake then Click on the
              Reject button
            </p>
            <div className="ml-10">
              <p className="mt-10 font-bold text-2xl mb-5">
                {" "}
                US Fund Raising program
              </p>
              <p className="w-3/5">
                Help us fight feed thousands of people in poverty, homeless
                poeple and provide medical care for the poor
              </p>
            </div>
            <p className="mt-5 ml-12 font-semibold mb-2 text-xl">
              Introductory video
            </p>
            <div className="ml-10">
              <Image src={video} width="500" height="300px" alt="video-png" />
            </div>
            <p className="ml-10 text-xl font-bold mt-5 mb-2">Details</p>
            <div className="w-3/6 border ml-10 rounded-lg p-2 shadow-md ">
              <p>
                Help us fight feed thousands of people in poverty, homeless
                poeple and provide medical care for the poor
              </p>
            </div>
            <p>More information</p>
            
          </div>
        </div>
      </div>
      <div className="mr-20 mt-32">
        <div>
          <Image src={program1} height="250px" width="400px" alt="program-1" />
        </div>
        <button className="mt-5 bg-orange-500 text-xl font-bold p-1 rounded-md pl-10 pr-10 ml-32">
          vote
        </button>
        <div className="mt-10 ml-20">
          <div className="flex">
            <BiNotepad size={25} className=" mr-2" />
            <p className="text-md font-semibold">Total votes needed : 100</p>
          </div>
          <div className="flex mt-2">
            <AiFillCheckCircle size={25} className="mr-2" />
            <p className="text-md font-semibold">Accepted: 70</p>
          </div>
          <div className="flex mt-2">
            <AiFillCloseSquare size={25} className="mr-2" />
            <p className="text-md font-semibold">Rejected: 10</p>
          </div>
          <div className="flex mt-2">
            <IoTimeSharp size={25} className="mr-2" />
            <p className="text-md font-semibold">Time remaining: 2 Days</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verifypage;
