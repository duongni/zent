import Hotels from "./trails/page";
import Villas from "./parks/page";
import Google from "./components/google";

export default function Home() {
  return (
    <div className="py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[750px] ">
      <Hotels
        name="Susafa"
        img="/images/santa teresa/pool-santa-teresa.jpeg"
        location="Sicily, Italy"
        price={400}
      />
      <Hotels
        name="Six Senses Ninh Van Bay"
        img="/images/six-senses/tub-view.jpeg"
        location="Ninh Van Bay, Viet Nam"
        price={400}
      />
      <Hotels
        name="Hotel de la Coupole"
        img="/images/Hotel de la Coupole/rooms.jpeg"
        location="Sapa, Viet Nam"
        price={134}
      />

      <Villas
        name="Arje Home"
        img="/images/arje/arje_dining-1.jpeg"
        location="New York"
        bed={1}
        bath={2}
      />
    </div>
  );
}
