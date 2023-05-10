import SpotCard from "./SpotCard";
import { mockSpots } from "../../helpers/mockSpots.js";

export default function SpotList() {
  return (
    <ul>
      {mockSpots.map((spot, index) => (
        <SpotCard key={index} name={spot.name} address={spot.address} />
      ))}
    </ul>
  );
}
