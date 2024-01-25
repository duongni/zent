"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SlMenu, SlArrowUp, SlMagnifier } from "react-icons/sl";
import { useMediaQuery } from "react-responsive";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import CustomButton from "./CustomButton";

const Navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <header className="text-black text-lg w-full h-[85px] ease-in duration-300 relative top-0 left-0 z-50 ">
      <nav className="max-w-[1366px] mx-auto h-100 p-4 md:p-8 grid grid-cols-3 md:grid-col-1 gap-5 md:gap-0 justify-between items-center">
        <div className="hidden md:flex flex-row uppercase text-sm font-light justify-start gap-6 items-center ">
          <Link href="/camps" className="hover:text-gray-400">
            Campgrounds
          </Link>
          <Link href="/parks" className="hover:text-gray-400">
            Parks
          </Link>
        </div>
        <div className=" md:flex items-center justify-center ">
          <Link href="/">
            <span className="font-bold text-4xl mx-auto">ZEN</span>
          </Link>
        </div>

        <div className="md:flex hidden">
          {isUserLoggedIn ? (
            <div className="hover:text-gray-400 text-sm font-light hidden gap-10 md:flex items-center justify-self-end ">
              <Link href="/">SIGN OUT</Link>
              <Link href="/profile">
                <Image
                  src="reshot-icon-camping-tent-LHPJ9STM27.svg"
                  width={37}
                  height={37}
                  className=""
                  alt="profile"
                />
              </Link>
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="text-sm font-light text-left"
                  >
                    SIGN IN
                  </button>
                ))}
            </>
          )}
        </div>

        <div className="md:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex justify-self-end"></div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
