let levelupper = prompt("What level would you like to start on?");
let clevel = levelupper ? levelupper.toLowerCase() : "initial";

let startingtechup = prompt("Starting Weapon");
let cweapon = startingtechup ? startingtechup.toLowerCase() : "";

let startingsheildup = prompt("Starting Field");
let csheild = startingsheildup ? startingsheildup.toLowerCase() : "";

if (clevel !== "initial") {
  level.onLevel = clevel;
}
if (cweapon !== "") {
  b.giveGuns = cweapon;
}
if (csheild !== "") {
  m.setField = csheild;
}
