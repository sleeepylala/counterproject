"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const main = document.createElement("main");

  const contenitoreTitolo = document.createElement("div");
  contenitoreTitolo.className = "contenitore-titolo";

  const titolo = document.createElement("h1");
  titolo.className = "titolo";
  titolo.textContent = "Vintage Counter Game!";

  contenitoreTitolo.appendChild(titolo);
  main.appendChild(contenitoreTitolo);

  const section = document.createElement("section");
  const baseConsole = document.createElement("div");
  baseConsole.className = "base-console";

  const contenitoreSinistro = document.createElement("div");
  contenitoreSinistro.className = "contenitore-sinistro";

  const contenitoreTastoOn = document.createElement("div");
  contenitoreTastoOn.className = "contenitore-tasto-on pe-2 other-button";

  const buttonStart = document.createElement("div");
  buttonStart.type = "button";
  buttonStart.className = "button-on p-1";
  buttonStart.id = "button-start";

  const imgStart = document.createElement("img");
  imgStart.src = "assets/images/button-icon/btn-start.svg";
  imgStart.alt = "button start";

  buttonStart.appendChild(imgStart);
  contenitoreTastoOn.appendChild(buttonStart);
  contenitoreSinistro.appendChild(contenitoreTastoOn);

  const contenitoreTastoFrecce = document.createElement("div");
  contenitoreTastoFrecce.className = "contenitore-tasto-frecce";

  const frecciaY = document.createElement("div");
  frecciaY.className = "freccia-y";

  const frecciaSu = document.createElement("div");
  frecciaSu.type = "button";
  frecciaSu.className = "contenitore-btn-freccia-su pt-2";
  frecciaSu.id = "freccia-su";

  const imgFrecciaSu = document.createElement("img");
  imgFrecciaSu.src = "assets/images/icon-frecce/freccia-su.svg";
  imgFrecciaSu.alt = "freccia su";

  frecciaSu.appendChild(imgFrecciaSu);

  const frecciaGiù = document.createElement("div");
  frecciaGiù.type = "button";
  frecciaGiù.className = "contenitore-btn-freccia-giù pb-2";
  frecciaGiù.id = "freccia-giù";

  const imgFrecciaGiù = document.createElement("img");
  imgFrecciaGiù.src = "assets/images/icon-frecce/freccia-sotto.png";
  imgFrecciaGiù.alt = "freccia sotto";

  frecciaGiù.appendChild(imgFrecciaGiù);

  frecciaY.appendChild(frecciaSu);
  frecciaY.appendChild(frecciaGiù);

  const frecciaX = document.createElement("div");
  frecciaX.className = "freccia-x";

  const frecciaSinistra = document.createElement("div");
  frecciaSinistra.type = "button";
  frecciaSinistra.className = "contenitore-btn-freccia-sinistra ps-2";
  frecciaSinistra.id = "freccia-sinistra";

  const imgFrecciaSinistra = document.createElement("img");
  imgFrecciaSinistra.src = "assets/images/icon-frecce/freccia-sinistra.svg";
  imgFrecciaSinistra.alt = "freccia sinistra";

  frecciaSinistra.appendChild(imgFrecciaSinistra);

  const frecciaDestra = document.createElement("div");
  frecciaDestra.type = "button";
  frecciaDestra.className = "contenitore-btn-freccia-destra pe-2";
  frecciaDestra.id = "freccia-destra";

  const imgFrecciaDestra = document.createElement("img");
  imgFrecciaDestra.src = "assets/images/icon-frecce/freccia-destra.svg";
  imgFrecciaDestra.alt = "freccia destra";

  frecciaDestra.appendChild(imgFrecciaDestra);

  frecciaX.appendChild(frecciaSinistra);
  frecciaX.appendChild(frecciaDestra);

  contenitoreTastoFrecce.appendChild(frecciaY);
  contenitoreTastoFrecce.appendChild(frecciaX);

  contenitoreSinistro.appendChild(contenitoreTastoFrecce);

  const contenitoreSchermo = document.createElement("div");
  contenitoreSchermo.className = "contenitore-schermo";

  const schermoConsole = document.createElement("div");
  schermoConsole.className = "schermo-console";

  const displayNumber = document.createElement("div");
  displayNumber.className = "display-number";

  const startDisplay = document.createElement("div");
  startDisplay.className = "display-start";
  startDisplay.id = "start-display";
  startDisplay.textContent = "start counting...";

  const offDisplay = document.createElement("div");
  offDisplay.className = "display-off";
  offDisplay.id = "off-display";
  offDisplay.textContent = "OFF";

  schermoConsole.appendChild(displayNumber);
  schermoConsole.appendChild(startDisplay);
  schermoConsole.appendChild(offDisplay);

  contenitoreSchermo.appendChild(schermoConsole);

  const contenitoreDestro = document.createElement("div");
  contenitoreDestro.className = "contenitore-destro";

  const contenitoreTasti = document.createElement("div");
  contenitoreTasti.className = "contenitore-tasti";

  const contenitoreTastiY = document.createElement("div");
  contenitoreTastiY.className = "contenitore-tasti-y";

  const tastoDoubleAddition = document.createElement("div");
  tastoDoubleAddition.className = "contenitore-double-addition main-button";
  tastoDoubleAddition.type = "button";
  tastoDoubleAddition.id = "tasto-double-addition";

  const imgDoubleAddition = document.createElement("img");
  imgDoubleAddition.src = "assets/images/icon-tasti-principali/tasto++.svg";
  imgDoubleAddition.alt = "tasto ++";

  tastoDoubleAddition.appendChild(imgDoubleAddition);

  const tastoDoubleSubtraction = document.createElement("div");
  tastoDoubleSubtraction.className =
    "contenitore-tasto-double-subtraction main-button";
  tastoDoubleSubtraction.type = "button";
  tastoDoubleSubtraction.id = "tasto-double-subtraction";

  const imgDoubleSubtraction = document.createElement("img");
  imgDoubleSubtraction.src = "assets/images/icon-tasti-principali/tasto--.svg";
  imgDoubleSubtraction.alt = "tasto --";

  tastoDoubleSubtraction.appendChild(imgDoubleSubtraction);

  contenitoreTastiY.appendChild(tastoDoubleAddition);
  contenitoreTastiY.appendChild(tastoDoubleSubtraction);

  const contenitoreTastiX = document.createElement("div");
  contenitoreTastiX.className = "contenitore-tasti-x";

  const tastoSubtraction = document.createElement("div");
  tastoSubtraction.className = "contenitore-tasto-subtraction main-button";
  tastoSubtraction.type = "button";
  tastoSubtraction.id = "tasto-subtraction";

  const imgSubtraction = document.createElement("img");
  imgSubtraction.src = "assets/images/icon-tasti-principali/tasto-.svg";
  imgSubtraction.alt = "tasto -";

  tastoSubtraction.appendChild(imgSubtraction);

  const tastoAddition = document.createElement("div");
  tastoAddition.className = "contenitore-tasto-addition main-button";
  tastoAddition.type = "button";
  tastoAddition.id = "tasto-addition";

  const imgAddition = document.createElement("img");
  imgAddition.src = "assets/images/icon-tasti-principali/tasto+.svg";
  imgAddition.alt = "tasto +";

  tastoAddition.appendChild(imgAddition);

  contenitoreTastiX.appendChild(tastoSubtraction);
  contenitoreTastiX.appendChild(tastoAddition);

  contenitoreTasti.appendChild(contenitoreTastiY);
  contenitoreTasti.appendChild(contenitoreTastiX);

  contenitoreDestro.appendChild(contenitoreTasti);

  const contenitoreTastoReset = document.createElement("div");
  contenitoreTastoReset.className = "contenitore-tasto-reset ps-2 other-button";

  const buttonReset = document.createElement("div");
  buttonReset.type = "button";
  buttonReset.className = "button-reset p-1";
  buttonReset.id = "button-reset";

  const imgReset = document.createElement("img");
  imgReset.src = "assets/images/button-icon/btn-reset.svg";
  imgReset.alt = "tasto reset";

  buttonReset.appendChild(imgReset);
  contenitoreTastoReset.appendChild(buttonReset);
  contenitoreDestro.appendChild(contenitoreTastoReset);

  baseConsole.appendChild(contenitoreSinistro);
  baseConsole.appendChild(contenitoreTastoFrecce);
  baseConsole.appendChild(contenitoreSchermo);
  baseConsole.appendChild(contenitoreDestro);

  section.appendChild(baseConsole);
  main.appendChild(section);

  document.body.appendChild(main);

  // Gestione dell'interattività
  const btnAddiction = document.querySelector("#tasto-addition");
  const btnSubstraction = document.querySelector("#tasto-subtraction");
  const btnDoubleAddiction = document.querySelector("#tasto-double-addition");
  const btnDoubleSubstraction = document.querySelector(
    "#tasto-double-subtraction"
  );
  const consoleColor = document.querySelector(".base-console");

  const btnOn = document.querySelector("#button-start");
  const btnReset = document.querySelector("#button-reset");
  const start = document.querySelector("#start-display");
  const off = document.querySelector("#off-display");
  const schermo = document.querySelector(".schermo-console");
  const display = document.querySelector(".display-number");

  const arrowTop = document.querySelector("#freccia-su");
  const arrowBottom = document.querySelector("#freccia-giù");
  const arrowRight = document.querySelector("#freccia-destra");
  const arrowLeft = document.querySelector("#freccia-sinistra");

  const mainButtons = document.querySelectorAll(".main-button");
  const otherButtons = document.querySelectorAll(".other-button");

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

  function doppiaAddizione() {
    let numberDisplay = Number(display.textContent);
    display.textContent = Number(display.textContent) + 2;
    removeStartOff();
  }

  function doppiaSottrazione() {
    display.textContent = Number(display.textContent) - 2;
    removeStartOff();
  }

  function addizione() {
    display.textContent = Number(display.textContent) + 1;
    removeStartOff();
  }

  function sottrazione() {
    display.textContent = Number(display.textContent) - 1;
    removeStartOff();
  }

  function reset() {
    display.textContent = 0;
    removeStartOff();
    updateConsoleColor(COLORS.YELLOW);
  }

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

  // ... (Parte mancante del codice)

  arrowTop.addEventListener("click", () => updateConsoleColor(COLORS.RED));
  arrowBottom.addEventListener("click", () => updateConsoleColor(COLORS.BLUE));
  arrowLeft.addEventListener("click", () => updateConsoleColor(COLORS.PURPLE));
  arrowRight.addEventListener("click", () => updateConsoleColor(COLORS.DARK));

  document.addEventListener("DOMContentLoaded", function () {
    let imgElement = document.querySelector("img");

    imgElement.addEventListener("dragstart", function (e) {
      e.preventDefault();
    });
  });

  mainButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (isConsoleOn) {
        let audio = document.getElementById("clickSound");
        audio.volume = 0.2;
        audio.playbackRate = 2;
        audio.play();
      } else {
        // Gestisci il caso in cui la console è spenta (se necessario)
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
});
