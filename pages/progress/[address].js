import React, { useState } from 'react';
import Image from 'next/image';
import vector from '../../assest/Vector.png';
import Funder from '../../assest/Funder.png';
import program1 from '../../assest/program1.png';
import moneyBag from '../../assest/moneyBag.png';
import DonateModal from '../../components/donateModal';
import { AiOutlineTwitter } from 'react-icons/ai';
import ReactPlayer from 'react-player';
import { IoTimeSharp, IoReturnUpForwardOutline } from 'react-icons/io5';
import {
  BsFillPersonFill,
  BsFillChatDotsFill,
  BsFacebook
} from 'react-icons/bs';
import { GiOnTarget, GiPositionMarker } from 'react-icons/gi';
import { CgWebsite } from 'react-icons/cg';
import NftModal from '../../components/nftModal';

const ProgressPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [nftModal, setNftModal] = useState(false);
  return (
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
            <p className="mt-10 text-2xl text-green-600 ml-10 font-bold">
              Donation ongoing
            </p>
            <p className="mt-5 ml-10 w-8/12 text-md">
              The program is ongoing donation. Donate money to help with the
              project funding. You will get a soul bound NFT token for your
              Donation
              <p className="mt-2 font-mono font-semibold">Warning:</p>
            </p>
            <div className="ml-10">
              <p className="mt-10 font-bold text-2xl mb-5">
                {' '}
                US Fund Raising program
              </p>
              <p className="w-8/12">
                Help us fight feed thousands of people in poverty, homeless
                poeple and provide medical care for the poor
              </p>
            </div>
            <p className="mt-5 ml-12 font-semibold mb-2 text-xl">
              Introductory video
            </p>
            <div className="ml-10">
              <ReactPlayer url="https://youtu.be/aKYPpT4ZPeA?list=RDaKYPpT4ZPeA" controls={true} />
            </div>
            <p className="ml-10 text-xl font-bold mt-5 mb-2">Details</p>
            <div className="w-8/12 border ml-10 rounded-lg p-2 shadow-md ">
              <p>
                Help us fight feed thousands of people in poverty, homeless
                people and provide medical care for the poor
              </p>
            </div>
            <div>
              <p className="ml-10 text-xl font-bold mt-8 mb-2">Discussions</p>
              <p className="ml-10 text-sm text-gray-600 w-8/12">
                Share your thoughts on this cause, share info you will like
                others to know, organise IRL events etc....
              </p>
              <div className="mt-3 ml-16">
                <input
                  className="rounded-lg text-center border-2 w-72"
                  type="text"
                />
                <button className="ml-3 bg-purple-500 w-fit p-1 text-white rounded-lg">
                  send
                </button>
              </div>
              <div className="flex-1 border mt-2 ml-10 w-3/5">
                <div className="ml-10 mt-5">
                  <div className="flex">
                    <IoReturnUpForwardOutline className="ml-5" size={30} />
                    <p className=" hover:cursor-pointer text-semibold text-xs text-gray-400 mt-1">
                      {' '}
                      0xea12....
                    </p>
                  </div>
                  <div className="border w-fit rounded-lg pl-2 pr-2 mb-2">
                    join us on the 27th of the month to vist a charity home
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-2 mt-24">
        <div>
          <Image src={program1} height="250px" width="400px" alt="program-1" />
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="mt-5 bg-green-600 text-xl font-bold p-1 font-serif rounded-md pl-5 pr-5 ml-32"
        >
          Donate
        </button>
        <button
          onClick={() => setNftModal(true)}
          className="mt-5 bg-green-600 text-xl font-serif font-bold p-1 rounded-md pl-5 pr-5 ml-24"
        >
          Mint goodwill nft
        </button>
        <div className="mt-10 ml-5">
          <p className="flex text-md font-semibold">
            <GiPositionMarker size={25} className="mr-2" />
            Status:{' '}
            <span className="ml-2 text-green-600">Donation ongoing</span>
          </p>
          <div className="flex mt-2">
            <GiOnTarget size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Target: <span className="text-green-600 ml-1"> $1000</span>
            </p>
          </div>
          <div className="flex">
            <Image src={moneyBag} height="50px" width="30px" alt="money-bag" />
            <p className="text-md font-semibold mt-3 ml-2">
              Total donated: $500
            </p>
          </div>
          <div className="flex mt-1 mb-2">
            <IoTimeSharp size={25} className="mr-4" />
            <p className="text-md font-semibold">Time remaining: 2 Days</p>
          </div>
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
          <div className="flex mt-2">
            <BsFillChatDotsFill size={25} className="mr-2" />
            <p className="text-md font-semibold">Chat with the organizer</p>
            <button className="bg-blue-600 p-1 rounded-md font-bold mb-24 ml-2">
              Chat
            </button>
          </div>
          <button className="mt-24 ml-24 rounded-lg p-1 dark:bg-white dark:text-black font-semibold bg-black text-white">
            Back
          </button>
          <DonateModal showModal={showModal} setShowModal={setShowModal} />
          <NftModal showModal={nftModal} setShowModal={setNftModal} />
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
