// Variables
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let xAttemps = 1;

// Functions
const handleTryClick = (e) => {
  e.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    ToggleScreen();

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttemps} tentativas`;
  }
  inputNumber.value = "";
  xAttemps++;
};

const handleResetClick = () => {
  randomNumber = Math.round(Math.random() * 10);
  ToggleScreen();
  xAttemps = 1;
};

const ToggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

// Events
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", function (e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick();
  }
});
