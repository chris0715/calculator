var screen = document.getElementById("screen");
    
function input(value) {  
  if(!parseInt(value) && screen.value.length > 0 && parseInt(screen.value[screen.value.length -1])) {
    screen.value += value;
  } else if (parseInt(value)) {
    screen.value += value;
  }
}

function calculate() {
  var total = eval(screen.value);
  screen.value = total;
}

function wipe() {
  screen.value ="";
}