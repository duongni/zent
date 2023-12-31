"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";

interface Props {
  name: string;
  img: string;
  location: string;
  price: number;
}

function Page(props: Props) {
  const { name, img, location, price } = props;
  const [isLiked, setLike] = useState(false);
  const handleheartClick = () => {
    setLike(!isLiked);
  };
  return (
    <div className="mt-[75px]  mx-3 relative hotelCard">
      <Image
        className="hover:opacity-75 rounded"
        src={img}
        alt="Arje Property"
        width={500}
        height={600}
        priority={false} // {false} | {true}
      />
      <SlHeart
        size={20}
        className={`absolute top-2 left-2 cursor-pointer ${
          isLiked ? "text-white" : "text-opacity-20"
        }`}
        onClick={handleheartClick}
      />

      <h4 className="font-normal text-2xl tracking-widest my-2.5">{name}</h4>

      <p className="mt-[-10px]">
        {location} | From ${price}/nt
      </p>
    </div>
  );
}
export default Page;
