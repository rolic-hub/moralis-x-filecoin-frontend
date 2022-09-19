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
  BsFacebook
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

const Verifypage = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
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
        <h1 className="text-4xl text-lightOrange mb-5 mt-8 font-bold  ">
          Verifying Stage
        </h1>

        <p className="text-xl mb-8 w-9/12 font-normal text-lightOrange leading-extra-loose  ">
          Help us fight feed thousands of people in poverty , homeless poeple
          and provide medical care for the poor
        </p>

        <h1 className="text-2xl text-light-green   font-bold  ">
          Users Verifying
        </h1>

        {/* user 1 */}

        <div className="flex flex-col   space-y-6 mt-4">
          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Accepted
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p2} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-lightRed text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Rejected
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p3} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Accepted
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p4} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-lightRed text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Rejected
            </button>
          </div>

          <div className="flex flex-row   space-x-4 items-center ">
            <Image src={p1} />

            <h1 className="text-xl text-darkGreen font-bold  ">
              0xea123456789101112
            </h1>

            <button className="px-6 py-1 rounded-md    font-bold  bg-light-green  text-DarkBlack hover:scale-110  transition ease-in duration-150  ">
              Accepted
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
          boxDesign="w-60  shadow-orange w-custom4 pb-16 ml-20  "
          textColor={`darkGreen`}
          addDescription={true}
        />

        <div className="mr-16 mt-6  ">
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-2 mb-6 ml-24 rounded-md   font-bold  bg-lightOrange text-DarkBlack hover:scale-110  transition ease-in duration-150  "
          >
            Vote
          </button>
          <VoteModal setShowModal={setShowModal} showModal={showModal} />

          <div className="flex mt-5">
            <HiOutlineClipboardList size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Total Votes Required :{' '}
              <span className="text-green ml-1"> 100</span>
            </p>
          </div>

          <div className="flex mt-5">
            <MdCheckCircle size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Accepts: <span className="text-green ml-1"> 60</span>
            </p>
          </div>

          <div className="flex mt-5">
            <ImCross size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Rejects: <span className="text-green ml-1"> 10</span>
            </p>
          </div>

          <div className="flex mt-5">
            <BsClockFill size={25} className="mr-4" />
            <p className="text-md font-semibold">
              Time remaining: <span className="text-green ml-1"> 4 days</span>
            </p>
          </div>

          <div className="h-44"></div>
        </div>
      </div>
    </div>
  );
};

export default Verifypage;

// const Verifypage = () => {

// };

// export default Verifypage;

//
// return (
//   <div className="p-5 flex justify-between">
//     <div>
//       <div className="flex hover:cursor-pointer w-44">
//         {' '}
//         <div className="pl-5 pr-2">
//           <Image src={vector} alt="logo" />
//         </div>
//         <div className="mt-3">
//           <Image src={Funder} alt="funders" />
//         </div>
//       </div>
//       <div className="ml-5">
//         <div>
//           <p className="mt-10 text-2xl text-orange-400 ml-10 font-bold">
//             Verifying Stage
//           </p>
//           <p className="mt-5 ml-10 w-3/5 text-md">
//             The program is in Verifying Stage. Please Look at the program
//             carefully and then vote. If the program is fake then Click on the
//             Reject button
//           </p>
//           <div className="ml-10">
//             <p className="mt-10 font-bold text-2xl mb-5">
//               {' '}
//               US Fund Raising program
//             </p>
//             <p className="w-3/5">
//               Help us fight feed thousands of people in poverty, homeless
//               poeple and provide medical care for the poor
//             </p>
//           </div>
//           <p className="mt-5 ml-12 font-semibold mb-2 text-xl">
//             Introductory video
//           </p>
//           <div className="ml-10">
//             <ReactPlayer url="https://youtu.be/aKYPpT4ZPeA?list=RDaKYPpT4ZPeA" controls={true} />
//           </div>
//           <p className="ml-10 text-xl font-bold mt-5 mb-2">Details</p>
//           <div className="w-3/6 border ml-10 rounded-lg p-2 shadow-md ">
//             <p>
//               Help us fight feed thousands of people in poverty, homeless
//               poeple and provide medical care for the poor
//             </p>
//           </div>
//           <p className="ml-10 text-xl font-semibold mt-5 mb-3">
//             More information
//           </p>
//           <div className="ml-10">
//             <div className="flex">
//               <BsFillPersonFill size={25} className="mr-4" />
//               <p className="text-md font-semibold">
//                 Address of Organizer:{' '}
//                 <a
//                   href={`https://mumbai.polygonscan.com/`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   0xb64x6z6z6
//                 </a>
//               </p>
//             </div>
//             <div className="flex mt-2">
//               <GiOnTarget size={25} className="mr-4" />
//               <p className="text-md font-semibold">
//                 Target: <span className="text-green-600 ml-1"> $1000</span>
//               </p>
//             </div>
//             <div className="flex mt-2">
//               <AiOutlineTwitter size={25} className="mr-4" />
//               <div className="border w-fit rounded pl-1 pr-1 shadow-md">
//                 <p className="text-md font-semibold">www.twitter.com</p>
//               </div>
//             </div>
//             <div className="flex mt-2">
//               <BsFacebook size={25} className="mr-4" />
//               <div className="border w-fit rounded pl-1 pr-1 shadow-md">
//                 <p className="text-md font-semibold">www.facebook.com</p>
//               </div>
//             </div>
//             <div className="flex mt-2">
//               <CgWebsite size={25} className="mr-4" />
//               <div className="border w-fit rounded pl-1 pr-1 shadow-md">
//                 <p className="text-md font-semibold">www.Other.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="mr-20 mt-32">
//       <div>
//         <Image src={program1} height="250px" width="400px" alt="program-1" />
//       </div>
//       <button
//         onClick={() => setShowModal(true)}
//         className="mt-5 bg-orange-500 text-xl font-bold p-1 rounded-md pl-10 pr-10 ml-32"
//       >
//         vote
//       </button>
//
//       <div className="mt-10 ml-20">
//         <p className="flex text-md font-semibold">
//           <GiPositionMarker size={25} className="mr-2" />
//           Status: <span className="ml-2 text-orange-500">Verifying</span>
//         </p>
//         <div className="flex mt-2">
//           <BiNotepad size={25} className=" mr-2" />
//           <p className="text-md font-semibold">Total votes needed : 100</p>
//         </div>
//         <div className="flex mt-2">
//           <AiFillCheckCircle size={25} className="mr-2" />
//           <p className="text-md font-semibold">Accepted: 70</p>
//         </div>
//         <div className="flex mt-2">
//           <AiFillCloseSquare size={25} className="mr-2" />
//           <p className="text-md font-semibold">Rejected: 10</p>
//         </div>
//         <div className="flex mt-2">
//           <IoTimeSharp size={25} className="mr-2" />
//           <p className="text-md font-semibold">Time remaining: 2 Days</p>
//         </div>
//         <div className="flex mt-2">
//           <BsFillChatDotsFill size={25} className="mr-2" />
//           <p className="text-md font-semibold">Chat with the organizer</p>
//           <button className="bg-blue-600 p-1 rounded-md font-bold mb-24 ml-2">
//             Chat
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
