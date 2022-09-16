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

      <div className=" text-3xl font-bold text-light-green ml-24 mt-4 mb-6">
        Create New Funding Program
      </div>

      <div className="flex  mt-4 ">
        <h1 className=" text-lg font-light text-light-green ml-24">
          Program Name
        </h1>
      </div>
    </div>
  );
}

export default CreateNewProgram;
