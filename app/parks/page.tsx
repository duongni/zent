"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";

interface ParkProps {
  name: string;
  img: string;
  state: string;
  activities: string;
}

interface Props {
  parks?: ParkProps[];
}

const Page: React.FC<Props> = ({ parks }) => {
  const [isLiked, setLike] = useState(false);

  const handleheartClick = () => {
    setLike(!isLiked);
  };

  return (
    <div className="mt-[50px] mx-3 relative hotelCard">
      {parks &&
        parks.map((park, index) => (
          <div key={index}>
            <Image
              className="hover:opacity-75 rounded"
              src={park.img}
              alt={`Park - ${park.name}`}
              width={450}
              height={600}
              priority={false}
            />
            <SlHeart
              size={20}
              className={`absolute top-2 left-2 cursor-pointer ${
                isLiked ? "text-white" : "text-opacity-20"
              }`}
              onClick={handleheartClick}
            />

            <h4 className="font-normal text-2xl tracking-widest my-2.5">
              {park.name}
            </h4>
            <p className="mt-[-10px]">
              {park.name} | {park.state} | {park.activities}
            </p>
          </div>
        ))}
    </div>
  );
};

export default Page;
