import React, { useState } from 'react';
import Image from 'next/image';
import CauseBox from '../../components/causeBox';
import program1L from '../../assest/program1L.png';
import program1 from '../../assest/program1.png';
import p1 from '../../assest/profil1.png';
import p2 from '../../assest/Ellipse9.png';
import p3 from '../../assest/Ellipse10.png';
import p4 from '../../assest/Ellipse13.png';
import p5 from '../../assest/Ellipse14.png';

import { BiNotepad } from 'react-icons/bi';
import VoteModal from '../../components/voteModal';
import ReactPlayer from 'react-player';
import {
  AiFillCheckCircle,
  AiOutlineTwitter,
  AiFillCloseSquare
} from 'react-icons/ai';
import { IoTimeSharp } from 'react-icons/io5';
import {
  BsFillPersonFill,
  BsFillChatDotsFill,
  BsFacebook,
  BsFillQuestionCircleFill
} from 'react-icons/bs';

import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';
import { GiOnTarget, GiPositionMarker } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';

import { HiOutlineClipboardList } from 'react-icons/hi';

import { ImCross } from 'react-icons/im';

import { BsClockFill } from 'react-icons/bs';
import { MdCheckCircle } from 'react-icons/md';

const CompletedPage = () => {
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };
  return (
    <div className="bg-black-background   flex  w-custom5   text-light-green ">
      {/* Left side */}
      <div className="flex flex-col w-6/12 ml-16   ">
        <button
          onClick={_fundingPage}
          className="px-4 py-2 rounded-lg max-w-button  mt-6 font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
        >
          Back
        </button>
        <h1 className="text-4xl text-lightBlue mb-5 mt-8 font-bold  ">
          Completed State
        </h1>

        <p className="text-xl mb-8 w-12/12 font-normal text-lightBlue leading-extra-loose  ">
          Wohoo ! the program has succuessfully raised its funding and it is now
          completed.
        </p>

        <h1 className="text-3xl text-light-green mb-4  font-bold  ">
          Users Donated
        </h1>

        {/* user 1 */}

        <div className="flex flex-col   space-y-6 mt-4">
          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              0.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p2} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              2 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p3} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              3 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p4} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              5.01 ETH
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              2.014 ETH
            </button>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col w-6/12 text-light-green rounded-xl justify-end items-end mt-8 mr-40 mt-12  ">
        <CauseBox
          image={program1L}
          message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
          progressAmount="500/1000" // dynamic
          progressValue={50}
          title="Health care program"
          buttonDesign={`mt-5 bg-orange p-1 ml-1  px-6 py-2 ml-2  text-white-background font-bold text-xs rounded-md mb-3`}
          progressDesign={`ml-20 h-4 rounded-lg bg-transparent mb-3 w-28`}
          // onClicked={vote}
          boxDesign="w-60  shadow-lightBlue w-custom4 pb-16 ml-20  "
          textColor={`darkGreen`}
          addDescription={true}
        />

        <div className="ml-28 mt-6  ">
          <button className="px-10 py-2 mb-6 ml-24 rounded-md   font-bold  bg-lightBlue text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
            Completed
          </button>

          <div>
            <button className="px-10 py-2 mb-6 ml-24 rounded-md   font-bold  bg-light-green text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Withdraw Funds (only Owner)
            </button>
          </div>

          <div className="flex ml-24  mt-5">
            <RiMoneyDollarCircleFill size={45} className=" " />
            <p className="text-xl font-semibold mt-2  ml-2">
              Total Funds Raised :{' '}
              <span className="text-green ml-1"> 100 $</span>
            </p>
          </div>

          <div className="h-80"></div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
