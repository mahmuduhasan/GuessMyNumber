// console.log(document.getElementById("hint"));
// document.getElementById("hint").textContent = "🎉 Correct Guess!";

let randomNumber = Math.floor(Math.random() * 20 + 1);

document.querySelector(".check-btn").addEventListener("click", function () {
  let lives = parseInt(document.querySelector("#lives").textContent);
  if (lives == 0) {
    document.getElementById("hint").textContent = "👎 You Lose!";
    return;
  }
  let highestScore = parseInt(
    document.querySelector("#highest-score").textContent
  );
  console.log(typeof lives);
  let guessedNumber = document.querySelector("#guessInput").value;
  console.log(guessedNumber);
  if (!guessedNumber) {
    document.getElementById("hint").textContent = "No Number!";
  } else {
    if (randomNumber < guessedNumber) {
      document.getElementById("hint").textContent = "📈 Too High!";
      lives -= 1;
      document.querySelector("#lives").textContent = lives;
    } else if (randomNumber > guessedNumber) {
      document.getElementById("hint").textContent = "📉 Too Low!";
      lives -= 1;
      document.querySelector("#lives").textContent = lives;
    } else {
      document.getElementById("hint").textContent = "🎉 Correct Guess!";
      document.querySelector("body").style.backgroundColor = "green";
      if (lives > highestScore) {
        document.querySelector("#highest-score").textContent = lives;
        document.querySelector(".question").textContent = randomNumber;
      }
    }
  }
});

document.querySelector(".restart").addEventListener("click", () => {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".question").textContent = "?";
  document.getElementById("hint").textContent = "Start Guessing...";
  document.querySelector("#lives").textContent = "20";
  document.querySelector("#guessInput").value = "";
});
