var guessInput = document.getElementById("guess-input");
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

function getGuessInput() {
  return parseInt(guessInput.value);
}

function updateUserFeedback (feedback) {
  userFeedback.innerHTML(feedback)
};


function compareGuessToRandomNumber (guessNumber, randomResult) {
  if (guessNumber > randomResult) {
    updateUserFeedback("Your number is too high; try again");
  }
  if (guessNumber < randomResult) {
    updateUserFeedback("Your number is too low; try again");
  }
  if (guessNumber === randomResult) {
    updateUserFeedback("You win");
    changeMaxMinOnWin();
  }
};

function checkForValidNumber (guessNumber) {
  if (isNan(guessNumber)) {
    updateUserFeedback("Please choose a number.");
  }
  if (guessNumber > max) {
    updateUserFeedback("Your number is above the accepted range.");
  }
  if (guessNumber < min) {
    updateUserFeedback("Your number is below the accepted range.");
  }
};

function changeMaxMinOnWin () {
  max = max + 10;
  min = min - 10;
  rangeSetting.innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
  storedNumber = randomNumber();
};

function runOneTurnOfGame() {
  var numberTheyChose = getGuessInput();
  checkForValidNumber(numberTheyChose);
  compareGuessToRandomNumber(numberTheyChose, storedNumber);
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

function resetToOriginalState () {
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
  min = parseInt(minInput.value);
  max = parseInt(maxInput.value);
  rangeSetting.innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
  storedNumber = randomNumber();
}
