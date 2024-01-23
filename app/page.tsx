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
      <div className="mt-1 grid justify-center min-w-[300px] sm:px-16 px-6 py-2 pt-20">
        <SearchBar />
      </div>

      <div className="">
        <div>
          {!isDataEmpty ? (
            <section>
              <div className="grid 2xl:grid-cols-3 xl:grid-cols-2 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
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
              <div className="grid py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[500px] gap-8 pt-14">
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
