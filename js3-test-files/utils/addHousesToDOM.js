import { houseIdList, houseList } from "../data.js";
import { getHouse } from "./getHouse.js";
import { getLordName } from "./getLordName.js";

export async function addHousesToDOM() {
  // emptying the house list because were adding things to it
  houseList.innerHTML = "";

  for (let i = 0; i < houseIdList.length; i++) {
    // loop through the ids of the houses
    const house = houseIdList[i];
    // fetching to get the house name
    const results = await getHouse(house);

    console.log(results);

    // we use this to not keep it undefined when there is no lord
    let lord = "";

    // if the lord is not empty then we fetch the lord name
    if (results.currentLord !== "") {
      lord = await getLordName(results.currentLord);
    }

    // this is the html that is filled with the house name and the lord name
    houseList.innerHTML += `
    <div class="got-house">
      <h1 class="got-house__title">${results.name}</h1>
      <span class="got-house__current-lord">${lord}</span>
    </div>
    `;
  }
}
