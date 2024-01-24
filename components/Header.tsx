"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    // Navigate to the login page
    router.push("/login");
  };
  return (
    <div className="min-h-screen flex flex-col justify justify-evenly items-center relative mb-0 text-white ">
      <Image
        src="/hello-park.jpeg"
        aria-hidden="true"
        fill={true}
        alt=""
        className="absolute h-full w-full -z-20 object-cover object-center xs:w-[480px] md:w-[800px] xl:w-[1300px] rounded-3xl"
      />
      <div className="flex flex-col justify justify-between items-center ">
        <div className="md:mt-[220px] xs:mt-5 text-5xl xs:text-sm text-center font-normal  tracking-wider md:leading-loose xs:leading-relaxed drop-shadow-2xl ">
          <div>Your</div> <div>Serene Path</div> <div>to</div>{" "}
          <div>Nature's</div>
          Beauty
        </div>
        <div className="flex flex-col justify justify-between items-center text-center relative mt-[200px] xs:mt-0 py-2 px-5 rounded-full  font-medium drop-shadow-2xl text-lg leading-loose">
          <div className="">Sign in for a serene adventure with Zen.</div>
          <div className="">Explore nature's beauty effortlessly!</div>
        </div>
        <div className="flex flex-row bg-yellow-10  max-w-{600px} items-center rounded-full mt-5 focus:outline-none hover:bg-yellow-10 hover:text-white hover:opacity-60 mb-5">
          <button className="px-5 py-2 rounded-full" onClick={handleJoinClick}>
            Join here
          </button>
        </div>
        <div className="flex my-10 mx-auto">
          <Image
            src="/reshot-icon-camping-tent-LHPJ9STM27.svg"
            alt="Zen logo"
            height={100}
            width={100}
          />
        </div>
        <div className="flex flex-col justify justify-evenly items-center relative sm:mt-24 lg:mt-40 pb-16 mb-16 gap-16 sm:gap-24 lg:gap-40 overflow-hidden text-center md:text-white">
          <div className="grid py-8 px-3">
            <small className="font-medium drop-shadow-2xl text-lg pt-4 md:text-yellow-10">
              WHAT DREAMS ARE MADE OF
            </small>
            <div className="mt-10 text-5xl xs:text-sm text-center font-normal text-white tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl md:text-yellow-10">
              <div className="">Trips</div> <div className="">for </div>
              <div className="">Everyone</div>
            </div>
            <div className="flex flex-col text-center relative  mt-[200px] xs:mt-0 py-2 px-5 rounded-full  font-medium drop-shadow-2xl text-lg leading-loose md:text-yellow-10">
              <p className="max-w-prose ">
                Your starter to National Park serenity. Unwind as you explore
                parks and campgrounds through a calming and visually pleasing
                browsing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
