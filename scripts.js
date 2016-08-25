var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var lastGuess = document.getElementById("number-generator");
var instructions = document.getElementById("instructions");
var userFeedback = document.getElementById("user-feedback");
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");
var submitButton = document.getElementById("submit-button");
var rangeSetting = document.getElementById("range-setting");
var minInput = document.getElementById("minimum");
var maxInput = document.getElementById("maximum");
var min = minInput.value || 0;
var max = maxInput.value || 100;
var storedNumber = randomNumber();

function randomNumber() {
  var modifiedMin = Math.ceil(min);
  var modifiedMax = Math.ceil(max);
  return Math.floor(Math.random() * (modifiedMax - modifiedMin)) + modifiedMin;
}

guessButton.addEventListener("click", function () {
  instructions.innerHTML = "Your last guess was...";
  lastGuess.innerText = guessInput.value;
  generate();
  clearField();
});

guessInput.addEventListener("keydown", function (key) {
  if (key.keyCode === 13) {
    instructions.innerHTML = "Your last guess was...";
    lastGuess.innerText = guessInput.value;
    generate();
    clearField();
  }
});

function generate() {
  var numberTheyChose = parseInt(guessInput.value);
  
  if (numberTheyChose > max) {
    userFeedback.innerHTML = "Your number is above the accepted range.";
  }
  else if (numberTheyChose < min) {
    userFeedback.innerHTML = "Your number is below the accepted range.";
  }
  else if (isNaN(numberTheyChose)) {
    userFeedback.innerHTML = "Oops, you need to choose a number.";
  }
  else if (numberTheyChose > storedNumber) {
    userFeedback.innerHTML = "Your number is too high; try again.";
  }
  else if (numberTheyChose < storedNumber) {
    userFeedback.innerHTML = "Your number is too low; try again.";
  }
  else if (numberTheyChose === storedNumber) {
    clearField();
    userFeedback.innerHTML = "You win!!";
    max = max + 10;
    min = min - 10;
    rangeSetting.innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
    storedNumber = randomNumber();
  }
}

guessInput.addEventListener("keydown", function () {
  buttonsDisabled();
});

guessInput.addEventListener("keyup", function () {
  buttonsEnabled();
});

function buttonsDisabled () {
  if (guessInput.value === "") {
    clearButton.disabled = true;
    resetButton.disabled = true;
  }
}

function buttonsEnabled () {
  if (guessInput.value !== "") {
    clearButton.disabled = false;
    resetButton.disabled = false;
  }
}

clearButton.addEventListener("click", function () {
  clearField();
});

function clearField() {
  guessInput.value = "";
  buttonsDisabled();
}

resetButton.addEventListener("click", function () {
  reset();
});

function reset () {
  clearField();
  userFeedback.innerHTML = "Are you feeling lucky today?";
  lastGuess.innerHTML = "X";
  min = 0;
  max = 100;
  storedNumber = randomNumber();
  rangeSetting.innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
}

submitButton.addEventListener("click", function () {
  reset();
  setRange();
});

function setRange () {
  var theirNewMin = minInput.value;
  var realTheirNewMin = parseInt(theirNewMin);
  var theirNewMax = maxInput.value;
  var realTheirNewMax = parseInt(theirNewMax);
  min = realTheirNewMin;
  max = realTheirNewMax;
  rangeSetting.innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
  storedNumber = randomNumber();
}
