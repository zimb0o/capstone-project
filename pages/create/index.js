import SpotForm from "../../components/SpotForm.js";
import Layout from "../../components/Layout.js";
export default function CreateSpot({ setSpots }) {
  function addSpotHandler(formData) {
    const { id, Spotname, Address, Tasks, Equipment } = formData;
    const newSpot = { id, Spotname, Address, Tasks, Equipment };

    setSpots(newSpot);
  }

  return (
    <Layout>
      {" "}
      <SpotForm addSpot={addSpotHandler} />
    </Layout>
  );
}
