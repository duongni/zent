import Hotels from "./hotels/page";
import Villas from "./villas/page";

export default function Home() {
  return (
    <div className="mt-[200px]">
      <Hotels />
      <Villas />
    </div>
  );
}
