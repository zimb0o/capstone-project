export default function CreateSpot() {
  function addSpot(name, address, tasks, equipment) {
    const tagsArray = tags.split(",");
  }
}

const newSpot = {
  // id
  spot,
  address,
  tasks,
  equipment,
  tags: tagsArray,
  isFavorite: false,
};

setSpot((spots) => [newSpot, ...spots]);

return <Spotform addSpot={addSpot} />;
