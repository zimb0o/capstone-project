import React from "react";
import SpotCard from "../../components/SpotCard";
import Layout from "../../components/Layout";

export default function Spots({ spots, toggleBookmark, addSpots }) {
  return (
    <Layout pageTitle="Spots">
      {spots.map(
        (spot) =>
          spot && (
            <SpotCard
              key={spot.id}
              addSpots={addSpots}
              spot={spot}
              toggleBookmark={toggleBookmark}
            />
          )
      )}
    </Layout>
  );
}
