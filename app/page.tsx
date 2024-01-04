import Parks from "./parks/page";

console.log("Hello");

export default function Home() {
  return (
    <div>
      <div className="py-3 md:grid grid-cols-2 2xl:grid-cols-3 grid-rows-[750px] ">
        <Parks />
      </div>
    </div>
  );
}
