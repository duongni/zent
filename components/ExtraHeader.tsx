import Image from "next/image";

const ExtraHeader = () => {
  return (
    <section className="relative mt-0 sm:mt-24 lg:mt-40 pb-16 mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden text-center">
      <Image
        src="/angel-landing-zion.png"
        aria-hidden="true"
        fill={true}
        alt=""
        className="absolute h-full w-full -z-20 object-cover bottom-0 object-center xs:w-[480px] md:w-[800px] xl:w-[1300px] rounded-3xl"
      />
      <div className="flex md:flex-row xs:flex-col items-center justify-center py-8 px-3">
        <div className="text-5xl xs:text-sm text-center font-normal  tracking-wider leading-loose xs:leading-relaxed drop-shadow-2xl text-yellow-10">
          Find Your Park
        </div>
        <div className="flex xs:mt-0 py-2 px-5 rounded-full  ">
          <p className="max-w-prose text-yellow-10 xs:text-black font-normal drop-shadow-2xl text-lg leading-loose">
            Discover the beauty of nature effortlessly, and let Zen guide you on
            a journey of peaceful exploration. Embrace the calm, start your
            essential path today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExtraHeader;
