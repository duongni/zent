"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ExtraHeader = () => {
  const router = useRouter();

  const handleJoinClick = () => {
    // Navigate to the login page
    router.push("/login");
  };
  return (
    <section className="relative mt-0 sm:mt-24 lg:mt-40 pb-16 mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
      <div>
        <Image
          src="/colchuck-lake.jpg"
          aria-hidden="true"
          fill={true}
          alt=""
          className="absolute h-full w-full -z-20 object-cover bottom-0 object-center xs:w-[480px] md:w-[800px] xl:w-[1300px] rounded-3xl filter"
        />
        <div className="my-10 ">
          <div className="flex md:flex-row xs:flex-col items-center justify-center py-8 px-3">
            <div
              className="text-6xl xs:text-sm text-center font-normal  tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl text-yellow-10"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Your Park
            </div>
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
        </div>
        <div>
          <div className="flex md:flex-row xs:flex-col items-center justify-center py-8 px-3">
            <div
              className="text-6xl xs:text-sm text-center font-normal  tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl text-yellow-10"
              style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              Find Your Camp
            </div>
            <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
              <p
                className="max-w-prose text-yellow-10 xs:text-black font-normal drop-shadow-2xl text-xl leading-loose"
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
          className="flex flex-col justify-center items-center text-center relative mt-[200px] xs:mt-0 py-2 px-5 rounded-full text-yellow-10 font-medium drop-shadow-2xl text-lg leading-loose"
          style={{ textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          <div className="mt-[30px]">
            <button
              className="px-5 py-2 bg-yellow-10 text-black font-normal rounded-full focus:outline-none hover:bg-yellow-10 hover:scale-125"
              onClick={handleJoinClick}
            >
              Join here
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraHeader;
