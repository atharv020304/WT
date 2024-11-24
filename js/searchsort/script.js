const sort = document.getElementById("sort");
const search = document.getElementById("search");
const ans = document.getElementById("ans");
const ans2 = document.getElementById("ans2");
const input = document.getElementById("input");
const key = document.getElementById("key");

sort.addEventListener("click", () => {
  const data = input.value.split(" ");
  const intData = data.map((i) => parseInt(i));

  intData.sort((a, b) => a - b);
  //intData.sort()

  ans.innerHTML = "Sorted Array : " + intData.join(", ");
});

search.addEventListener("click", () => {
  const data = input.value.split(" ");
  const k = key.value;

  const index = data.indexOf(k);

  if (index !== -1) {
    index++;
    ans2.innerHTML = "Element found at index : " + index;
  } else {
    ans2.innerHTML = "Element is not found in array ";
  }
});
