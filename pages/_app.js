import GlobalStyle from "../styles";
import useLocalStorage from "use-local-storage-state";

export default function App({ Component, pageProps }) {
  const [spots, setSpots] = useLocalStorage("spots", []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} spots={spots} setSpot={setSpots} />
    </>
  );
}
