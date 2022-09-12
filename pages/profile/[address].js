import Image from 'next/image';
import React, { useState } from 'react';
import moneyBag from '../../assest/moneyBag.png';
import cryptodonate from '../../assest/crytodonate.png';
import program1 from '../../assest/program1.png';
import Layout from '../../components/Layout';
import Person from "../../assest/person.png";

const ProfilePage = () => {
  return (
    <div>
      <Layout>
        <div className="flex p-10 ">
          <div>
            <div className='inline-flex'>
              <p className="text-3xl mr-56 ml-10 font-bold text-green-600 mt-7">
                My Profile
              </p>
              <div className="flex ml-96">
                <Image
                  src={moneyBag}
                  height="30px"
                  width="30px"
                  //   style={{ marginBottom: "40px" }}
                  alt="moneyBag"
                />
                <div className="mt-4 flex">
                  <div className="bg-green-600 p-1 rounded-md h-fit font-semibold">
                    Total funds donated
                  </div>
                  <p className="text-3xl ml-1 mr-1 font-semibold">:</p>
                  <div className="bg-green-600 p-1 rounded-md font-semibold h-fit w-fit">
                    $500
                  </div>
                </div>
              </div>
            </div>
            <div className="pl-5">
                <div className='flex mt-10'>
                    <div className='w-fit'>
                        <Image src={Person} height="50px" width="50px" alt="address"/>
                    </div>
                    <p className='mt-2 ml-1 text-green-600 text-2xl font-semibold '>0xea123456789101112 </p>
                    <button className='bg-green-600 w-fit p-1 h-fit ml-1 pl-1 pr-1 rounded-lg mt-2 font-semibold '>Chat</button>
                </div>
              <p className="mt-5 text-2xl leading-loose font-bold mb-3 ml-5">
                NFT&apos;s Recieved
              </p>
              <div className="flex">
                <div className="w-fit shadow-md dark:shadow-green-600">
                  <Image src={cryptodonate} height="150px" alt="nft-holder" />
                </div>
                <div className="w-fit shadow-md ml-3 dark:shadow-green-600">
                  <Image src={cryptodonate} height="150px" alt="nft-holder" />
                </div>
              </div>
            </div>
            <div className="pl-5">
              <p className="text-2xl font-bold mb-3 mt-7 ml-5">
                Programs Donated
              </p>
              <div className="rounded-lg border shadow-md w-fit  dark:shadow-green-600">
                <Image src={program1} alt="program-holder" />
                <p className="text-center">Health care program</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default ProfilePage;
