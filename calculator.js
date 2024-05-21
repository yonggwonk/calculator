var expression = "";

function add(character) {
  var display = document.getElementById("enter");
  if (display.value === "0" && !isNaN(character)) {
    expression = character;
  } else {
    expression += character;
  }
  display.value = expression;
}

function compute() {
  try {
    var result = new Function('return ' + expression)();
    document.getElementById("enter").value = result;
    expression = result.toString();
  } catch (error) {
    document.getElementById("enter").value = "Error";
    expression = "";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("enter").value = "0";
}