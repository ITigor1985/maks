const buttons = document.querySelectorAll(".button");
const img = document.querySelector(".pizza");
const grey_button = document.querySelector(".grey_button");

buttons.forEach((button, index) => {
  if (index === 0) {
    button.addEventListener("click", () => {
      alert("Ты зараза нажал кнопку");
    });
  } else {
    button.addEventListener("click", () => {
      alert("Зачем ты зараза нажала на пиццу");
    });
  }
});

img.addEventListener("click", () => {
  alert("Очень сочная пицца");
});

grey_button.addEventListener("click", () => {
  alert("Мазила");
});
