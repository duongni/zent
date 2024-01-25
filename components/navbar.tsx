"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { SlMenu, SlArrowUp, SlMagnifier } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { useSession, signIn, signOut, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const isUserLoggedIn = true;
  const [menuIcon, setIcon] = useState(false);

  const handleSmallScreenNav = () => {
    setIcon(!menuIcon);
  };
  const isMediumScreen = useMediaQuery({ maxWidth: 768 }); // Adjust the maximum width as needed
  const navStyle = {
    maxWidth: "1366px",
    margin: "0 auto",
    height: "100px",
    padding: "1rem 2rem",
    display: isMediumScreen ? "flex" : "grid",
    gridTemplateColumns: isMediumScreen ? "1fr 1fr" : "1fr 1fr 1fr", // Adjust grid columns as needed
    justifyContent: isMediumScreen ? "space-between" : "initial", // Added line
  };

  return (
    <header className=" bg-white text-black text-lg w-full h-[85px] ease-in duration-300 absolute top-0 left-0 z-50 bg-white-10">
      <nav style={navStyle}>
       {isUserLoggedIn ? ( ) : (<> </>)}
        
        {!isMediumScreen && (
          <ul className="hidden md:flex uppercase text-sm font-light justify-start items-center">
            <li className="hover:text-gray-400  ml-6 ">
              <Link href="/parks">PARKS</Link>
            </li>
            <li className="hover:text-gray-400 ml-6 ">
              <Link href="/camps">CAMPSGROUND</Link>
            </li>
          </ul>
        )}
        <div className="flex md:flex items-center justify-center ">
          <Link href="/" onClick={handleSmallScreenNav}>
            <span className="logo font-bold text-4xl mx-auto">ZEN</span>
          </Link>
        </div>
        <div className="hover:text-gray-400 text-sm font-light ml-6 hidden md:flex items-center justify-end ">
          <Link href="/parks">LOG IN</Link>
        </div>
       
        <div
          onClick={handleSmallScreenNav}
          className="flex md:hidden items-center justify-end overflow-hidden"
        >
          {/* if menu icon changes from false to true, I want to do something, else, I want to do something else */}
          {menuIcon ? <SlArrowUp size={20} /> : <SlMenu size={20} />}
        </div>

        {/* smaller screen navbar*/}
        <div
          className={
            menuIcon
              ? "md:hidden absolute top-[100px] right-0 bottom-0 left-0 flex justify-center bg-yellow-10 items-center w-full h-screen ease-in duration-300 bg-opacity-90 overflow-hidden"
              : "md:hidden absolute top-[100px] right-0 translate-x-full flex justify-center bg-yellow-10 items-center w-full h-screen ease-in duration-300 bg-opacity-90 overflow-hidden"
          }
        >
          <div className="w-full overflow-hidden">
            <ul>
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
              >
                <Link href="/parks">PARKS</Link>
              </li>
              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wide ml-6 leading-loose"
              >
                <Link href="/camps">CAMPGROUNDS</Link>
              </li>

              <li
                onClick={handleSmallScreenNav}
                className="px-5 hover:text-gray-400 cursor-pointer text-3xl tracking-wider ml-6 leading-loose"
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

export default Navbar;
