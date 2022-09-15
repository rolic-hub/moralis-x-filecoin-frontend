import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const router = useRouter();
  const notClicked =
    'hover:bg-green-600 rounded-lg p-2 mb-4 font-bold text-green-600 dark:hover:text-black';
  const onClickedOn =
    'bg-green-600 rounded-lg p-2 mb-4 font-bold dark:text-black';
  const _profilepage = () => {
    router.push('/profile/8');
  };
  const _fundingPage = () => {
    router.push('/my-funding-projects');
  };
  const _fundingProgram = () => {
    router.push('/funding-programs');
  };

  return (
    <div>
      <Navbar addDesign="dark:border-green-600" />
      <div className="flex">
        <div className="flex w-80 h-full border-r-4 border-black dark:border-green-600">
          <div className="flex flex-col p-10 mt-10 ml-5 h-screen">
            <button
              onClick={_profilepage}
              className={`hover:text-white ${
                router.pathname.includes('/profile/') ? onClickedOn : notClicked
              }`}
            >
              My Profile
            </button>
            <button
              onClick={_fundingPage}
              className={`hover:text-white ${
                router.pathname === '/my-funding-projects'
                  ? onClickedOn
                  : notClicked
              }`}
            >
              My Funding Projects
            </button>
            <button
              onClick={_fundingProgram}
              className={`hover:text-white ${
                router.pathname === '/funding-programs'
                  ? onClickedOn
                  : notClicked
              }`}
            >
              Funding Programs
            </button>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
