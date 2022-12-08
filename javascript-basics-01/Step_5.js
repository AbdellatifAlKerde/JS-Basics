alert("Please enter 2 numbers to multiply");
var btn = document.getElementById("validate");

btn.onclick = function multiply(a, b) {
  var a = document.getElementById("first_number").value;
  var b = document.getElementById("second_number").value;
  return alert(a * b);
};
