var guessInput = document.querySelector("#guess-input"); // number input field
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");
var guessButton = document.getElementById("guess-button"); //the button they click to generate the number
var submitButton = document.getElementById("submit-button"); // the button to change max/min values
var minButton = document.getElementById("minimum"); // the number they enter as the new min
var maxButton = document.getElementById("maximum"); // the number they enter as the new min
var min = 1;
var max = 100;
var randomNumber = function () {
  modifiedMin = Math.ceil(min);
  modifiedMax = Math.ceil(max);
  return Math.floor(Math.random() * (modifiedMax - modifiedMin)) + modifiedMin;
};

guessInput.addEventListener("keydown", function () {
  buttonsDisabled();
});

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

resetButton.addEventListener("click", function () {
  reset();
});

function reset () {
  clearBox();
  document.getElementById("user-feedback").innerHTML = "Are you feeling lucky today?";
  document.getElementById("number-generator").innerHTML = "X";
  //needs other stuff too
}

guessButton.addEventListener("click", function () {
  generate();
});

function generate() {
  var numberTheyChose = guessInput.value;
  var realNumberTheyChose = parseInt(numberTheyChose);
  var theNumber = randomNumber();

  if (realNumberTheyChose > max) {
    document.getElementById("user-feedback").innerHTML = "Your number is too high; try again.";
  }
  else if (realNumberTheyChose < min) {
    document.getElementById("user-feedback").innerHTML = "Your number is too low; try again.";
  }
  else if (isNaN(realNumberTheyChose)) {
    document.getElementById('user-feedback').innerHTML = "Oops, you need to choose a number.";
  }
} // end of generate()

submitButton.addEventListener("click", function () {
  reset();
  setRange();
});

function setRange () {
  var theirNewMin = minButton.value;
  var realTheirNewMin = parseInt(theirNewMin);
  var theirNewMax = maxButton.value;
  var realTheirNewMax = parseInt(theirNewMax);
  min = realTheirNewMin;
  max = realTheirNewMax;
}


//if they guess the correct number, then max = max + 10;

//submit: onClick="reset();setRange()


//
// function setRange () {
//   var inputRange = document.getElementById("numberInput");
//   var newMin = document.getElementById("minimum").value;
//   var newMax = document.getElementById("maximum").value;
//   inputRange.setAttribute("min", newMin);
//   inputRange.setAttribute("max", newMax);
// }
