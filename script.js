const questions = [
{
  //All the music category question
  question: "Which of the following is not a type of music notation?",
  answers: [
    { text: "Standard notation", correct: false },
    { text: "Tab notation", correct: false },
    { text: "Morse code notation", correct: true },
    { text: "Graphics notation", correct: false },
  ],
},
{
  question: "What is the most common time signature in classical music?",
  answers: [
    { text: "3/4", correct: false },
    { text: "4/4", correct: true },
    { text: "5/4", correct: false },
    { text: "6/8", correct: false },
  ],
},
{
  question:
    "Which of the following is not a type of instrument in a symphony orchestra?",
  answers: [
    { text: "Violin", correct: false },
    { text: "Piano", correct: false },
    { text: "Harp", correct: false },
    { text: "Theremin", correct: true },
  ],
},
{
  question: "What is the most common key in pop music?",
  answers: [
    { text: "C Major", correct: true },
    { text: "G Major", correct: false },
    { text: "D Major", correct: false },
    { text: "A Major", correct: false },
  ],
},
{
  question: "Which of the following is not a type of chord?",
  answers: [
    { text: "Major", correct: false },
    { text: "Minor", correct: false },
    { text: "Diminished", correct: false },
    { text: "Flat", correct: true },
  ],
},

{
  question: "Which of the following is not a type of music theory?",
  answers: [
    { text: "Harmony", correct: false },
    { text: "Counterpoint", correct: false },
    { text: "Form", correct: false },
    { text: "Cooking", correct: true },
  ],
},
{
  question: "Which of the following is not a type of music genre?",
  answers: [
    { text: "Jazz", correct: false },
    { text: "Blues", correct: false },
    { text: "Rock", correct: false },
    { text: "Applesauce", correct: true },
  ],
},
{
  question: "What is the most common tempo marking in classical music?",
  answers: [
    { text: "Allegro", correct: true },
    { text: "Andante", correct: false },
    { text: "Adagio", correct: false },
    { text: "Moderato", correct: false },
  ],
},
{
  question: "Which of the following is not a type of musical form?",
  answers: [
    { text: "Sonata", correct: false },
    { text: "Symphony", correct: false },
    { text: "Concerto", correct: false },
    { text: "Spaghetti", correct: true },
  ],
},
{
  question:
    "Which of the following is not a type of music notation software?",
  answers: [
    { text: "Sibelius", correct: false },
    { text: "Finale", correct: false },
    { text: "MuseScore", correct: false },
    { text: "Microsoft Word", correct: true },
  ],
},
];
//show the question answer & next button
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
currentQuestionIndex = 0;
score = 0;
nextButton.innerHTML = "Next";
showQuestion();
}

function showQuestion() {
resetstate();
let currentQuestion = questions[currentQuestionIndex];
let questionNo = currentQuestionIndex + 1;
questionElement.innerHTML = questionNo + ". " + currentQuestion.
question;

currentQuestion.answers.forEach(answer => {
  const button = document.createElement("button");
  button.innerHTML = answer.text;
  button.classList.add("btn");
  answerButtons.appendChild(button);
  if (answer.correct) {
    button.dataset.correct = answer.correct;
  }
  button.addEventListener("click", selectAnswer);
});
}

function resetstate() {
nextButton.style.display = "none";
while (answerButtons.firstChild) {
  answerButtons.removeChild(answerButtons.firstChild);
}
}
//In thi we take a class to show the background color correct & incorrect answer
function selectAnswer(e) {
const selectedBtn = e.target;
const isCorrect = selectedBtn.dataset.correct === "true";
if (isCorrect) {
  selectedBtn.classList.add("correct");
  score++;
} else {
  selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach((button) => {
  if (button.dataset.correct === "true") {
    button.classList.add("correct");
  }
  button.disabled = true;
});
nextButton.style.display = "block";
}
//SCORE

function showScore() {
resetstate();
questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
nextButton.innerHTML = " Play Again";
nextButton.style.display = "block";
}
//when we givw first answer afer that automatic  show the next button
function handleNextButton() {
currentQuestionIndex++;
if (currentQuestionIndex < questions.length) {
  showQuestion();
} else {
  showScore();
}
}

nextButton.addEventListener("click", () => {
if (currentQuestionIndex < questions.length) {
  handleNextButton();
} else {
  startQuiz();
}
});
startQuiz();