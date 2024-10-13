const quizContainer = document.getElementById('quiz-container');
const quizQuestion = document.getElementById('quiz-question');
const   
 choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const   
 submitAnswerBtn = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');
const scoreElement = document.createElement('p');
scoreElement.id = 'score';

let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [
    {
        question: 'What is 2 + 2?',
        choices: ['4', '22', '3'],
        correctAnswer: '4'
    },
    {
        question: 'What is 5 - 3?',
        choices: ['2', '8', '7'],
        correctAnswer: '2'
    },
    // Add more questions here
];

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    quizQuestion.textContent = currentQuestion.question;

    choice1.value = currentQuestion.choices[0];
    choice2.value = currentQuestion.choices[1];
    choice3.value = currentQuestion.choices[2];

    choice1.checked = false;
    choice2.checked = false;
    choice3.checked = false;
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    if (!selectedChoice) {
        feedback.textContent = 'Please select an answer.';
        return;
    }

    const userAnswer = selectedChoice.value;
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (userAnswer === currentQuestion.correctAnswer) {
        score++;
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = 'Incorrect. The correct answer is ' + currentQuestion.correctAnswer + '.';
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length)   
 {
        displayQuestion();
    } else {
        quizContainer.innerHTML = '<h2>Quiz Completed! Your score is: ' + score + ' out of ' + quizQuestions.length + '</h2>';
        quizContainer.appendChild(scoreElement);
        scoreElement.textContent = 'Your score is: ' + score + ' out of ' + quizQuestions.length;
    }
}

submitAnswerBtn.addEventListener('click', checkAnswer);

displayQuestion();
if (userAnswer === currentQuestion.correctAnswer) {
    score++;
    feedback.textContent = 'Correct! Well done.';
} else {
    feedback.textContent = 'Incorrect. The correct answer is ' + currentQuestion.correctAnswer + '.';
}
feedback.textContent = 'Correct! Well done.';
feedback.textContent = 'Incorrect. The correct answer is ' + currentQuestion.correctAnswer + '.';
submitAnswerBtn.addEventListener('click', checkAnswer);
const submitAnswerBtn = document.getElementById('submit-answer');
