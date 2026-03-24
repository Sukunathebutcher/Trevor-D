let secretNumber = Math.floor(Math.random() * 50) + 1;
let attempts = 0;

const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-button");
const feedback = document.getElementById("feedback");
const attemptsDisplay = document.getElementById("attempts");

guessButton.addEventListener("click", () => {
  const guess = Number(guessInput.value);
  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    feedback.textContent = "🎉 Correct! You guessed it!";
    feedback.style.color = "#4f5a55";
    document.body.style.background = "linear-gradient(to right, #40e0d0, #6a11cb)";
    feedback.classList.add("win-animation");
  } else if (guess < secretNumber) {
    feedback.textContent = "📉 Too low bro!!!!"
    animateFeedback();
  } else {
    feedback.textContent = "📈 Too high bro!!!!!!"
    animateFeedback();
  }
});

function animateFeedback() {
  feedback.style.transform = "scale(1.2)";
  setTimeout(() => {
    feedback.style.transform = "scale(1)";
  }, 200);
}