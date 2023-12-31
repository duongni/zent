import React from "react";
import SideNavBar from "../components/SideNavBar";
import SearchBar from "../components/SearchBar";

const Search = () => {
  return (
    <div className="flex mt-[100px] ">
      <SideNavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-10 w-full gap-8 content-start">
        <SearchBar />

        <p>Google Map</p>
      </div>
    </div>
  );
};

export default Search;
