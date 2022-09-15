import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import vector from '../assest/Vector.png';
import Funder from '../assest/Funder.png';
import { COnnectButton } from './connectButton';
import { useRouter } from 'next/router';
import { useDisconnect } from 'wagmi';
import { useAccount } from 'wagmi';

const Navbar = () => {
  const { disconnect } = useDisconnect();
  const { isConnecting, isConnected, isDisconnected } = useAccount();
  const router = useRouter();
  const [] = useState();

  const backHome = () => {
    router.push('/');
  };
  const homeclick = () => {
    router.push('/Home');
  };
  const mainpageclick = () => {
    router.push('/overview');
  };

  // if (isConnected) {
  //   router.push('/Home');
  // }

  if (isDisconnected) {
    router.push('/');
  }

  return (
    <div className="flex border-b-3 border-black dark:border-green-600 bg-black-background text-Text-green p-5 justify-between">
      <div className="flex hover:cursor-pointer" onClick={backHome}>
        {' '}
        <div className="pl-5 pr-5">
          <Image src={vector} alt="logo" />
        </div>
        <div className="mt-3">
          <Image src={Funder} alt="funders" />
        </div>
      </div>
      <div className="flex">
        <div>
          <p
            onClick={homeclick}
            className="text-2xl text-green-600  hover:cursor-pointer font-bold mr-5 mt-3 hover:scale-110 transition ease-in duration-150"
          >
            Home
          </p>
          {router.pathname === '/Home' && (
            <hr className="h-1 rounded-lg w-16 bg-Text-green mr-5" />
          )}
        </div>
        <div>
          <p
            onClick={mainpageclick}
            className="text-2xl text-green-600 font-bold mt-3  hover:cursor-pointer hover:scale-110 transition ease-in duration-150"
          >
            Main Page
          </p>
          {(router.pathname === '/overview' ||
            router.pathname === '/my-funding-projects' ||
            router.pathname === '/funding-programs') && (
            <hr className="h-1 rounded-lg w-28 bg-Text-green  mr-5" />
          )}
        </div>
      </div>

      <COnnectButton />
    </div>
  );
};

export default Navbar;
