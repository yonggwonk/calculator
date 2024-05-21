var expression = "";
function add(character) {
  expression = expression + character;
  document.getElementById("enter").value = expression;
}

function compute() {
  document.getElementById("enter").value = eval(expression);
}

function clearDisplay() {
  expression = "";
  document.getElementById("enter").value = "0";
}