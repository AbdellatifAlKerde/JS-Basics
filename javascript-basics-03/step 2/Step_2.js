var show = document.getElementById("show");
var hide = document.getElementById("hide");
var text = document.getElementById("texte");
var link = document.querySelectorAll("a");

// show.addEventListener("click", function () {
//   text.style = "display: block;";
// });

// hide.addEventListener("click", function () {
//   text.style = "display: none;";
// });

link.forEach((e) => {
  e.addEventListener("click", (e) => {
    if (e.target.id == "show") {
      text.style = "display: block;";
    } else {
      text.style = "display: none;";
    }
  });
});
