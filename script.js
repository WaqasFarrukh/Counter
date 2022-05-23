const counter = document.getElementById("counter");
const decBtn = document.getElementById("decrease");
const incBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");

let count = 0;

incBtn.addEventListener("click", () => {
  count++;
  counter.innerHTML = count;
});

decBtn.addEventListener("click", () => {
  if (count > 0) {
    count--;
    counter.innerHTML = count;
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.innerHTML = count;
});
