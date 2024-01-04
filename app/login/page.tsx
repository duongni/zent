import React from "react";
import Link from "next/link";
import { SlEye } from "react-icons/sl";

function Page() {
  return (
    <div className=" flex flex-col justify-center items-center my-52">
      <p className="text-center mb-5 text-xl font-extralight tracking-wide ">
        new to ZEN
      </p>

      <form
        action=""
        method="post"
        className="flex flex-col items-center max-w-{600px} py-4 px-8"
      >
        <div className="grid grid-cols-2 w-3/4  my-2 gap-2">
          <input
            id="firstName"
            type="text"
            placeholder="First name"
            className="border-b-2 focus:outline-none my-11 text-sm"
          />
          <input
            id="lastName"
            type="text"
            placeholder="Last name"
            className="border-b-2 focus:outline-none my-11 text-sm"
          />
        </div>
        <div className="grid grid-cols-1 w-3/4  my-2 gap-14 ">
          <input
            id="email"
            type="text"
            placeholder="Email Address"
            className="border-b-2 text-sm focus:outline-none"
          />
          <input
            id="userName"
            type="text"
            placeholder="Username"
            className="border-b-2 text-sm focus:outline-none"
          />
          <div className="flex flex-row justify-between">
            <input
              id="passWord"
              type="password"
              placeholder="Password"
              className="border-b-2 text-sm focus:outline-none w-11/12"
            />
            <button>
              <SlEye size={20} />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className=" my-20 font-bold tracking-widest hover:text-gray-400 "
        >
          <Link href="../journal/page">Register</Link>
        </button>
      </form>
    </div>
  );
}

export default Page;
