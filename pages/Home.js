import Image from 'next/image';
import React, { useState } from 'react';
import donate from '../assest/donateMoney.png';
import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';

const HomePage = () => {
  const router = useRouter();

  const starter = () => {
    router.push('/overview');
  };
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="p-10 w-7/12 pt-32">
          <p className="text-4xl font-bold text-green-500 text-gradient bg-gradient-to-r from-green-600 via-blue-400 to-blue-500  pb-10">
            A place where you can gather funding for your projects
          </p>
          <p className="text-2xl dark:text-green-600 leading-loose">
            Funder is a web3 charity funding platform. Where organizers could
            post projects and gather funding for your project in a decentralized
            and transparent manner. <br /> <br /> Users can donate with crypto
            currency and help others in their goal
          </p>
          <button
            onClick={starter}
            className="mt-20 p-2 pl-3 pr-3 text-black font-bold shadow-lg bg-green-600  dark:bg-gradient-to-b from-green-600 to-black ml-10"
          >
            {' '}
            Get Started
          </button>
        </div>
        <div>
          <Image src={donate} alt="donate-funds" />
        </div>
      </div>
      <p className="text-center text-3xl text-green-500 font-bold">
        What we are all about
      </p>
    </div>
  );
};

export default HomePage;
