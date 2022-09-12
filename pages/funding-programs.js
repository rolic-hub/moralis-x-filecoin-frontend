import React, { useState } from 'react';
import Layout from '../components/Layout';
import program1 from '../assest/program1.png';
import Image from 'next/image';
import CauseBox from '../components/causeBox';
import { useRouter } from 'next/router';
import { GiSandsOfTime } from 'react-icons/gi';
import { BiDollarCircle } from 'react-icons/bi';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const FundingProgram = () => {
  const [verify, setVerify] = useState(true);
  const [progress, setProgress] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [reject, setReject] = useState(false);
  const router = useRouter();
  const clicked = 'text-orange-600';

  const verifyClick = () => {
    setProgress(false);
    setCompleted(false);
    setReject(false);
    setVerify(true);
  };
  const progressClick = () => {
    setVerify(false);
    setCompleted(false);
    setReject(false);
    setProgress(true);
  };
  const completedClick = () => {
    setVerify(false);
    setProgress(false);
    setReject(false);
    setCompleted(true);
  };
  const rejectedClicked = () => {
    setVerify(false);
    setProgress(false);
    setCompleted(false);
    setReject(true);
  };
  const verifyButton = () => {
    router.push(`/verifying/8`);
  };
  const progressButton = () => {
    router.push(`/progress/8`);
  };
  const completedButton = () => {
    router.push(`/completed/8`);
  };
  return (
    <div>
      <Layout>
        <div className="w-full mt-10">
          <div>
            <p className="text-green-600 font-bold ml-20 text-3xl">
              Funding programs
            </p>
          </div>
          <div className="flex mt-14 ml-40 mr-80">
            <div>
              <p
                onClick={verifyClick}
                className={`text-xl font-bold hover:cursor-pointer flex ${
                  verify ? 'text-orange-500' : ''
                }`}
              >
                Verifying <GiSandsOfTime className="mt-1" />
              </p>
              {verify && (
                <hr className="w-full h-1  bg-green-600 rounded-lg " />
              )}
            </div>

            <div>
              <p
                onClick={progressClick}
                className={`text-xl font-bold hover:cursor-pointer ml-16 flex ${
                  progress ? 'text-green-600' : ''
                }`}
              >
                In progress <BiDollarCircle className="mt-1 ml-1" />
              </p>
              {progress && (
                <hr className="w-28 h-1 ml-16 bg-green-600 rounded-lg " />
              )}
            </div>
            <div>
              <p
                onClick={rejectedClicked}
                className={`text-xl font-bold hover:cursor-pointer ml-16 flex ${
                  reject ? 'text-red-600' : ''
                }`}
              >
                Rejected <AiOutlineCloseCircle className="mt-1 ml-1" />
              </p>
              {reject && (
                <hr className="w-24 h-1 ml-16 bg-green-600 rounded-lg " />
              )}
            </div>
            <div>
              <p
                onClick={completedClick}
                className={`text-xl font-bold hover:cursor-pointer ml-16 flex ${
                  completed ? 'text-blue-600' : ''
                }`}
              >
                Completed <BsCheckCircle className="mt-1 ml-1" />
              </p>
              {completed && (
                <hr className="w-28 h-1 ml-16 bg-green-600 rounded-lg " />
              )}
            </div>
          </div>
        </div>
        <hr className="w-full mt-5 bg-black h-0.5" />
        <div>
          {verify && (
            <div>
              <div className="mt-10 ml-20 border rounded-lg shadow-md w-60">
                <Image
                  src={program1}
                  width="300px"
                  height="150px"
                  alt="program-1"
                />
                <p className="font-bold ml-2">Health care program</p>
                <p className="text-xs mt-2 leading-normal text-left ml-2 font-bold text-gray-500">
                  Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor
                </p>
                <button
                  onClick={verifyButton}
                  className="mt-5 bg-orange-600 p-1 ml-24 text-sm font-semibold text-white rounded-md mb-3 "
                >
                  verify
                </button>
              </div>
            </div>
          )}
          {progress && (
            <div>
              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="In progress"
                image={program1}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="500/1000"
                progressValue={50}
                title="Health care program"
                buttonDesign={`mt-5 bg-green-600 p-1 ml-1 font-semibold text-white text-xs rounded-md mb-3`}
                progressDesign={`ml-10 h-3 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={progressButton}
                boxDesign="w-60"
              />
            </div>
          )}
          {completed && (
            <div>
              <CauseBox
                addbutton={true}
                addProgress={true}
                buttonText="completed"
                image={program1}
                message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
                progressAmount="1000/1000"
                progressValue={100}
                title="Health care program"
                buttonDesign={`mt-5 bg-blue-600 font-semibold p-1 ml-1 text-white text-xs rounded-md mb-3`}
                progressDesign={`ml-10 h-3 bg-blue-600 rounded-lg bg-transparent mb-3 w-28`}
                onClicked={completedButton}
                boxDesign="w-60"
              />
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
};

export default FundingProgram;
