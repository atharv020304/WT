document.getElementById("stuForm").addEventListener("submit", (e) => {
  const roll = document.getElementById("roll").value;
  const name = document.getElementById("name").value;

  console.log(roll, name);
  if (!name.trim()) {
    alert("Enter name");
    e.preventDefault(); // Prevents form submission
    return;
  }

  if (roll < 1 || roll === "") {
    alert("Enter a valid roll number");
    e.preventDefault(); // Prevents form submission
    return;
  }

  console.log("Validation passed! Form submitted.");
});

// const validate = (e) => {
//   const roll = document.getElementById("roll").value;
//   const name = document.getElementById("name").value;

//   console.log(roll, name);
//   if (!name.trim()) {
//     alert("Enter name");
//     e.preventDefault();
//     return;
//   }

//   if (roll < 1 || roll === "") {
//     alert("Enter a valid roll number");
//     e.preventDefault();
//     return;
//   }

//   console.log("Validation passed! Form submitted.");
// };
