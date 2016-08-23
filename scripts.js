window.addEventListener("load", function () {
  buttonsDisabled();
});

function buttonsDisabled () {
  var guessBox = document.getElementById("numberInput").value;
  if (guessBox === "") {
    document.getElementById("clear-button").disabled = true;
    document.getElementById("reset-button").disabled = true;
  }
}

window.onload=function () {
  var cleared = document.getElementById("clear-button");
  cleared.addEventListener("click", function () {
    clearBox();
  });
};

function clearBox() {
  document.getElementById("numberInput").value = "";
  //call disable function here
}

window.onload=function  () {
  var input = document.getElementById("numberInput");
  input.addEventListener("keyup", function () {
    buttonsEnabled();
  });
  input.addEventListener("keydown", function () {
    buttonsDisabled();
  });
};


function buttonsEnabled () {
  var guessBox = document.getElementById("numberInput").value;
  if (guessBox !== "") {
    document.getElementById("clear-button").disabled = false;
    document.getElementById("reset-button").disabled = false;
  }
}

function reset () {
  clearBox();
  document.getElementById("user-feedback").innerHTML = "Are you feeling lucky today?";
  document.getElementById("number-generator").innerHTML = "N/A";
  //needs other stuff too
}

var example = document.getElementById('guess-button');


example.addEventListener('click', function(){
  alert('hello');
});

function generate () {
  var userNumber = document.getElementById("numberInput").value;
  var realInput = parseInt(userNumber);
  var currentMin = document.getElementById("numberInput").getAttribute("min");


  if (realInput > 100) {
    document.getElementById("user-feedback").innerHTML = "Your number is too high; try again.";
  }
  else if (realInput < 1) {
    document.getElementById("user-feedback").innerHTML = "Your number is too low; try again.";
  }
  else if (isNaN(realInput)) {
    document.getElementById('user-feedback').innerHTML = "Oops, you need to choose a number.";
  }

}

var min = 0;
var max = 100;

function setRange () {
  var inputRange = document.getElementById("numberInput");
  var newMin = document.getElementById("minimum").value;
  var newMax = document.getElementById("maximum").value;
  inputRange.setAttribute("min", newMin);
  inputRange.setAttribute("max", newMax);
}
