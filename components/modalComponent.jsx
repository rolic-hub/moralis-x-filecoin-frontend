import React, { useState } from "react";
import Image from "next/image";
import Funder from "../assest/Funder.png";
import vector from "../assest/Vector.png";

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center pt-48 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between pt-5 pl-5 pr-5 border-solid border-slate-200 rounded-t">
                  <div className="flex hover:cursor-pointer">
                    {" "}
                    <div className="pl-2 pr-2">
                      <Image
                        src={vector}
                        height="30px"
                        width="30px"
                        alt="logo"
                      />
                    </div>
                    <div className="mt-2">
                      <Image
                        src={Funder}
                        height="20px"
                        width="80px"
                        alt="funders"
                      />
                    </div>
                  </div>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <p className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </p>
                  </button>
                </div>
                <p className="text-2xl pl-5 mt-5 ml-48 font-semibold text-black">
                  Create new cause
                </p>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex ml-5 p-5">
                    <div>
                      <label className="text-black text-sm" htmlFor="title">
                        Title of the cause
                      </label>
                      <p className="text-xs text-gray-500">
                        write title of the program
                      </p>
                    </div>
                    <input
                      className="ml-44 h-8 w-72 shadow-md rounded-lg text-center"
                      id="title"
                      type="text"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <div>
                      <label className="text-black text-sm" htmlFor="description">
                        Description of the cause
                      </label>
                      <p className="text-xs text-gray-500">
                        describe the details of this cause{" "}
                      </p>
                    </div>
                    <textarea
                      className="ml-32 w-72 shadow-md rounded-lg"
                      id="description"
                      rows="5"
                      type="text"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <div>
                      {" "}
                      <label className="text-black text-sm" htmlFor="bg-image">
                        Background image
                      </label>
                      <p className="text-xs text-gray-500">
                        An image you think represents this cause
                      </p>
                    </div>
                    <input
                      className="ml-20 w-72 shadow-md rounded-lg"
                      id="bg-image"
                      type="image"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <div>
                      <label className="text-black text-sm" htmlFor="video">
                        Introductory video
                      </label>
                      <p className="text-xs text-gray-500">
                        A video relating to your cause
                      </p>
                    </div>
                    <input
                      className="ml-36 w-72 shadow-md rounded-lg"
                      id="video"
                      type="file"
                    />
                  </div>
                  <div className="flex  ml-5 p-5">
                    <label className="text-black text-sm" htmlFor="twitter">
                      Twitter Link
                    </label>
                    <input
                      className="ml-60 w-72 shadow-md rounded-lg"
                      id="twitter"
                      type="text"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <label className="text-black text-sm" htmlFor="facebook">
                      Facebook Link
                    </label>
                    <input
                      className="ml-56 w-72 shadow-md rounded-lg"
                      id="facebook"
                      type="text"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <div className="w-fit"><label className="text-black text-sm" htmlFor="website">
                      Website Link
                    </label></div>
                    <input
                      className="ml-60 w-72 shadow-md rounded-lg"
                      id="website"
                      type="text"
                    />
                  </div>
                  <div className="flex ml-5 p-5">
                    <div>
                      <label className="text-black text-sm" htmlFor="taget">
                        Target
                      </label>
                      <p className="text-xs text-gray-500">
                        target for this cause
                      </p>
                    </div>
                    <input
                      className="ml-52 text-center shadow-md rounded-lg"
                      id="target"
                      type="number"
                    />{" "}
                    <p className="text-2xl ml-1 text-black">$</p>
                  </div>
                  <p className="text-black ml-10 mt-5">Note:</p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit form
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
