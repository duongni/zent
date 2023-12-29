import React from "react";

import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Login in to save your destination",
};

const Page = () => {
  return (
    <div className="mt-[200px]">
      <p className="border-b-2 text-center mb-5 text-xl font-extralight tracking-wide">
        new to ZEN
      </p>

      <form action="" method="post" className="flex flex-col items-center">
        <div className="grid grid-cols-2 w-3/4 border-b-2 my-2">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <div className="grid grid-cols-1 w-3/4 border-b-2 my-2">
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
        </div>
        <button type="submit">
          <Link href="../register/page">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Page;
