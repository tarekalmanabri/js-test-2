export async function getLordName(url) {
  const res = await fetch(url);
  const results = await res.json();

  return results.name;
}
