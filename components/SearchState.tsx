"use client";

import { Combobox, Transition } from "@headlessui/react";
import { IoLocationOutline } from "react-icons/io5";
import { useState, Fragment } from "react";

import { SearchStateProps } from "@/types";
import { states } from "@/contants";

const SearchState = ({ state, setState }: SearchStateProps) => {
  const [query, setQuery] = useState("");

  const filteredState =
    query === ""
      ? states
      : states.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center relative ">
      <Combobox value={state} onChange={setState}>
        <div className="relative w-full z-10">
          <Combobox.Button className="absolute top-[14px]">
            <IoLocationOutline width={20} height={20} />
          </Combobox.Button>

          <Combobox.Input
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-white outline-none cursor-pointer text-sm z-40"
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder="Washington..."
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              static
            >
              {filteredState.map((item) => (
                <Combobox.Option
                  key={item}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-slate-50 text-red" : "text-gray-900"
                    }`
                  }
                  value={item}
                >
                  {item}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchState;
