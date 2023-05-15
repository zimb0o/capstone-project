import Spots from "../components/Spots/index.js";
import Footer from "../components/Footer.js";
import Header from "../components/Header.js";

export default function Home({ spots, toggleBookmark }) {
  return (
    <>
      <Header />
      <Spots spots={spots} toggleBookmark={toggleBookmark} />

      <Footer />
    </>
  );
}
