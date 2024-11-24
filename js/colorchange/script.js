const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const d1 = document.getElementById("content");

b1.addEventListener("click", () => {
  d1.classList.add("blue");
  d1.classList.remove("green");
  d1.classList.remove("red");
});
b2.addEventListener("click", () => {
  d1.classList.add("red");
  d1.classList.remove("blue");
  d1.classList.remove("green");
});
b3.addEventListener("click", () => {
  d1.classList.add("green");
  d1.classList.remove("blue");
  d1.classList.remove("red");
});
