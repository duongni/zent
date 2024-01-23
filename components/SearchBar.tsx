"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SearchState from "@/components/SearchState";
import { IoSearchOutline } from "react-icons/io5";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <IoSearchOutline width={40} height={40} className="object-contain" />
  </button>
);

const SearchBar = () => {
  const [state, setState] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === "") {
      return alert("Please fill in the search bar");
    }
    updateSearchParams(state.toLocaleLowerCase().slice(-2));
  };

  const updateSearchParams = (state: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (state) {
      searchParams.set("state", state);
    } else {
      searchParams.delete("state");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <form
      className="flex items-center justify-center max-sm:flex-col w-[300px]  md:w-[600px] relative max-sm:gap-0 max-w-3xl"
      onSubmit={handleSearch}
    >
      <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
        <SearchState state={state} setState={setState} />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
