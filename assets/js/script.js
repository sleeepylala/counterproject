"use strict";
//qui seleziono i miei pulsanti principali//

const btnAddiction = document.querySelector("#tasto-addiction");
const btnSubstraction = document.querySelector("#tasto-substraction");
const btnDoubleAddiction = document.querySelector("#tasto-double-addiction");
const btnDoubleSubstraction = document.querySelector(
  "#tasto-double-substraction"
);
const display = document.querySelector(".display-number");

//qui seleziono i pulsanti on e reset//
const btnOn = document.querySelector("#button-start");
const btnReset = document.querySelector("#button-reset");
const start = document.querySelector("#start-display");
const off = document.querySelector("#off-display");

//qui seleziono i pulsanti freccia//
const arrowTop = document.querySelector("#freccia-su");
const arrowBottom = document.querySelector("#freccia-giù");
const arrowRight = document.querySelector("#freccia-destra");
const arrowLeft = document.querySelector("#freccia-sinistra");

let testBtn = false;
function removeStartOff() {
  start.style.display = "none";
  off.style.display = "none";
}

//evento doppia addizione
btnDoubleAddiction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay + 2;
  removeStartOff();
});

//evento doppia sottrazione
btnDoubleSubstraction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay - 2;
  removeStartOff();
});

//evento addizione
btnAddiction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay + 1;
  removeStartOff();
});
//evento sottrazione
btnSubstraction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay - 1;
  removeStartOff();
});

//evento tasto on off
btnOn.addEventListener("click", function () {
  testBtn = !testBtn;

  if (testBtn) {
    console.log("ON");

    start.style.display = "block";
    off.style.display = "none";
  } else {
    console.log("OFF");

    start.style.display = "none";
    off.style.display = "block";
  }
  display.textContent = "";
});

//evento tasto reset
btnReset.addEventListener("click", function () {
  display.textContent = 0;
  removeStartOff();
});
