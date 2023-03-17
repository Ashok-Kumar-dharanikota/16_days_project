const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
let correctAns

let score = JSON.parse(localStorage.getItem("score"));
const scoreE1 = document.getElementById("score");
if (!score) {
  score = 0;
}
scoreE1.innerText = `score: ${score}`;

const questionE1 = document.getElementById("question");
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");

// questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;

formE1.addEventListener("submit", () => {
  const userAns = +inputE1.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage();
    updateNewQuestion();
  } else {
    score--;
    updateLocalStorage();
    updateNewQuestion();
  }
});

function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}

function updateNewQuestion() {
  const operation = Math.ceil(Math.random() * 4); 

  switch (operation) {
    case 1: // addition
      questionE1.innerText = `What is ${num1} + ${num2}?`;
      correctAns = num1 + num2;
      break;
    case 2: // subtraction
      questionE1.innerText = `What is ${num1} - ${num2}?`;
      correctAns = num1 - num2;
      break;
    case 3: // division
      questionE1.innerText = `What is ${num1} ÷ ${num2}? `;
      correctAns = parseFloat((num1 / num2).toFixed(2));
      break;
    case 4:
      questionE1.innerText = `What is ${num1} multiplied by ${num2}?`;
      correctAns = num1 * num2;
      break;

  }
}

updateNewQuestion();
