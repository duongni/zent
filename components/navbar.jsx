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
  const { data: session } = useSession();

  const [toogleDropdown, setToogleDropdown] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProvider = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    setUpProvider();
  }, []);

  return (
    <header className="text-black text-lg w-full h-[60px] ease-in duration-300 relative top-0 left-0 z-50 bg-transparent">
      <nav className="max-w-[1366px] mx-auto h-100 p-3  3xl:grid 3xl:grid-cols-3 flex flex-row gap-5 md:gap-0 justify-between items-center">
        {session?.user ? (
          <div className="hidden md:flex flex-row uppercase  justify-start gap-6 items-center md:text-sm text-xs">
            <Link href="/camps" className="hover:text-gray-400">
              Campgrounds
            </Link>
            <Link href="/parks" className="hover:text-gray-400">
              Parks
            </Link>
          </div>
        ) : (
          <>
            <div className="md:text-sm text-xs">Welcome to</div>{" "}
          </>
        )}

        <div className=" md:flex items-center justify-center ">
          <Link href="/">
            <span className="font-bold text-4xl mx-auto">ZEN</span>
          </Link>
        </div>

        <div className="md:flex hidden">
          {session?.user ? (
            <div className="hover:text-gray-400 text-sm font-light hidden gap-10 md:flex items-center justify-self-end ">
              <Link href="/">Sign Out</Link>
              <Link href="/profile">
                <Image
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className="rounded-full"
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
                    className="md:flex hidden text-sm font-light text-left"
                  >
                    Sign In
                  </button>
                ))}
            </>
          )}
        </div>

        <div className="md:hidden flex relative">
          {session?.user ? (
            <div className="">
              <SlMenu
                size={20}
                alt="Dropdown Menu"
                onClick={() => setToogleDropdown(!toogleDropdown)}
              />
              {toogleDropdown && (
                <div className="absolute right-0 top-full mt-3 -w-screen p-5 rounded-lg ease-in duration-300  bg-white-0 flex flex-col gap-2 justify-end items-end">
                  <Link
                    href="/parks"
                    className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
                    onClick={() => setToogleDropdown(false)}
                  >
                    Parks
                  </Link>
                  <Link
                    href="/camps"
                    className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
                    onClick={() => setToogleDropdown(false)}
                  >
                    Campgrounds
                  </Link>
                  <Link
                    href="/"
                    className="px-5 hover:text-gray-400 cursor-pointer text-4xl tracking-wider ml-6 leading-loose"
                    onClick={() => {
                      setToogleDropdown(false);
                      signOut();
                    }}
                  >
                    Sign Out
                  </Link>
                </div>
              )}
            </div>
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
                    className="black_btn text-xs"
                  >
                    Sign In
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
