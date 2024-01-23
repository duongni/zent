"use client";

import { CampDetails } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import CampInfo from "./CampInfo";

interface CampDetailsProps {
  camp: CampDetails;
}
const CampCard = ({ camp }: CampDetailsProps) => {
  const {
    parkCode,
    name,
    numberOfSitesReservable,
    numberOfSitesFirstComeFirstServe,
    reservationInfo,
    reservationUrl,
    fee,
    designation,
    description,
    images,
    activities,
    operatingHours,
    campsites,
  } = camp;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-white-10 shadow-md hover:bg-white hover:shadow-md rounded-3xl">
      <div className="w-full flex justify-between items-start gap-2">
        <h2 className="font-normal text-2xl tracking-widest my-2.5">
          {camp.name}
        </h2>
      </div>
      <div className="relative w-full h-60 my-3 object-contain">
        {camp.images && camp.images.length > 0 && (
          <Image
            src={camp.images[0].url}
            alt={camp.name}
            width={450}
            height={600}
            priority //className="object-contain"
          />
        )}
      </div>
      <p className="text-gray-30 text-[14px] mb-3">
        {camp.description.slice(0, 200)}...{" "}
      </p>
      <div className="hidden group-hover:flex absolute bottom-0 w-full z-10"></div>
      <CustomButton
        title="View More"
        containerStyles="w-full py-[10px] rounded-full bg-yellow-10"
        textStyles="text-white text-[14px] leading-[17px] font-bold"
        handleClick={() => setIsOpen(true)}
      />
      <CampInfo
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        camp={camp}
      />
    </div>
  );
};

export default CampCard;
