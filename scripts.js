function end() {
  document.getElementById("numberChosen").value = "";
};

function reset () {

};

function generate () {
  var userNumber = document.getElementById("numberChosen").value;
  var realInput = parseInt(userNumber);

  if (realInput > 100) {
    document.getElementById("user-feedback").innerHTML = "Your number is too high; try again.";
  }
  else if (realInput < 1) {
    document.getElementById("user-feedback").innerHTML = "Your number is too low; try again.";
  }
  else if (realInput === NaN) {
    document.getElementById('user-feedback').innerHTML = "Test";
  }

};
