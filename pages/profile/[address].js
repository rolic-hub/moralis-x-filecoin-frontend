import Image from 'next/image';
import React, { useState } from 'react';
import moneyBag from '../../assest/moneyBag.png';
import cryptodonate from '../../assest/crytodonate.png';
import program1 from '../../assest/program1.png';
import Layout from '../../components/Layout';
import Person from '../../assest/person.png';
import styles from '../../styles/Home.module.css';
import Footer from '../../components/footer';

const ProfilePage = () => {
  return (
    <div>
      <Layout>
        <div className="flex ml-24 h-fullPage text-light-green ">
          <div>
            <div className="inline-flex">
              <p className="text-4xl mr-56 ml-5 font-bold   mt-7">My Profile</p>
              <div className="flex ml-96">
                {/* <Image
                  src={moneyBag}
                  height="30px"
                  width="30px"
                  
                  alt="moneyBag"
                /> */}
                <div className=" flex mt-8">
                  <div className="bg-light-green px-4 py-1 text-black-background rounded-md h-fit font-bold text-xl ">
                    Total funds donated :
                  </div>
                  {/* <p className="text-3xl mt-6 ml-3  font-bold ">:</p> */}
                  <div className="bg-light-green px-4 py-1 ml-2 text-black-background rounded-md h-fit font-bold text-xl  ">
                    500 $ {/*    Make this dynamic amont donated by user */}
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-3">
              <div className="flex mt-5 space-x-3">
                <div className="w-fit">
                  <Image
                    src={Person}
                    height="50px"
                    width="50px"
                    alt="address"
                  />
                </div>
                <p className="mt-2 ml-1 text-green-600 text-2xl font-semibold ">
                  0xea123456789101112{' '}
                </p>
                {/* For user only chat button*/}
                {/* <button className="bg-light-green px-4 mt-3 text-black-background rounded-md h-fit font-bold text-xl">
                  Chat
                </button> */}
              </div>
              <p className="mt-5 text-2xl leading-loose font-bold mb-3 ">
                NFT&apos;s Recieved
              </p>
              <div className="flex">
                <div className="w-fit shadow-CustomShadow dark:shadow-green-600">
                  <Image
                    src={cryptodonate}
                    height="150px"
                    alt="nft-holder"
                    className={styles.boxShadow}
                  />
                </div>
                <div className="w-fit shadow-CustomShadow ml-3 dark:shadow-green-600">
                  <Image
                    src={cryptodonate}
                    height="150px"
                    alt="nft-holder"
                    className={styles.boxShadow}
                  />
                </div>
              </div>
            </div>
            <div className="pl-5 ">
              <p className="text-2xl font-bold mb-3 mt-7 ">Programs Donated</p>
              <div className="rounded-lg border w-fit ">
                <Image
                  src={program1}
                  alt="program-holder"
                  className={styles.boxShadow}
                />
                <p className="text-center">Health care program</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default ProfilePage;
