let container = document.querySelector("div");
let button = document.querySelector("button");
let numbers = "0123456789ABCDEFGH";
button.addEventListener("click", function1);
function function1() {
  let randomcolior = "";
  for (let i = 0; i < 6; i++) {
    randomcolior += numbers[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = "#" + randomcolior;
}
