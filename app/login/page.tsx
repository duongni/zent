import React from "react";

import Link from "next/link";

export const metadata = {
  title: "Login",
  description: "Login in to save your destination",
};

const Page = () => {
  return (
    <div className="mt-[200px]">
      <p>new to ZEN</p>
      <button>
        <Link href="../register/page">Register</Link>
      </button>
    </div>
  );
};

export default Page;
