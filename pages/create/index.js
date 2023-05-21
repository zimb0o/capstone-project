import SpotForm from "../../components/SpotForm.js";
import Layout from "../../components/Layout.js";
export default function CreateSpot({ addSpots }) {
  function addSpotHandler(formData) {
    const { id, Spotname, Address, Tasks, Equipment } = formData;
    const newSpot = { id, Spotname, Address, Tasks, Equipment };

    addSpots(newSpot);
  }

  return (
    <Layout>
      <SpotForm addSpot={addSpotHandler} />
    </Layout>
  );
}
