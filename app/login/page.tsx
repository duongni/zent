"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { SlEye } from "react-icons/sl";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

function Login() {
  const { data: session } = useSession();
  const router = useRouter();
  useEffect(() => {
    console.log("session:", session);
    if (session?.user) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className="max-h-[100vh]">
      <div className=" flex flex-col justify-center items-center my-52">
        {" "}
        <p className="text-center mb-5  mt-10 text-xl font-extralight tracking-wide ">
          Welcome back
        </p>
        <div className="flex flex-row bg-yellow-10 px-5 max-w-{600px} rounded-full mt-5">
          <Image
            src="/logo-google.svg"
            alt="google logo"
            height={20}
            width={20}
          />
          <button className="bg-yellow-10 px-5 py-2" onClick={() => signIn()}>
            Sign in with Google
          </button>
        </div>
        <div
          className="absolute inset-0 mt-[600px] overflow-hidden z-[-10] bg-image"
          inset-x-0
          bottom-0
        >
          {" "}
          <Image
            src="/bottom-bg.jpg"
            alt="park artwork"
            fill
            priority
            objectFit="cover"
            objectPosition="bottom"
          />
        </div>
      </div>

      {/* <form
        action=""
        method="post"
        className="flex flex-col items-center max-w-{600px} py-4 px-8 w-[600px] "
      >
        <div className="grid grid-cols-1 w-3/4  my-2 gap-14 bg-tranparent">
          <input
            id="userName"
            type="text"
            placeholder="Username"
            className="border-b-2 text-sm focus:outline-none bg-transparent"
          />
          <div className="flex flex-row justify-between">
            <input
              id="passWord"
              type="password"
              placeholder="Password"
              className="border-b-2 text-sm focus:outline-none w-11/12 bg-transparent"
            />
            <button>
              <SlEye size={20} />
            </button>
          </div>
        </div>
        <button
          type="submit"
          className=" my-10 font-bold tracking-widest hover:text-gray-400 "
        >
          <Link href="../journal/page">Log in</Link>
        </button>
        <Link href="../register/page" className="-mt[-20px]">
          New to Zen? Register here
        </Link>
        <p>or</p>
      </form>*/}
    </div>
  );
}

export default Login;
