import { addHousesToDOM } from "./utils/addHousesToDOM.js";
import { killLord } from "./utils/killLord.js";

/*
  This list gives the ids of all the great houses that we want to look up.
  It should be inserted into the html above all the other files to ensure it is available
*/
export const houseIdList = [
  7, // Eyrie
  17, // Baratheon
  169, // Greyjoy
  229, // Lannister
  362, // Stark
  378, // Targaryen
  395, // Tully
  398, // Tyrell
];

export const btn = document.getElementById("kill-random-lord-button");
btn.addEventListener("click", killLord);
export const houseList = document.getElementById("got-house-list");
export const lords = document.getElementsByClassName("got-house__current-lord");

addHousesToDOM();
