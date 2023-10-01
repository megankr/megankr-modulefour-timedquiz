var timerEl = document.getElementById("countdown-display");
var startBtn = document.querySelector("#begin-quiz");

function countdownText(time) {
    var time = countdown();
}

startBtn.addEventListener("click", countdownText);

// Creates a timer starting with 300 seconds remaining.
function countdown() {
  var timeRemaining = 300;

  var beginQuiz = confirm("The time limit for this quiz is 5 minutes.\nOnce started the quiz cannot be paused.\nClick 'OK' to begin.");

// setInterval will cause the function to occur every 1000 milliseconds
  var timeInterval = setInterval(function () {
// This if statement will display the remaining time if it is greater than 1.
    if (timeRemaining > 1) {
// Shows the text 'seconds remaining' after the number value. Decreases the value of timeRemaining by 1.
      timerEl.textContent = timeRemaining + ' seconds remaining';
      timeRemaining--;
    } else if (timeRemaining === 1) {
// This if statement will modify the textContent to read 'second remaining'  when the timeRemaining equals 1.
      timerEl.textContent = timeRemaining + ' second remaining';
      timeLeft--;
    } else {
// Creates an empty string, then clears the timer when the remaining time has reached 0.
      timerEl.textContent = "Quiz complete.";
      clearInterval(timeInterval);
    }
  }, 1000);
}
