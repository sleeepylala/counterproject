"use strict";

//qui seleziono i miei pulsanti principali//
const btnAddiction = document.querySelector("#tasto-addition");
const btnSubstraction = document.querySelector("#tasto-subtraction");
const btnDoubleAddiction = document.querySelector("#tasto-double-addition");
const btnDoubleSubstraction = document.querySelector(
  "#tasto-double-subtraction"
);
const consoleColor = document.querySelector(".base-console");

//qui seleziono i pulsanti on e reset e schermo//
const btnOn = document.querySelector("#button-start");
const btnReset = document.querySelector("#button-reset");
const start = document.querySelector("#start-display");
const off = document.querySelector("#off-display");
const schermo = document.querySelector(".schermo-console");
const display = document.querySelector(".display-number");

//qui seleziono i pulsanti freccia//
const arrowTop = document.querySelector("#freccia-su");
const arrowBottom = document.querySelector("#freccia-giù");
const arrowRight = document.querySelector("#freccia-destra");
const arrowLeft = document.querySelector("#freccia-sinistra");

//qui creo classi comuni per i suoni
const mainButtons = document.querySelectorAll(".main-button");
const otherButtons = document.querySelectorAll(".other-button");

//qui creo la const con i colori che ho scelto//
const COLORS = {
  YELLOW: "#e9b824",
  RED: "#FF6D6D",
  BLUE: "#1572A1",
  PURPLE: "#AE4CCF",
  DARK: "#2B2730",
};

let isConsoleOn = false;

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
  isConsoleOn = !isConsoleOn;

  if (isConsoleOn) {
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

//evento tasti frecce
arrowTop.addEventListener("click", () => updateConsoleColor(COLORS.RED));
arrowBottom.addEventListener("click", () => updateConsoleColor(COLORS.BLUE));
arrowLeft.addEventListener("click", () => updateConsoleColor(COLORS.PURPLE));
arrowRight.addEventListener("click", () => updateConsoleColor(COLORS.DARK));

//qui elimino il drag delle immagini
document.addEventListener("DOMContentLoaded", function () {
  var imgElement = document.querySelector("img");

  imgElement.addEventListener("dragstart", function (e) {
    e.preventDefault();
  });
});

//qui aggiungo l'audio ai tasti se la console è on
mainButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isConsoleOn) {
      let audio = document.getElementById("clickSound");
      audio.volume = 0.2;
      audio.playbackRate = 2;
      audio.play();
    } else {
    }
  });
});

otherButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (isConsoleOn) {
      let audio = document.getElementById("clickSound2");
      audio.volume = 0.2;
      audio.play();
    } else {
      btnOn.addEventListener("click", function () {
        let audio = document.getElementById("clickSound2");
        audio.play();
      });
    }
  });
});
