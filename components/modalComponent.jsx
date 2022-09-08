import React, { useState } from "react";
import Image from "next/image";
import Funder from "../assest/Funder.png";
import vector from "../assest/Vector.png";

export default function Modal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
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
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      X
                    </span>
                  </button>
                </div>
                <p className="text-2xl pl-5 mt-3 font-semibold text-black">
                  Create new funding cause
                </p>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <div className="flex ">
                    <div>
                      <label className="text-black" htmlFor="title">
                        Title of the cause
                      </label>
                      <p className="text-black">write title of the program</p>
                    </div>
                    <input id="title" type="text" />
                  </div>
                  <div className="flex">
                    <div>
                      <label className="text-black" htmlFor="description">
                        Description of the cause
                      </label>
                      <p className="text-black">
                        tell us in details about this cause{" "}
                      </p>
                    </div>
                    <textarea id="description" rows="5" type="text" />
                  </div>
                  <div className="flex">
                    <div>
                      {" "}
                      <label className="text-black" htmlFor="bg-image">
                        Background image
                      </label>
                      <p className="text-black">
                        An image you think represents this cause
                      </p>
                    </div>
                    <input id="bg-image" type="image" />
                  </div>
                  <div className="flex">
                    <div>
                      <label className="text-black" htmlFor="video">
                        Introductory video
                      </label>
                      <p className="text-black">
                        A video relating to your cause
                      </p>
                    </div>
                    <input id="video" type="file" />
                  </div>
                  <div className="flex">
                    <label className="text-black" htmlFor="twitter">
                      twitter
                    </label>
                    <input className="text-black" id="twitter" type="text" />
                  </div>
                  <div className="flex">
                    <label className="text-black" htmlFor="facebook">
                      facebook
                    </label>
                    <input className="text-black" id="facebook" type="text" />
                  </div>
                  <div className="flex">
                    <label className="text-black" htmlFor="website">
                      website
                    </label>
                    <input className="text-black" id="website" type="text" />
                  </div>
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
                    Save Changes
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
