import React, {useState} from "react";
import CauseBox from "./causeBox";
import {FaThumbsUp, FaThumbsDown} from "react-icons/fa"
import program1 from "../assest/program1.png"


export default function VoteModal({showModal, setShowModal}) {
 
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-sm">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between rounded-t">
                  <h3 className="text-2xl text-orange-500 ml-32 mt-5 mb-3 font-semibold">
                    Voting
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="flex-auto">
                 <div>
                 <p className=" text-slate-500 pl-4 pr-4 text-sm leading-relaxed">
                  Please be careful in voting. press accept if it the program seems original or press reject if it is a scam
                  </p>
                 </div>
                 <p className="font-semibold mt-2 ml-20 ">Program</p>
                 <div>
                    <CauseBox
                    addProgress={false}
                    addbutton={false}
                    image={program1}
                    boxDesign="w-60 mt-2"
                    message="Help us fight feed thousands of people in poverty , homeless poeple and provide medical care for the poor"
                    />
                 </div>
                 <div className="flex p-1 ml-10 mt-5">
                  <button className="flex bg-green-500 rounded-lg p-1 mr-4">
                    <FaThumbsUp className="ml-1 mr-1 " size={20}/>
                    <p className="text-white font-semibold">Accept</p>
                  </button>
                  <button className="flex bg-red-500 rounded-lg p-1" >
                    <FaThumbsDown className="ml-1 mr-1 mt-1" size={20}/>
                    <p className="text-white font-semibold">Reject</p>
                  </button>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 
                     text-sm outline-none  focus:outline-none mr-1 mb-3 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}