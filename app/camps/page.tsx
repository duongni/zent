import React from "react";

import CampCard from "@/components/CampCard";
import SearchBar from "@/components/SearchBar";

import { fetchCamps } from "@/utils";

export default async function Camps({ searchParams }: { searchParams: any }) {
  const allCamps = await fetchCamps({
    state: searchParams?.state || "",
  });
  //checking there is any data in allParks
  const isDataEmpty =
    !Array.isArray(allCamps) || allCamps.length < 1 || !allCamps;

  return (
    <div className="overflow-hidden max-w-[1366px] mx-auto object-contain mb-20">
      <div className="mt-1 grid justify-center min-w-[300px] sm:px-16 px-6 py-2 pt-20">
        <SearchBar />
        <div className="flex justify-start flex-wrap items-center gap-2"></div>
      </div>
      <div>
        {!isDataEmpty ? (
          <section>
            <div className="grid 3xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
              {allCamps?.map((camp) => (
                <CampCard camp={camp} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </div>
  );
}
