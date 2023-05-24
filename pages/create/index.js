import SpotForm from "../../components/SpotForm.js";
import Layout from "../../components/Layout.js";
export default function CreateSpot({ addSpotHandler }) {
  return (
    <Layout pageTitle="create a new Spot">
      <SpotForm addSpot={addSpotHandler} />
    </Layout>
  );
}
