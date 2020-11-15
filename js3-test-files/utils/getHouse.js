export async function getHouse(id) {
  const res = await fetch(`https://anapioficeandfire.com/api/houses/${id}`);
  const results = await res.json();

  return results;
}
