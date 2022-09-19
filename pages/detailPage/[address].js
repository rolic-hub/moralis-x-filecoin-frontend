import React, { useState } from 'react';
import Image from 'next/image';
import { useAccount } from 'wagmi';
import program1L from '../../assest/program1L.png';
import ReactPlayer from 'react-player';
import {
  AiFillCheckCircle,
  AiOutlineTwitter,
  AiFillCloseSquare
} from 'react-icons/ai';
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
import { Window, useLaunch, useIsOpen, Launcher } from '@relaycc/receiver';
import styles from '../../styles/Home.module.css';
const detailPage = () => {
  const launch = useLaunch();
  const isOpen = useIsOpen();
  const router = useRouter();
  const { address } = useAccount();
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
              <button
                onClick={
                  () => launch('0x31600D5AF12782205F42998b19567B550c1D464e') //address of the organizer
                }
                className="px-6 py-1 ml-4 rounded-lg max-w-button   font-bold  bg-Text-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  "
              >
                chat
              </button>
              <Window />
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

export default detailPage;

/*

 const [showModal, setShowModal] = useState(false);
 
    <div className="p-5 flex justify-between">
      <div>
        <div className="flex hover:cursor-pointer w-44">
          {' '}
          <div className="pl-5 pr-2">
            <Image src={vector} alt="logo" />
          </div>
          <div className="mt-3">
            <Image src={Funder} alt="funders" />
          </div>
        </div>
        <div className="ml-5">
          <div>
            <p className="mt-10 text-2xl text-orange-400 ml-10 font-bold">
              Verifying Stage
            </p>
            <p className="mt-5 ml-10 w-3/5 text-md">
              The program is in Verifying Stage. Please Look at the program
              carefully and then vote. If the program is fake then Click on the
              Reject button
            </p>
            <div className="ml-10">
              <p className="mt-10 font-bold text-2xl mb-5">
                {' '}
                US Fund Raising program
              </p>
              <p className="w-3/5">
                Help us fight feed thousands of people in poverty, homeless
                poeple and provide medical care for the poor
              </p>
            </div>
            <p className="mt-5 ml-12 font-semibold mb-2 text-xl">
              Introductory video
            </p>
            <div className="ml-10">
              <ReactPlayer
                url="https://youtu.be/aKYPpT4ZPeA?list=RDaKYPpT4ZPeA"
                controls={true}
              />
            </div>
            <p className="ml-10 text-xl font-bold mt-5 mb-2">Details</p>
            <div className="w-3/6 border ml-10 rounded-lg p-2 shadow-md ">
              <p>
                Help us fight feed thousands of people in poverty, homeless
                poeple and provide medical care for the poor
              </p>
            </div>
            <p className="ml-10 text-xl font-semibold mt-5 mb-3">
              More information
            </p>
            <div className="ml-10">
              <div className="flex">
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
              <div className="flex mt-2">
                <GiOnTarget size={25} className="mr-4" />
                <p className="text-md font-semibold">
                  Target: <span className="text-green-600 ml-1"> $1000</span>
                </p>
              </div>
              <div className="flex mt-2">
                <AiOutlineTwitter size={25} className="mr-4" />
                <div className="border w-fit rounded pl-1 pr-1 shadow-md">
                  <p className="text-md font-semibold">www.twitter.com</p>
                </div>
              </div>
              <div className="flex mt-2">
                <BsFacebook size={25} className="mr-4" />
                <div className="border w-fit rounded pl-1 pr-1 shadow-md">
                  <p className="text-md font-semibold">www.facebook.com</p>
                </div>
              </div>
              <div className="flex mt-2">
                <CgWebsite size={25} className="mr-4" />
                <div className="border w-fit rounded pl-1 pr-1 shadow-md">
                  <p className="text-md font-semibold">www.Other.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-20 mt-32">
        <div>
          <Image src={program1} height="250px" width="400px" alt="program-1" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 bg-orange-500 text-xl font-bold p-1 rounded-md pl-10 pr-10 ml-32"
        >
          vote
        </button>
        <VoteModal setShowModal={setShowModal} showModal={showModal} />
        <div className="mt-10 ml-20">
          <p className="flex text-md font-semibold">
            <GiPositionMarker size={25} className="mr-2" />
            Status: <span className="ml-2 text-orange-500">Verifying</span>
          </p>
          <div className="flex mt-2">
            <BiNotepad size={25} className=" mr-2" />
            <p className="text-md font-semibold">Total votes needed : 100</p>
          </div>
          <div className="flex mt-2">
            <AiFillCheckCircle size={25} className="mr-2" />
            <p className="text-md font-semibold">Accepted: 70</p>
          </div>
          <div className="flex mt-2">
            <AiFillCloseSquare size={25} className="mr-2" />
            <p className="text-md font-semibold">Rejected: 10</p>
          </div>
          <div className="flex mt-2">
            <IoTimeSharp size={25} className="mr-2" />
            <p className="text-md font-semibold">Time remaining: 2 Days</p>
          </div>
          <div className="flex mt-2">
            <BsFillChatDotsFill size={25} className="mr-2" />
            <p className="text-md font-semibold">Chat with the organizer</p>
            <button className="bg-blue-600 p-1 rounded-md font-bold mb-24 ml-2">
              Chat
            </button>
          </div>
        </div>
      </div>
    </div>
*/
