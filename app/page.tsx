import Trails from "./trails/page";

export default function Home() {
  return (
    <div className="py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[750px] ">
      <Trails
        name="Susafa"
        img="/images/santa teresa/pool-santa-teresa.jpeg"
        location="Sicily, Italy"
        price={400}
      />
    </div>
  );
}
