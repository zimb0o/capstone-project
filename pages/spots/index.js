import React from "react";
import SpotCard from "../../components/SpotCard";
import Layout from "../../components/Layout";

export default function Spots({ spots, toggleBookmark, setSpots }) {
  return (
    <Layout pageTitle="Spots">
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          setSpots={setSpots}
          spot={spot}
          toggleBookmark={toggleBookmark}
        />
      ))}
    </Layout>
  );
}
