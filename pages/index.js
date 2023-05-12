import Spots from "../pages/spots/index.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";
import { useState } from "react";
import { mockSpots } from "../helpers/mockSpots.js";

export default function Home() {
  const [spots, setSpots] = useState(mockSpots);
  return (
    <>
      <Header />
      <Spots spots={spots} setSpots={setSpots} />

      <Footer />
    </>
  );
}
