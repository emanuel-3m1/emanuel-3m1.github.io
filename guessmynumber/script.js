"use strict";

function displayMessage(message){
    document.querySelector(".message").textContent = message;
}

function displayScore(score){
    document.querySelector(".score").textContent = score;
}

function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);

  //When score is wrong
  if (guess !== secretNumber) {
    if (score > 1) {
      score -= 1;
      displayMessage(guess > secretNumber ? "📈 Too high!":"📉 Too low!");
      displayScore(score);
    } else {
      document.querySelector(".message").textContent = "💥 You lost!";
      displayScore (0);
    }
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347"; //this is how we acces the css style of a body element
    document.querySelector(".number").style.width = "25rem";

    if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }

    //When there is no input
  } else {
    displayMessage("⛔️ No number!");
  }
}

function playAgain() {
  score = 20;
  secretNumber = document.querySelector(".number").value = Math.trunc(
    Math.random() * 20 + 1
  );
  console.log(secretNumber);
  displayMessage("Start quessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayScore("20");
  document.querySelector(".guess").value = "";
}

let score = 20;
let highScore = 0
let secretNumber = (document.querySelector(".number").value = Math.trunc(
  Math.random() * 20 + 1
));
console.log(secretNumber);

//Event listener for when you click the check button
document.querySelector(".check").addEventListener("click", checkGuess);

//Event listener for when you click the again button
document.querySelector(".again").addEventListener("click", playAgain);
