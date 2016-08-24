var guessInput = document.querySelector("#guess-input"); // number input field
var clearButton = document.getElementById("clear-button");
var resetButton = document.getElementById("reset-button");
var lastGuess = document.getElementById("number-generator");
var guessButton = document.getElementById("guess-button"); //the button they click to generate the number
var submitButton = document.getElementById("submit-button"); // the button to change max/min values
var minButton = document.getElementById("minimum"); // the number they enter as the new min
var maxButton = document.getElementById("maximum"); // the number they enter as the new min
var min = minButton.value || 0;
var max = maxButton.value || 100;

var storedNumber = randomNumber();
// var randomNumberWin = randomNumber();

function randomNumber() {
  var modifiedMin = Math.ceil(min);
  var modifiedMax = Math.ceil(max);
  return Math.floor(Math.random() * (modifiedMax - modifiedMin)) + modifiedMin;
}

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
  min = 0;
  max = 100;
  storedNumber = randomNumber();
  // randomNumber = randomNumber();
  document.getElementById("range-setting").innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
  //randomNumber();//
}

guessButton.addEventListener("click", function () {
  document.getElementById("instructions").innerHTML = "Your last guess was...";
  lastGuess.innerText = guessInput.value;
  generate();
  clearBox();
});

guessInput.addEventListener("keydown", function (key) {
  if (key.keyCode === 13) {
    document.getElementById("instructions").innerHTML = "Your last guess was...";
    lastGuess.innerText = guessInput.value;
    generate();
    clearBox();
  }
});

// $('body').keydown(function(e){
//         if(e.keyCode == 114){
//             $(this).css({'background':'red'});
//         }
//         if(e.keyCode == 121){
//             $(this).css({'background':'yellow'});
//         }

function generate() {
  var numberTheyChose = guessInput.value;
  var realNumberTheyChose = parseInt(numberTheyChose);
  // var storedNumber = randomNumber();
  // var theNumber = randomNumber();

  alert(storedNumber);

  if (realNumberTheyChose > max) {
    document.getElementById("user-feedback").innerHTML = "Your number is above the accepted range.";
  }
  else if (realNumberTheyChose < min) {
    document.getElementById("user-feedback").innerHTML = "Your number is below the accepted range.";
  }
  else if (isNaN(realNumberTheyChose)) {
    document.getElementById('user-feedback').innerHTML = "Oops, you need to choose a number.";
  }
  else if (realNumberTheyChose > storedNumber) {
    document.getElementById("user-feedback").innerHTML = "Your number is too high; try again.";
  }
  else if (realNumberTheyChose < storedNumber) {
    document.getElementById("user-feedback").innerHTML = "Your number is too low; try again.";
  }
  else if (realNumberTheyChose === storedNumber) {
    clearBox();
    document.getElementById("user-feedback").innerHTML = "You win!!";
    max = max + 10;
    min = min - 10;
    document.getElementById("range-setting").innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
    // storedNumber = randomNumberWin;
    // randomNumber();
    storedNumber = randomNumber();
    // buttonsEnabled();
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
  document.getElementById("range-setting").innerHTML = "Minimum: " + min + " " + " &#38; Maximum: " + max;
   //randomNumber();//

}


// var randomNumber = function () {
//   modifiedMin = Math.ceil(min);
//   modifiedMax = Math.ceil(max);
//   return Math.floor(Math.random() * (modifiedMax - modifiedMin)) + modifiedMin;
// };

// function rangeSetting (chosen-min, chosen-max) {
//   "Present Minimum: " + "chosen-min" + "Maximum: "" + "chosen-max";
// }
