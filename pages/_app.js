import GlobalStyle from "../styles";

import { mockSpots } from "../helpers/mockSpots.js";
import useLocalStorage from "@/helpers/localStorage";
export default function App({ Component, pageProps }) {
  const [spots, addSpot] = useLocalStorage("spots", mockSpots);
  const addSpotHandler = (newSpot) => {
    addSpot((prevSpots) => [newSpot, ...prevSpots]);
  };
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
    addSpot(newSpotArray);
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        spots={spots}
        addSpotHandler={addSpotHandler}
        toggleBookmark={toggleBookmark}
      />
    </>
  );
}
