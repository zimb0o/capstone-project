import SpotForm from "../../components/SpotForm.js";

export default function CreateSpot({ setSpots }) {
  function addSpotHandler(formData) {
    const { Spotname, Address, Tasks, Equipment } = formData;
    const newSpot = { Spotname, Address, Tasks, Equipment };

    const existingSpots = JSON.parse(localStorage.getItem("spots")) || [];

    const updatedSpots = [newSpot, ...existingSpots];

    localStorage.setItem("spots", JSON.stringify(updatedSpots));

    setSpots(updatedSpots);
  }

  return <SpotForm />;
}
