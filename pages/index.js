import SpotForm from "../components/SpotForm.js";
import { useRouter } from "next/router";
export default function Home() {
  return (
    <div>
      <SpotForm addSpot={addSpotHandler} />
    </div>
  );
}
