var btn = document.getElementById("validate");

btn.onclick = function calc(a, b) {
  var a = parseInt(document.getElementById("shoe_size").value);
  var b = parseInt(document.getElementById("year").value);
  var firstTotal = (a * 2 + 5) * 50 - b;

  alert(firstTotal + 1766);
};
