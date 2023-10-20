const screen1 = document.querySelector("#screen1");
const screen2 = document.querySelector("#screen2");
const biscoito = document.querySelector(".biscoito");
const btnReset = document.querySelector(".btnReset");

function handleImageClick(event) {
  event.preventDefault();
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");

}
function handleReset(event) {
  event.preventDefault();
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

biscoito.addEventListener("click", handleImageClick);

btnReset.addEventListener('click', handleReset)