import React, {useState} from "react";
import CauseBox from "./causeBox";
import program1 from "../assest/program1.png";

export default function DonateModal({showModal, setShowModal}) {
 
  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="w-auto my-6 border-4 bg-black-background relative mx-auto max-w-sm">
             
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-fit bg-white outline-none focus:outline-none">
           
                <div className="flex items-start justify-between rounded-t">
               
                  <h3 className="text-2xl text-green-500 ml-56 mt-2 font-semibold">
                    Payment
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
                <div className="relative p-6 flex-auto">
                  <div className="flex">
                    <div>
                        <p className="text-sm mt-5 w-56">Select address , amount and click donate button to donate. Once the money is send it can’t be undone</p>
                        <div className="mt-5">
                            <label htmlFor="address">Address:</label> 
                            <input type="text" className=" text-md border ml-5 rounded-lg shadow-md " id="address"/>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="amount">Amount:</label> 
                            <input type="number" className=" text-center ml-5 border rounded-lg shadow-md" id="amount" />
                        </div>
                        <button className="bg-Text-green mt-6 ml-16 rounded-lg p-1 pl-1 pr-1 w-fit text-black-background font-semibold">Donate</button>
                       
                    </div>
                    <div className="ml-10">
                        <CauseBox
                        addProgress={true}
                        addbutton={false}
                        image={program1}
                        message="Help us fight feed thousands of people in poverty, homeless
                        people and provide medical care for the poor"
                        progressAmount="500/1000"
                        progressValue={50}
                        progresspara="ml-32"
                        progressDesign={`ml-24 h-3 bg-blue-600 rounded-lg bg-transparent mb-3 w-28`}
                        title="Health care program"
                        boxDesign="w-60 mt-2 border-2 border-Textgreen"
                        />
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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