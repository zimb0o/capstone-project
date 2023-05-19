import GlobalStyle from "../styles";

import { mockSpots } from "../helpers/mockSpots.js";
import useLocalStorage from "@/helpers/localStorage";
export default function App({ Component, pageProps }) {
  const [spots, setSpots] = useLocalStorage("spots", mockSpots);
  const addSpotHandler = (newSpot) => {
    setSpots((prevSpots) => [newSpot, ...prevSpots]);
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
    setSpots(newSpotArray);
    console.log(spots);
  }

  return (
    <>
      <GlobalStyle />

      <Component
        {...pageProps}
        spots={spots}
        setSpots={addSpotHandler}
        toggleBookmark={toggleBookmark}
      />
    </>
  );
}
