import { useState } from "react";
import GlobalStyle from "../styles";

import { mockSpots } from "../helpers/mockSpots.js";
export default function App({ Component, pageProps }) {
  const [spots, setSpots] = useState(mockSpots);

  function toggleBookmark(id) {
    const newSpotArray = spots?.map((spot) => {
      if (spot.id === id) {
        return {
          ...spot,
          isBookmark: !spot.isBookmark,
        };
      } else {
        return spot;
      }
    });
    setSpots(newSpotArray);
  }

  return (
    <>
      <GlobalStyle />

      <Component {...pageProps} spots={spots} toggleBookmark={toggleBookmark} />
    </>
  );
}
