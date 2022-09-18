import React, { useState } from 'react';
import Image from 'next/image';
import vector from '../assest/Vector.png';
import Funder from '../assest/Funder.png';
import program1 from '../assest/program1.png';
import program1L from '../assest/program1L.png';
import moneyBag from '../assest/moneyBag.png';
import targer from '../assest/Goal.png';
import chat from '../assest/Chat.png';

import { BiNotepad } from 'react-icons/bi';
import VoteModal from '../components/voteModal';
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
  BsFacebook
} from 'react-icons/bs';

import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { FiTarget } from 'react-icons/fi';
import { GiOnTarget, GiPositionMarker } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
const Detail = () => {
  const router = useRouter();
  const _fundingPage = () => {
    router.push('/funding-programs'); // Make this Dynamic
    console.log('back button pressed ');
  };
  return (
    <div className="bg-black-background h-fullPage flex  w-custom5   text-light-green ">
      {/* Left side */}
      <div className="flex flex-col w-6/12 ml-16   ">
        <button
          onClick={_fundingPage}
          className="px-4 py-2 rounded-lg max-w-button  mt-6 font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
        >
          Back
        </button>
        <h1 className="text-4xl text-light-green mb-5 mt-8 font-bold  ">
          Us Fund Raising Program
        </h1>

        <p className="text-xl mb-8 w-9/12 font-normal leading-extra-loose  ">
          Help us fight feed thousands of people in poverty , homeless poeple
          and provide medical care for the poor
        </p>

        <h1 className="text-2xl text-light-green   font-bold  ">
          Introductory Video
        </h1>

        {/* Video */}
        <div className={styles.videoWrapper}>
          <ReactPlayer
            url="https://youtu.be/aKYPpT4ZPeA?list=RDaKYPpT4ZPeA"
            controls={true}
            width="100%"
            height="100%"
          />
        </div>

        <h1 className="text-2xl text-light-green  mt-12 font-bold  ">Detail</h1>

        <div className="border rounded-xl mt-6 shadow-green">
          <p className="text-lg mb-8   font-normal leading-extra-loose  ">
            This program is hosted by the United states government . which Help
            us fight feed thousands of people in poverty , homeless poeple and
            provide medical care for the poor
          </p>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col w-6/12 text-light-green rounded-xl mt-8 ml-4  ">
        <Image
          src={program1L}
          className={styles.ImageWrapper}
          //   height="45rem"
          //   width="100%"
        />

        <div className="ml-28 mt-6">
          <div className="flex mb-4">
            <h1 className="text-2xl text-light-green   font-bold  ">
              Status :
            </h1>
            <h1 className="text-2xl text-orange font-bold  ml-3  ">
              Verifying
            </h1>
          </div>

          <div className="flex  ">
            <BsFillPersonFill size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Address of Organizer:{' '}
              <a
                href={`https://mumbai.polygonscan.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                0xb64x6z6z6
              </a>
            </p>
          </div>

          <div className="flex mt-3">
            <BsFillChatDotsFill size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Chat with the Organizer
              <a
                href={`https://mumbai.polygonscan.com/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-1 ml-4 rounded-lg max-w-button   font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
                  chat
                </button>
              </a>
            </p>
          </div>

          <div className="flex mt-5">
            <FiTarget size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Target: <span className="text-green ml-1"> $1000</span>
            </p>
          </div>

          <div className="flex mt-5">
            <RiMoneyDollarCircleFill size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Raised Amount <span className="text-green-600 ml-1"> $500</span>
            </p>
          </div>
          <div className="flex mt-5">
            <AiOutlineTwitter size={25} className="mr-4 mt-1" />
            <div className="border w-fit rounded px-3 py-1  ">
              <p className="text-md font-semibold">www.twitter.com</p>
            </div>
          </div>
          <div className="flex mt-5">
            <BsFacebook size={25} className="mr-4 mt-1" />
            <div className="border w-fit rounded px-3 py-1 ">
              <p className="text-md font-semibold">www.facebook.com</p>
            </div>
          </div>
          <div className="flex mt-5">
            <CgWebsite size={25} className="mr-4 mt-1" />
            <div className="border w-fit rounded px-3 py-1 ">
              <p className="text-md font-semibold">www.Other.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
