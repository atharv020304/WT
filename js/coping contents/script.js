$(document).ready(function () {
  $("#copyButton").click(function () {
    // Clone all list items from List 1 and append them to List 2
    $("#list2").empty(); // Clear List 2 before copying
    $("#list1").clone().appendTo("#list2");
  });

  $("#addElementButton").click(function () {
    // Add a new element dynamically
    $("#newElementContainer").empty();
    const newElement = $("<p>").text("This is a dynamically added element.");
    newElement.css({
      color: "blue",
      fontSize: "16px",
      marginTop: "20px",
    });
    $("#newElementContainer").append(newElement);
  });
});
