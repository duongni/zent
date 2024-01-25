"use client";

import { CampDetails } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
//import CampInfo from "./CampInfo";
import { GoArrowUpRight } from "react-icons/go";
import CampInfo from "../app/camps/[id]/page";

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
    <div>
      <div className="flex flex-col p-6 justify-center items-start text-black-100 bg-white-0 shadow-md hover:bg-white hover:shadow-md rounded-3xl">
        <div className="w-full flex justify-between items-start gap-2">
          <h2 className="font-normal text-2xl tracking-widest my-2.5">
            {camp.name}
          </h2>
        </div>
        <div className="relative w-full h-80 my-3 object-contain">
          {camp.images && camp.images.length > 0 && (
            <Image
              src={camp.images[0].url}
              alt={camp.name}
              fill
              priority
              className="object-contain"
            />
          )}
        </div>
        <p className="text-gray-30 text-[14px] mb-3">
          {camp.description.slice(0, 200)}...{" "}
        </p>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10"></div>
        <CustomButton
          containerStyles="w-full py-[10px] rounded-full bg-transparent flex items-end align-baseline"
          handleClick={() => setIsOpen(true)}
          rightIcon={<GoArrowUpRight height={30} width={43} alt="right icon" />}
        />

        <CampInfo
          isOpen={isOpen}
          closeModel={() => setIsOpen(false)}
          camp={camp}
        />
      </div>
    </div>
  );
};

export default CampCard;
