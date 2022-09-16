import Image from 'next/image';
import React, { useState } from 'react';
import donate from '../assest/donateMoney.png';
import Navbar from '../components/Navbar';
import styles from '../styles/Home.module.css';
import { useAccount } from 'wagmi';
import { useRouter } from 'next/router';
import { useDisconnect } from 'wagmi';

const HomePage = () => {
  const { disconnect } = useDisconnect();
  const router = useRouter();
  // const account = useAccount({
  //   onDisconnect() {
  //     console.log('Disconnected');
  //     router.push('/index.js');
  //   }
  // });
  const mainpageclick = () => {
    router.push('/profile/8'); // DYNAMIC
  };

  return (
    <div className={styles.home}>
      <Navbar />

      <div className="flex   ">
        <div className="m-10 w-7/12   justify-end items-end">
          <p className="text-5xl font-bold   mb-8  w-10/12">
            <span className={styles.gradientText}>
              A place where you can gather funding for your projects
            </span>
          </p>

          <p className="text-2xl    leading-extra-loose  w-9/12">
            Funder is a web3 charity funding platform. Where organizers could
            post projects and gather funding for your project in a decentralized
            and transparent manner. Users can donate with crypto currency and
            help others in their goal
          </p>

          <button className={styles.gradientButton} onClick={mainpageclick}>
            <span className="px-5 mt-3  py-8 font-bold text-black-background  ">
              {' '}
              Get Started
            </span>
          </button>
        </div>
        <div className="w-5/12 justify-end items-end">
          <Image src={donate} alt="donate-funds" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
