var button = document.querySelector("button");
var inp1 = document.getElementById("name");
var inp2 = document.getElementById("surname");
var inp3 = document.getElementById("city");

button.addEventListener("click", function () {
  if (confirm("Are you sure you want to reset")) {
    inp1.value = "";
    inp2.value = "";
    inp3.value = "";
  } else {
    console.log("canceled");
  }
});
