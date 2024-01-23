import SearchBar from "@/components/SearchBar";
import { fetchParks, fetchCamps } from "@/utils";
import CampCard from "@/components/CampCard";
import ParkCard from "@/components/ParkCard";

export default async function Home({ searchParams }: { searchParams: any }) {
  const allCamps = await fetchCamps({
    state: searchParams?.state || "",
  });
  const isDataEmpty =
    !Array.isArray(allCamps) || allCamps.length < 1 || !allCamps;

  const allParks = await fetchParks({
    state: searchParams?.state || "",
  });
  //checking there is any data in allParks
  const isEmpty = !Array.isArray(allParks) || allParks.length < 1 || !allParks;

  return (
    <div className="mt-[100px]">
      <SearchBar />
      <div className="">
        <div>
          {!isDataEmpty ? (
            <section>
              <div className="grid py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[750px]  w-full gap-8 pt-14">
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
        <div>
          {" "}
          {!isEmpty ? (
            <section>
              <div className="grid py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[750px]  w-full gap-8 pt-14">
                {allParks?.map((park: any) => (
                  <ParkCard park={park} />
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
    </div>
  );
}
