"use client";

import { ParkDetails } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import ParkInfo from "./ParkInfo";

interface ParkDetailsProps {
  park: ParkDetails;
}
const ParkCard = ({ park }: ParkDetailsProps) => {
  const {
    fullName,
    parkCode,
    description,
    activities,
    states,
    images,
    designation,
    operatingHours,
    url,
  } = park;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-white-10 shadow-md hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="font-normal text-2xl tracking-widest my-2.5">
          {park.fullName}
        </h2>
      </div>
      <div className="relative w-full h-80 my-3 object-contain">
        <Image
          src={park.images[0].url}
          alt={park.fullName}
          fill
          priority //className="object-contain"
        />
      </div>
      <p className="text-gray-30 text-[14px] mb-3">
        {park.description.slice(0, 200)}...{" "}
      </p>
      <div className="hidden group-hover:flex absolute bottom-0 w-full z-10"></div>
      <CustomButton
        title="View More"
        containerStyles="w-full py-[10px] rounded-full bg-yellow-10"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        handleClick={() => setIsOpen(true)}
      />
      <ParkInfo
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        park={park}
      />
    </div>
  );
};

export default ParkCard;
