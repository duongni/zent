"use client";
import React, { useState } from "react";
import Image from "next/image";
import { SlHeart } from "react-icons/sl";

function Page() {
  const [isLiked, setLike] = useState(false);
  const handleheartClick = () => {
    setLike(!isLiked);
  };
  return (
    <div className="mt-[200px]  mx-3 relative">
      <Image
        className="hover:opacity-75 rounded"
        src="/images/arje/arje_dining-1.jpeg"
        alt="Arje Property"
        width={400}
        height={600}
        priority={false} // {false} | {true}
      />
      <SlHeart
        size={20}
        className={`absolute top-2 left-2 cursor-pointer ${
          isLiked ? "text-yellow-100" : "text-transparent "
        }`}
        onClick={handleheartClick}
      />

      <h4 className="font-normal text-2xl tracking-widest my-2.5">
        Hotel Name 1
      </h4>
      <p> Location | 1 BD 2 BA | Price </p>
    </div>
  );
}
export default Page;
