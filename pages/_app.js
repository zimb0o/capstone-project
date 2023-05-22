import GlobalStyle from "../styles";

import { mockSpots } from "../helpers/mockSpots.js";
import useLocalStorage from "@/helpers/localStorage";
export default function App({ Component, pageProps }) {
  const [spots, addSpots] = useLocalStorage("spots", mockSpots);
  const addSpotHandler = (newSpot) => {
    addSpots((prevSpots) => [newSpot, ...prevSpots]);
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
    addSpots(newSpotArray);
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
