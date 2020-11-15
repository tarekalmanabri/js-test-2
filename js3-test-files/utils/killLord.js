import { houseIdList, lords } from "../data.js";

export async function killLord() {
  // https://stackoverflow.com/a/4960020
  // were targeting a random lord
  const lordIndex = Math.floor(Math.random() * lords.length - 1) + 1;
  //we target a random targeted lord
  const lord = document.getElementsByClassName("got-house__current-lord")[
    lordIndex
  ];
  // empty the lord to put a new lord
  lord.innerText = "";
  // we fill the new lord
  const newlord = await getLord(data.swornMembers[lordIndex]);

  lord.innerText = newlord;
}
