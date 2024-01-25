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
    <div className="min-h-screen flex flex-col justify justify-evenly items-center relative mb-0">
      <Image
        src="/annie-spratt-wild-flowers.jpg"
        aria-hidden="true"
        fill={true}
        alt=""
        className="absolute h-full w-full -z-20 object-cover object-center xs:w-[480px] md:w-[800px] xl:w-[1300px]"
      />
      <div className="flex flex-col justify justify-between items-center ">
        <div className="md:mt-[180px] mt-[120px] text-6xl xs:text-sm text-center font-normal  tracking-wider md:leading-loose sm:leading-relaxed drop-shadow-2xl text-white-0">
          <div>Your</div> <div>Serene Path</div> <div>to</div>{" "}
          <div>Nature's</div>
          Beauty
        </div>
        <div className="text-white-0 flex flex-col justify justify-between items-center text-center relative mt-[160px] xs:mt-0 py-2 px-5 rounded-full  font-medium drop-shadow-2xl text-xl leading-loose">
          <div className="">Sign in for a serene adventure with Zen.</div>
          <div className="">Explore nature's beauty effortlessly!</div>
        </div>
        <div className="flex flex-row bg-yellow-10  max-w-{600px} items-center rounded-full my-[150px] focus:outline-none hover:bg-yellow-10  hover:scale-125 mb-5">
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
        <div className="flex flex-col justify justify-evenly items-center relative sm:mt-24 lg:mt-40 pb-16 mb-16 gap-16 sm:gap-24 lg:gap-40 overflow-hidden text-center text-yellow-10">
          <div className="grid py-8 px-3">
            <small
              className="font-medium drop-shadow-2xl text-xl pt-4 text-white"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              WHAT DREAMS ARE MADE OF
            </small>
            <div
              className="mt-10 text-6xl xs:text-sm text-center font-normal text-white tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl md:text-white"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              <div className="">Trips</div> <div className="">for </div>
              <div className="">Everyone</div>
            </div>
            <div
              className="flex flex-col text-center relative  mt-[200px] xs:mt-0 py-2 px-5 rounded-full  font-medium drop-shadow-2xl text-xl leading-loose text-white "
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              <p className="max-w-prose  text-white">
                Your doorway to National Park serenity. Unwind as you explore
                parks and campgrounds through a calming and visually pleasing
                browsing experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 ">
          <div className="flex md:flex-row flex-col items-center justify-center py-8 px-3">
            <div
              className="md:text-6xl text-4xl text-center font-normal  tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl text-yellow-10"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Your Park
            </div>
            <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
              <p
                className="max-w-prose text-white-0 xs:text-black font-normal drop-shadow-2xl text-xl leading-loose"
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Discover nature's sanctuary at Zen Parks. Immerse yourself in
                serene landscapes, vibrant trails, and breathtaking views. Your
                escape to tranquility begins here.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex md:flex-row flex-col items-center justify-center py-8 px-3">
            <div
              className="md:text-6xl text-4xl  text-center font-normal  tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl text-white-0"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Your Camp
            </div>
            <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
              <p
                className="max-w-prose text-white-0 xs:text-black font-normal drop-shadow-2xl text-xl leading-loose"
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Camp in harmony with nature at Zen Camps. Find peace in the
                great outdoors, surrounded by cozy campsites and the soothing
                sounds of nature. Your serene camping experience starts now.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col justify-center items-center text-center relative mt-[200px] xs:mt-0 py-2 px-5 rounded-full text-white-0 font-medium drop-shadow-2xl text-lg leading-loose"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="">Sign in for a serene adventure with Zen.</div>
          <div className="">Explore nature's beauty effortlessly!</div>
          <div className="mt-[30px] mb-[100px]">
            <button
              className="px-5 py-2 bg-white-0 text-black font-normal rounded-full focus:outline-none hover:bg-yellow-10 hover:scale-125"
              onClick={handleJoinClick}
            >
              Join here
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
