import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const notClicked =
    'bg-green-600 hover:bg-green-800 rounded-lg pr-16 pb-1 pt-1 pl-2 mb-4 font-bold text-left';

  const onClickedOn =
    'bg-Text-green text-black-background rounded-lg pr-16 pb-1 pt-1 pl-2  mb-4    font-bold text-left ';

  const _profilepage = () => {
    setCurrentPage(0);
    router.push('/profile/8');
  };
  const _fundingPage = () => {
    setCurrentPage(1);
    router.push('/my-funding-projects');
  };
  const _fundingProgram = () => {
    setCurrentPage(2);
    router.push('/funding-programs');
  };

  return (
    <div className="bg-black-background text-Text-green">
      <Navbar />
      <hr className="h-1 rounded-lg w-full bg-Text-green " />
      <div className="flex">
        <div className="flex w-80 h-full border-r-4 border-Text-green">
          <div className="flex flex-col m-10 h-screen">
            <button
              className={currentPage === 0 ? onClickedOn : notClicked}
              onClick={_profilepage}
            >
              My Profile
            </button>
            <button
              onClick={_fundingPage}
              className={currentPage === 1 ? onClickedOn : notClicked}
            >
              My Funding Projects
            </button>
            <button
              onClick={_fundingProgram}
              className={currentPage === 2 ? onClickedOn : notClicked}
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
