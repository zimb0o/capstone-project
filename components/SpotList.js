import SpotCard from "./SpotCard";

function SpotList({ spots }) {
  return (
    <ul>
      {spots.map((spot, index) => (
        <SpotCard key={index} name={spot.name} address={spot.address} />
      ))}
    </ul>
  );
}
