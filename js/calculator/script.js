// const num1 = document.getElementById("num1");
// const num2 = document.getElementById("num2");
// const op = document.getElementById("op");
// const btn = document.getElementById("btn");
// const ansTag = document.getElementById("ans");

// const cal = () => {
//   const n1 = parseFloat(num1.value);
//   const n2 = parseFloat(num2.value);
//   if (!n1 || !n2) {
//     return;
//   }
//   let ans = 0;
//   const ope = op.value;
//   if (ope === "+") {
//     ans = n1 + n2;
//   } else if (ope === "-") {
//     ans = n1 - n2;
//   } else if (ope === "*") {
//     ans = n1 * n2;
//   } else if (ope === "/") {
//     ans = n1 / n2;
//   } else if (ope === "%") {
//     ans = n1 % n2;
//   }

//   ansTag.innerHTML = `<h1> Ans : ${ans} </h1>`;
// };

let result = "";

function appendNumber(number) {
  result += number;
  updateResult();
}

function appendOperator(operator) {
  if (result === "" && operator !== "-") return; // Prevent invalid starts
  if (["+", "-", "*", "/", "%"].includes(result.slice(-1))) return; // Prevent double operators
  result += operator;
  updateResult();
}

function clearResult() {
  result = "";
  updateResult();
}

function updateResult() {
  document.getElementById("result").innerText = result || "0";
}

function calculateResult() {
  try {
    result = eval(result).toString(); // Unsafe but simple for demonstration purposes
    updateResult();
  } catch (e) {
    alert("Invalid Expression");
    clearResult();
  }
}
