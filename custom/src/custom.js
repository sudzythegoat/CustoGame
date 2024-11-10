let clevel = prompt("What level would you like to start on?");
let cweapon = prompt("Starting Weapon");
let csheild = prompt("Starting Field");
if (clevel !== "initial") {
  level.onLevel = clevel;
}
if (cweapon !== "") {
  b.giveGuns = cweapon;
}
if (csheild !== "") {
  m.setField = csheild;
}
