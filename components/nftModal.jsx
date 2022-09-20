import Image from 'next/image';
import React, { useState } from 'react';
import program1 from '../assest/program1.png';

export default function NftModal({ showModal, setShowModal }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-sm">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-fit bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between ml-20 mt-2 rounded-t">
                  <h3 className="text-2xl text-green-500 font-semibold">
                    Mint goodwill nft
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
                <div className="flex-auto pl-2 pr-2">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    <div>
                      <p className="ml-2">
                        Mint a goodwill nft to the creator of this Cause
                      </p>
                      <div className="flex">
                        <div className="mt-2">
                          <p className="text-sm font-semibold text-black mb-1 ml-5">
                            Mint default Nft:
                          </p>
                          <div className="flex">
                            <p className="flex text-sm ml-2 mr-2 font-semibold">
                              Image{' '}
                            </p>
                            <div>
                              <Image height="200px" width="300px" src={program1} alt="program-1" />
                            </div>
                          </div>
                          <div className="flex">
                            <p className="text-sm ml-2 mr-2 mt-1 font-semibold">
                              Title{' '}
                            </p>
                            <p className="text-xs font-semibold border-2 border-black text-blue-600 p-1 rounded-lg ml-2 ">
                              A Goodwill nft
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 ml-5">
                          <p className="text-sm font-semibold text-black mb-1 ml-5">
                            Mint custom Nft:
                          </p>
                          <div className="flex">
                            <p className="flex text-sm ml-2 mr-2 mt-1 font-semibold">
                              Image{' '}
                            </p>
                            <div>
                              <input
                                type="file"
                                className="w-36 rounded-lg border "
                              />
                            </div>
                          </div>
                          <div className="flex mt-5">
                            <p className="text-sm ml-2 mr-2 mt-1 font-semibold">
                              Title{' '}
                            </p>
                            <input
                              type="text"
                              className="w-36 rounded-lg text-center border "
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </p>
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
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm p-1  rounded shadow hover:shadow-lg outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Mint
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
