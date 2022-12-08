var yourName = document.querySelector("#name");
var div = document.createElement("div");
div.setAttribute("id", "container");
document.body.appendChild(div);

var container = document.getElementById("container");

yourName.addEventListener("change", function () {
  container.innerHTML = yourName.value;
});
