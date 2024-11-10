let levelupper = prompt("What level would you like to start on?");
let level = levelupper.toLowerCase();
if (level !== null) {
  let clevel = "inital";
} else if (level) {
  let clevel = level;
}
let startingtechup = prompt("Starting Weapon")
let startingtech = startingtechup.toLowerCase();
if (startingtech !== null) {
  let cweapon = "";
} else if (startingtech) {
  let cweapon = startingtech;
}
let startingsheildup = prompt("Starting Field")
let startingsheild = startingsheildup.toLowerCase();
if (startingsheild !== null) {
  let csheild = "";
} else if (startingsheild) {
  let csheild = startingsheild;
}
if (clevel !== "") {
  level.onLevel(clevel);
}
if (cweapon !== "") {
  b.giveGuns(cweapon);
}
if (csheild !== "") {
  m.setField(csheild);
}
