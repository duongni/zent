"use client";
import React from "react";

const SearchBar = () => {
  return (
    <div className=" flex p-3 ">
      <input
        type="text"
        placeholder="Explore the next ZEN"
        onKeyDown={(e) => e.key === "Enter"}
        className="border-b-2 focus:outline-none  text-sm w-full"
      />
    </div>
  );
};

export default SearchBar;
