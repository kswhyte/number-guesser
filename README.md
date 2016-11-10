# Welcome to Number Guesser!

[Try it out!](https://kswhyte.github.io/number-guesser/)

Number Guesser is an application created by Graham Nessler and Kinan Whyte. You enter a number between 1 and 100 into the top input field; the computer generates a random number within that range and compares its number to yours. It will tell you if your number is too high, too low, out of the accepted range, not a valid entry (such as a letter), or equal to the computer's number. In the latter case, the program adjusts the max and min by 10 (up and down, respectively). You can also manually adjust the max and min, clear the input field, and reset the game.

Have fun!

[Project Specs](http://frontend.turing.io/projects/number-guesser.html):

Today, you’ll be building a game where the user picks a number between 1 and 100.

Phase One: Basic Requirements

The application should have the following user interface components:

An input field for guessing the number
A button for submitting a guess
A button for clearing the input field
A button that resets the game to its initial state
An element that displays the users most recent guess
An element that displays a message to user
If their guess is too high, it should display: “Sorry, that guess is too high. Try a lower number.”
If their guess is too low, it should display: “Sorry, that guess is too low. Try a higher number.”
Some things to think about:

Input fields—regardless of their “type” attribute—store their values in strings. You’ll need to use parseInt() to turn it back into a number.
You’ll need a strategy for generating random numbers.
Phase Two: More Better

The type attribute for the guess input should be “number”.
It should have “min” and a “max” attributes equal to the minimum and maximum of the reange of guesses (e.g. 1 and 100, respectively).
The application should display an error message if the guess is not a number (e.g. parseInt() returns NaN).
The application should display an error if the guess is outside of the range of possible answers.
The clear button should be disabled if there is nothing to clear.
The reset button should be disabled if there is nothing to reset.
Phase Three: Level Up

Add additional inputs that allows the user to specify what the minimum and maximum numbers should be.
Every time the user wins a round increase the maximum number by 10.
Every time the user wins a round decrease the minimum number by 10.
(Pro-tip: You’ll need to adjust the input fields to accept the new minimum and maximum numbers.)

UX/UI Expectations

Application is intuitive, well designed, and easy to use. Virtually no major improvements are needed in the UX or UI.
