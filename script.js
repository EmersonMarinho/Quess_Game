const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let randomNumber = Math.round(Math.random() * 10);

let xAttemps = 1;

console.log(randomNumber);

const handleTryClick = (e) => {
  e.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttemps} tentativas`;
  }
  inputNumber.value = "";
  xAttemps++;
};

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", function () {
  randomNumber = Math.round(Math.random() * 10);
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  xAttemps = 1;
  console.log(randomNumber);
});
