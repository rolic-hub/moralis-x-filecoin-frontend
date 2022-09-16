// create form page
import Navbar from '../components/Navbar';
import React, { useState } from 'react';
import Image from 'next/image';
import Funder from '../assest/Funder.png';
import vector from '../assest/Vector.png';
import styles from '../styles/Home.module.css';
function CreateNewProgram() {
  return (
    <div className={styles.NewProgram}>
      <Navbar />
      <div className="mx-56 mt-10">
        <div className=" text-3xl font-bold text-light-green ml-24 mt-4  mb-12">
          Create New Funding Program
        </div>
        <form>
          {/* First section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Program Name
            </h1>

            <div className="flex ">
              <input
                className="ml-form1 h-10 w-custom1  shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/*2 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24 mb-12">
              Cause of the program
            </h1>

            <div className="flex ">
              <input
                className="ml-form2 h-10 w-custom1 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 3 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24 mb-12">
              Program Description
            </h1>

            <div className="flex ">
              <input
                className="ml-form3 h-32 w-custom1  shadow-md rounded-lg bg-form text-center border-2 mb-12"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 4 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Background Image
            </h1>

            <div className="flex ">
              <input
                className="ml-form4 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2 "
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 5 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Introductory Video
            </h1>

            <div className="flex ">
              <input
                className="ml-form5 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 6  section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Twitter Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form6 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 7 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Facebook Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form7 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 8 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              website Link
            </h1>

            <div className="flex ">
              <input
                className="ml-form8 h-9 w-96 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
            </div>
          </div>

          {/* 8 section */}
          <div className="flex mt-4 ">
            <h1 className=" text-lg font-light text-light-green ml-24  mb-12">
              Fund goal
            </h1>

            <div className="flex ">
              <input
                className="ml-form9 h-9 w-50 shadow-md rounded-lg bg-form text-center border-2"
                id="title"
                type="text"
              />
              <span className="mt-1 -ml-12">ETH</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateNewProgram;
