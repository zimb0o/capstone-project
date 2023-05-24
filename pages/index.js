import Spots from "../components/Spots/index.js";
import Footer from "../components/Footer.js";

export default function Home({ spots, toggleBookmark }) {
  return (
    <>
      <Spots spots={spots} toggleBookmark={toggleBookmark} />

      <Footer />
    </>
  );
}
