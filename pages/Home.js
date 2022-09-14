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

  return (
    <div className={styles.home}>
      <Navbar />

      <div className="flex  ">
        <div className="p-10 w-7/12 pt-32">
          {/* <button onClick={() => disconnect()}> Disconnect</button>
          <button onClick={() => account}> Disconnect</button> */}
          <p className="text-3xl font-bold text-green-500 pb-10">
            A place where you can gather funding for your projects
          </p>
          <p className="text-2xl dark:text-green-600 leading-relaxed">
            Funder is a web3 charity funding platform. Where organizers could
            post projects and gather funding for your project in a decentralized
            and transparent manner. Users can donate with crypto currency and
            help others in their goal
          </p>
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
