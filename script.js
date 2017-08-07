var screen = document.getElementById("screen");
    
function input(value) {
  var theValue = document.getElementById("screen");
  switch (value) {
    case "+":
      if(screen.value[screen.value.length - 1] == "+") {
        break;
      } else
        theValue.value += "+"
      break;
      case "*":
      if(screen.value[screen.value.length - 1] == "*") {
        break;
      } else
        theValue.value += "*"
      break;
      case "/":
      if(screen.value[screen.value.length - 1] == "/") {
        break;
      } else
        theValue.value += "/"
      break;
    
    default:    
  theValue.value += value;
      break;
  }
}

function calculate() {
  var total = eval(screen.value);
  screen.value = total;
}