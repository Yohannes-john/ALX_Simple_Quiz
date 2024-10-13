

const quizQuestion = document.getElementById('quiz-question');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const   
 submitAnswerBtn = document.getElementById('submit-answer');
const feedback = document.getElementById('feedback');

const correctAnswer = 4;

submitAnswerBtn.addEventListener('click', () => {
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    if (!selectedChoice) {
        feedback.textContent = 'Please select an answer.';
        return;
    }

    const userAnswer = parseInt(selectedChoice.value);

    if (userAnswer === correctAnswer) {
        feedback.textContent = 'Correct! Well done.';
    } else {
        feedback.textContent = 'Incorrect. The correct answer is ' + correctAnswer + '.';
    }

    // Uncheck all radio buttons for the next question
    choice1.checked = false;
    choice2.checked = false;
    choice3.checked = false;

    // Generate a new quiz question (replace with your question generation logic)
    quizQuestion.textContent = 'What is 3 + 5?'; // Example: Replace with your question
});
