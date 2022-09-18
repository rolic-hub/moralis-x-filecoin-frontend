import { useState } from 'react';
import React from 'react';
import Layout from '../../components/Layout';
import Image from 'next/image';
import program1 from '../../assest/program1.png';
import CauseBox from '../../components/causeBox';
// import Modal from '../../components/modalComponent';
import { useRouter } from 'next/router';
const MyfundingProjects = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const CreateNewProgram = () => {
    router.push('/Create-new-program');
    console.log('button pressed');
  };

  return (
    <div>
      <Layout>
        <div className="flex m-14">
          <div className="text-3xl font-bold   ">My Funding projects</div>
          <button
            className="bg-light-green px-4 py-1 text-black-background ml-custom rounded-md h-fit items-end justify-end font-bold text-xl hover:scale-110 transition ease-in duration-150"
            // className="bg-light-green px-4 py-1 text-black-background rounded-md h-fit font-bold text-xl "
            // onClick={() => setShowModal(true)}
            onClick={CreateNewProgram}
          >
            Create new program
          </button>
        </div>

        <CauseBox
          buttonText="Donate"
          image={program1}
          message=" Help us fight feed thousands of people in poverty, homeless
                  people and provide medical care for the poor"
          progressAmount="500/1000" // dynamic
          progressValue={50}
          title="Health care program"
          boxDesign="w-60 shadow-green pb-4 w-custom4  ml-14 "
          textColor={`darkGreen`}
          addDescription={true}
          // onClicked={} // move to detail page
        />

        {/* <div className="mt-10 border rounded-lg text-darkGreen shadow-green w-72">
            <Image
              src={program1}
              width="300px"
              height="150px"
              alt="program-1"
            />
            <p className="font-bold ml-2 ">Health care program</p>
            <p className="text-xs mt-2 leading-normal text-left ml-2 font-bold text-gray-500 text-Text-green">
              Help us fight feed thousands of people in poverty, homeless people
              and provide medical care for the poor
            </p>
            <p className="text-xs ml-48 font-semibold mt-5 text-darkGreen">
              500/1000 $
            </p>
            <progress
              className="ml-28 h-3 rounded-lg bg-Text-green mb-3 w-36  "
              max="100"
              value="50"
            />
          </div>
        </div>   */}
      </Layout>
    </div>
  );
};

export default MyfundingProjects;
