import React from "react";
import Image from "next/image";
import vector from "../../assest/Vector.png";
import Funder from "../../assest/Funder.png";
import Person from "../../assest/person.png";
import CauseBox from "../../components/causeBox";
import program1 from "../../assest/program1.png";
import moneyBag from "../../assest/moneyBag.png";
import { useRouter } from "next/router";

const CompletedPage = () => {
  const router = useRouter();
  const goBack = () => {
    router.push("/funding-programs");
  };
  return (
    <div className="p-5">
      <div className="flex hover:cursor-pointer w-44">
        {" "}
        <div className="pl-5 pr-2">
          <Image src={vector} alt="logo" />
        </div>
        <div className="mt-3">
          <Image src={Funder} alt="funders" />
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <div className="mt-14 ml-10">
            <p className="text-blue-600 font-bold text-3xl mb-2">Completed</p>
            <p className="w-full leading-loose text-md">
              Wohoo! the program has succuessfully raised its funding and it is
              now completed.
            </p>
            <p className="mt-2 font-mono font-bold ">
              Warning:<span></span>{" "}
            </p>
          </div>
          <div className=" mt-10 ml-10">
            <p className="text-2xl font-semibold">Discussions</p>
          </div>
          <div className="mt-32 ml-10 text-2xl font-semibold">
            <p>Users who donated </p>
          </div>
          <div className="flex mt-5">
            <div className="ml-5 ">
              <Image src={Person} height="40px" width="40px" alt="person" />
            </div>
            <div className="flex">
              <p className="text-xl font-semibold mt-2 ml-2">
                0xea123456789101112 Donated
              </p>
              <div className="bg-green-600 w-fit h-fit p-1 rounded-lg mt-1 ml-2">
                0.1 ETH
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="ml-5 ">
              <Image src={Person} height="40px" width="40px" alt="person" />
            </div>
            <div className="flex">
              <p className="text-xl font-semibold mt-2 ml-2">
                0xea123456789101112 Donated
              </p>
              <div className="bg-green-600 w-fit h-fit p-1 rounded-lg mt-2 ml-2">
                0.1 ETH
              </div>
            </div>
          </div>
          <div className="flex mt-5">
            <div className="ml-5 ">
              <Image src={Person} height="40px" width="40px" alt="person" />
            </div>
            <div className="flex">
              <p className="text-xl font-semibold mt-2 ml-2">
                0xea123456789101112 Donated
              </p>
              <div className="bg-green-600 w-fit h-fit p-1 rounded-lg mt-2 ml-2">
                0.1 ETH
              </div>
            </div>
          </div>
        </div>
        <div className="mr-20">
          <CauseBox
            addProgress={true}
            addbutton={true}
            buttonText="completed"
            message="Help us fight feed thousands of people in poverty, homeless poeple and provide medical care for the poor"
            progressAmount="1000/1000"
            progressValue={100}
            progressDesign={`ml-20 h-3 bg-blue-600 rounded-lg bg-transparent mb-3 w-28`}
            buttonDesign={`mt-5 bg-blue-600 font-semibold p-1 ml-2 text-white text-sm rounded-md mb-3`}
            image={program1}
            title="US Fund Raising program"
            boxDesign="w-72"
          />
          <div className="flex mt-7 ml-14">
            <div className="ml-12">
              <Image
                src={moneyBag}
                height="50px"
                width="30px"
                alt="money-bag"
              />
            </div>
            <p className="mt-3 font-serif font-semibold">
              Total funds raised: $1000
            </p>
          </div>

          <button className="ml-40 w-fit bg-red-500 p-1 rounded-lg font-semibold text-white">
            Withdraw funds
          </button>
          <div className="mt-44 ml-80 w-fit bg-black p-2 rounded-lg">
            <button onClick={goBack} className="text-white">
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedPage;
