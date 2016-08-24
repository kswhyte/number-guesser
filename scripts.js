var guessInput = document.querySelector("#guess-input");
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");

// document.onload=function () {
guessInput.addEventListener("keydown", function () {
  buttonsDisabled();
});
// };

guessInput.addEventListener("keyup", function () {
  buttonsEnabled();
});

function buttonsEnabled () {
  if (guessInput.value !== "") {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}

function buttonsDisabled () {
  if (guessInput.value === "") {
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
}

clearButton.addEventListener("click", function () {
  clearBox();
});

function clearBox() {
  document.getElementById("guess-input").value = "";
  buttonsDisabled();
}

// ------------------------

function reset () {
  clearBox();
  document.getElementById("user-feedback").innerHTML = "Are you feeling lucky today?";
  document.getElementById("number-generator").innerHTML = "N/A";
  //needs other stuff too
}

var example = document.getElementById('guess-button');


/*example.addEventListener('click', function(){
  alert('hello');
});*/

// function generate () {
//   var userNumber = document.getElementById("numberInput").value;
//   var realInput = parseInt(userNumber);
//   var currentMin = document.getElementById("numberInput").getAttribute("min");
//
//
//   if (realInput > 100) {
//     document.getElementById("user-feedback").innerHTML = "Your number is too high; try again.";
//   }
//   else if (realInput < 1) {
//     document.getElementById("user-feedback").innerHTML = "Your number is too low; try again.";
//   }
//   else if (isNaN(realInput)) {
//     document.getElementById('user-feedback').innerHTML = "Oops, you need to choose a number.";
//   }
//
// }
//
// var min = 0;
// var max = 100;
//
// function setRange () {
//   var inputRange = document.getElementById("numberInput");
//   var newMin = document.getElementById("minimum").value;
//   var newMax = document.getElementById("maximum").value;
//   inputRange.setAttribute("min", newMin);
//   inputRange.setAttribute("max", newMax);
// }
