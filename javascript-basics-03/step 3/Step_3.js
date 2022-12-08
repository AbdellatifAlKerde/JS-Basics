var text = document.querySelector("#text");
var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");

green.addEventListener("click", function () {
  document.body.style.color = "green";
});

red.addEventListener("click", function () {
  document.body.style.color = "red";
});

blue.addEventListener("click", function () {
  document.body.style.color = "blue";
});
