export async function getPlants(plantList) {
  const url = `https://trefle.io/api/v1/plants/?token=${
    process.env.TREFLE_TOKEN
  }&filter[scientific_name]=${encodeURI(plantList)}`;
  const res = await fetch(url);
  const plants = await res.json();

  return plants.data;
}
