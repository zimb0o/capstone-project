import SpotCard from "../../components/SpotCard.js";
import Layout from "../../components/Layout";

export default function FavoriteSpots({ spots, toggleBookmark }) {
  return (
    <Layout>
      {spots
        .filter((spot) => spot.isBookmark)
        .map((spot) => (
          <SpotCard spot={spot} key={spot.id} toggleBookmark={toggleBookmark} />
        ))}
    </Layout>
  );
}
