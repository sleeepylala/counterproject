"use strict";
//qui seleziono i miei pulsanti principali//

const btnAddiction = document.querySelector("#tasto-addiction");
const btnSubstraction = document.querySelector("#tasto-substraction");
const btnDoubleAddiction = document.querySelector("#tasto-double-addiction");
const btnDoubleSubstraction = document.querySelector(
  "#tasto-double-substraction"
);
const display = document.querySelector(".display-number");
const consoleColor = document.querySelector(".base-console");

//qui seleziono i pulsanti on e reset//
const btnOn = document.querySelector("#button-start");
const btnReset = document.querySelector("#button-reset");
const start = document.querySelector("#start-display");
const off = document.querySelector("#off-display");
const schermo = document.querySelector(".schermo-console");

//qui seleziono i pulsanti freccia//
const arrowTop = document.querySelector("#freccia-su");
const arrowBottom = document.querySelector("#freccia-giù");
const arrowRight = document.querySelector("#freccia-destra");
const arrowLeft = document.querySelector("#freccia-sinistra");

const COLORS = {
  YELLOW: "#e9b824",
  RED: "#FF6D6D",
  BLUE: "#1572A1",
  PURPLE: "#AE4CCF",
  DARK: "#2B2730",
};

let testBtn = false;

function removeStartOff() {
  start.style.display = off.style.display = "none";
}
function updateConsoleColor(color) {
  consoleColor.style.backgroundColor = color;
}

//funzione doppia addizione
function doppiaAddizione() {
  let numberDisplay = Number(display.textContent);
  display.textContent = Number(display.textContent) + 2;
  removeStartOff();
}
//funzione doppia sottrazione
function doppiaSottrazione() {
  display.textContent = Number(display.textContent) - 2;
  removeStartOff();
}
//funzione addizione
function addizione() {
  display.textContent = Number(display.textContent) + 1;
  removeStartOff();
}
//funzione sottrazione
function sottrazione() {
  display.textContent = Number(display.textContent) - 1;
  removeStartOff();
}
//funzione tasto reset
function reset() {
  display.textContent = 0;
  removeStartOff();
  updateConsoleColor(COLORS.YELLOW);
}

//evento tasto on off
btnOn.addEventListener("click", function () {
  schermo.classList.toggle("schermo-acceso");
  testBtn = !testBtn;

  if (testBtn) {
    start.style.display = "block";
    off.style.display = "none";

    btnDoubleAddiction.addEventListener("click", doppiaAddizione);

    btnDoubleSubstraction.addEventListener("click", doppiaSottrazione);

    btnAddiction.addEventListener("click", addizione);

    btnSubstraction.addEventListener("click", sottrazione);

    btnReset.addEventListener("click", reset);
  } else {
    start.style.display = "none";
    off.style.display = "block";

    btnDoubleAddiction.removeEventListener("click", doppiaAddizione);

    btnDoubleSubstraction.removeEventListener("click", doppiaSottrazione);

    btnAddiction.removeEventListener("click", addizione);

    btnSubstraction.removeEventListener("click", sottrazione);

    btnReset.removeEventListener("click", reset);
  }
  display.textContent = "";
});

//evento frecce
arrowTop.addEventListener("click", () => updateConsoleColor(COLORS.RED));
arrowBottom.addEventListener("click", () => updateConsoleColor(COLORS.BLUE));
arrowLeft.addEventListener("click", () => updateConsoleColor(COLORS.PURPLE));
arrowRight.addEventListener("click", () => updateConsoleColor(COLORS.DARK));
