import SpotCard from "../../components/SpotCard";
import React from "react";
import Layout from "../../components/Layout";

export default function Spots({ spots, toggleBookmark, deleteSpot }) {
  return (
    <Layout pageTitle="Spots">
      {spots.map((spot) => (
        <SpotCard
          key={spot.id}
          spot={spot}
          toggleBookmark={toggleBookmark}
          deleteSpot={deleteSpot}
        />
      ))}
    </Layout>
  );
}
