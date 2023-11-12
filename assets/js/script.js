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

//qui seleziono i pulsanti freccia//
const arrowTop = document.querySelector("#freccia-su");
const arrowBottom = document.querySelector("#freccia-giù");
const arrowRight = document.querySelector("#freccia-destra");
const arrowLeft = document.querySelector("#freccia-sinistra");

//evento doppia addizione
btnDoubleAddiction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay + 2;
});

//evento doppia sottrazione
btnDoubleSubstraction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay - 2;
});

//evento addizione
btnAddiction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay + 1;
});
//evento sottrazione
btnSubstraction.addEventListener("click", function () {
  let numberDisplay = Number(display.textContent);
  display.textContent = numberDisplay - 1;
});
