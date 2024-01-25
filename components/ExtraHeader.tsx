"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ExtraHeader = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    // Navigate to the login page
    router.push("/login");
  };
  return (
    <section className="relative mt-0 sm:mt-12 lg:mt-20 pb-16 grid gap-16 object-cover  sm:gap-24 lg:gap-40 ">
      <div>
        <Image
          src="/joe-pohle-glacier-national-park.jpg"
          aria-hidden="true"
          fill={true}
          alt=""
          className="absolute h-full w-full -z-20 object-cover bottom-0 object-center xs:w-[480px] md:w-[800px] xl:w-[1300px]"
        />
        <div className="my-10 ">
          <div className="flex md:flex-row mt-0 xs:flex-col items-center justify-center py-10 px-3">
            <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
              <p
                className="max-w-prose text-yellow-10 xs:text-black font-normal drop-shadow-2xl text-xl leading-loose"
                style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
              >
                Discover nature's sanctuary at Zen Parks. Immerse yourself in
                serene landscapes, vibrant trails, and breathtaking views. Your
                escape to tranquility begins here.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              className="flex flex-col text-center  md:text-6xl text-4xl xs:text-sm  px-5 pt-2 pb-10  font-normal rounded-full focus:outline-none text-white-10 hover:scale-125"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
              href="/parks"
            >
              Find Your Park
            </Link>
          </div>
          <div>
            <div className="flex md:flex-row xs:flex-col items-center justify-center py-8 px-3">
              <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
                <p
                  className="max-w-prose text-yellow-10 xs:text-black mt-10 font-normal drop-shadow-2xl text-xl leading-loose"
                  style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  Camp in harmony with nature at Zen Camps. Find peace in the
                  great outdoors, surrounded by cozy campsites and the soothing
                  sounds of nature. Your serene camping experience starts now.
                </p>
              </div>
            </div>
            <Link
              className="flex flex-col text-center md:text-6xl text-4xl xs:text-sm  px-5 py-10  font-normal rounded-full focus:outline-none text-white-10 hover:scale-125"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
              href="/camps"
            >
              Find Your Camp
            </Link>
          </div>
          <div
            className="flex flex-col justify-center items-center text-center relative mt-[200px] xs:mt-0 py-2 px-5 rounded-full text-yellow-10 font-medium drop-shadow-2xl text-lg leading-loose"
            style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <div className="">Explore nature's beauty effortlessly!</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraHeader;
