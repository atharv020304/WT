$(document).ready(function () {
    // Integer Array Operations
    let intArray = [];

    // Sort integers
    $("#sortIntArray").click(function () {
        const input = $("#intArray").val();
        intArray = input.split(",").map(num => parseInt(num.trim()));
        intArray.sort((a, b) => a - b);
        $("#intResult").text(`Sorted Array: ${intArray.join(", ")}`);
    });

    // Search integers
    $("#searchIntArray").click(function () {
        const searchValue = parseInt($("#searchInt").val());
        if (intArray.includes(searchValue)) {
            $("#intResult").text(`Element ${searchValue} found at index ${intArray.indexOf(searchValue)}.`);
        } else {
            $("#intResult").text(`Element ${searchValue} not found.`);
        }
    });

    // Named Entities Operations
    let nameArray = [];

    // Add name to the array
    $("#addName").click(function () {
        const name = $("#nameInput").val().trim();
        if (name) {
            nameArray.push(name);
            $("#nameArray").text(`Names: ${nameArray.join(", ")}`);
            $("#nameInput").val(""); // Clear input field
        }
    });

    
    $("#sortNames").click(function () {
        nameArray.sort();
        $("#nameArray").text(`Sorted Names: ${nameArray.join(", ")}`);
    });
});
