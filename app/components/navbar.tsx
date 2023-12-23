"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { SlMenu, SlArrowUp, SlMagnifier } from "react-icons/sl";

const navbar = () => {
  const [menuIcon, setIcon] = useState(false);

  const handleSmallScreenNav = () => {
    setIcon(!menuIcon);
  };

  return (
    <header className=" bg-transparent text-black text-lg w-full ease-in duration-300 fixed top-0 left-0 z-10">
      <nav className="max-w-[1366px] mx-auto h-[100px] flex justify-between items-center p-4">
        {/* larger screen navigation*/}
        <ul className="hidden md:flex uppercase text-sm font-light justify-around ">
          <li className="hover:text-gray-400  ml-4 ">
            <Link href="/hotels">HOTELS</Link>
          </li>
          <li className="hover:text-gray-400  ml-6 ">
            <Link href="/villas">VILLAS</Link>
          </li>
          <li className="hover:text-gray-400 ml-6 ">
            <Link href="/login">JOURNAL</Link>
          </li>
        </ul>
        <div>
          <Link href="/" onClick={handleSmallScreenNav}>
            <span className="logo font-bold text-4xl">ZEN</span>
          </Link>
        </div>
        <div className="hidden md:flex">
          <Link href="">
            <SlMagnifier size={20} />
          </Link>
        </div>

        {/* smaller screen icons switch when screen is smaller than medium size*/}
        {/* onclick change the icon*/}
        <div onClick={handleSmallScreenNav} className="flex md:hidden">
          {/* if menu icon changes from false to true, I want to do something, else, I want to do something else */}
          {menuIcon ? <SlArrowUp size={20} /> : <SlMenu size={20} />}
        </div>

        {/* smaller screen navbar*/}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center bg-gray-100 items-center w-full h-screen ease-in duration-300 bg-opacity-80"
              : "md:hidden absolute top-[100px] right-0 translate-x-full flex justify-center bg-gray-100 items-center w-full h-screen ease-in duration-300 bg-opacity-80"
          }
        >
          <div className="w-full">
            <ul className="">
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wide ml-6 leading-loose"
              >
                <Link href="/hotels">HOTELS</Link>
              </li>
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
              >
                <Link href="/villas">VILLAS</Link>
              </li>
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wide ml-6 leading-loose"
              >
                <Link href="/login">JOURNAL</Link>
              </li>
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
              >
                <Link href="/login">LogIn</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
