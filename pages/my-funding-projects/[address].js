import { useState } from 'react';
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import program1 from '../../assest/program1.png';
// import Modal from '../../components/modalComponent';
import { useRouter } from 'next/router';
const MyfundingProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const CreateNewProgram = () => {
    // router.push('/Create-new-program');
  };

  return (
    <div>
      <Layout>
        <div className="p-10 ml-24">
          <div className="flex">
            <div className="text-3xl font-bold text-green-600">
              My Funding projects
            </div>
            <button
              className="bg-light-green px-4 py-1 text-black-background ml-custom rounded-md h-fit items-end justify-end font-bold text-xl hover:scale-110 transition ease-in duration-150"
              // className="bg-light-green px-4 py-1 text-black-background rounded-md h-fit font-bold text-xl "
              // onClick={() => setShowModal(true)}
              onClick={CreateNewProgram()}
            >
              Create new program
            </button>
          </div>
          {/* <Modal showModal={showModal} setShowModal={setShowModal} /> */}
          <div className="mt-10 border rounded-lg shadow-md w-60">
            <Image
              src={program1}
              width="300px"
              height="150px"
              alt="program-1"
            />
            <p className="font-bold ml-2">Health care program</p>
            <p className="text-xs mt-2 leading-normal text-left ml-2 font-bold text-gray-500">
              Help us fight feed thousands of people in poverty, homeless people
              and provide medical care for the poor
            </p>
            <p className="text-xs ml-40 font-semibold mt-5">500/1000 $</p>
            <progress
              className="ml-20 h-3 rounded-lg bg-transparent mb-3 w-36"
              max="100"
              value="50"
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyfundingProjects;
