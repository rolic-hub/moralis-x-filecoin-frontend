import { useState } from 'react';
import React from 'react';
import { useRouter } from 'next/router';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const router = useRouter();
  const notClicked =
    'bg-green-600 hover:bg-green-800 rounded-lg pr-16 pb-1 pt-1 pl-6 mb-4 font-bold text-left';

  const onClickedOn =
    'bg-light-green text-black-background rounded-lg pr-16 pb-1 pt-1 pl-6  mb-4   font-bold text-left ';

  const _profilepage = () => {
    setCurrentPage(0);
    router.push('/profile/8'); // Make this Dynamic
  };
  const _fundingPage = () => {
    setCurrentPage(1);
    router.push('/my-funding-projects/1'); // Make this Dynamic
  };
  const _fundingProgram = () => {
    setCurrentPage(2);
    router.push('/funding-programs');
  };

  return (
    <div className="bg-black-background text-light-green">
      <Navbar />
      <hr className="h-1 rounded-lg w-full bg-light-green " />
      <div className="flex">
        <div className="flex w-80 h-full border-r-4 border-light-green">
          <div className="flex flex-col mt-10 ml-5 h-screen">
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
