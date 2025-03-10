document.addEventListener('DOMContentLoaded', function() {
  const quizContainer = document.getElementById('quiz-container');
  renderQuiz(quizData, quizContainer);

  const submitBtn = document.getElementById('submit-btn');
  submitBtn.addEventListener('click', submitQuiz);
});

/**
 * Renders the quiz questions and options within the given container.
 * @param {Object} quizData - The data for the quiz including questions and answers.
 * @param {HTMLElement} container - The DOM element where the quiz will be rendered.
 */
function renderQuiz(quizData, container) {
  container.innerHTML = ''; // Clear the container before rendering

  quizData.forEach((question, index) => {
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');

    // Add the question text
    const questionText = document.createElement('p');
    questionText.textContent = question.question;
    questionElement.appendChild(questionText);

    // Render the options based on question type
    const answersContainer = document.createElement('div');
    answersContainer.classList.add('answers');

    if (question.type === 'single') {
      question.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        answersContainer.appendChild(optionLabel);
      });
    } else if (question.type === 'multiple') {
      question.options.forEach(option => {
        const optionLabel = document.createElement('label');
        const optionInput = document.createElement('input');
        optionInput.type = 'checkbox';
        optionInput.name = `question${index}`;
        optionInput.value = option;
        optionLabel.appendChild(optionInput);
        optionLabel.appendChild(document.createTextNode(option));
        answersContainer.appendChild(optionLabel);
      });
    } else if (question.type === 'freeform') {
      const input = document.createElement('textarea');
      input.name = `question${index}`;
      answersContainer.appendChild(input);
    }

    questionElement.appendChild(answersContainer);
    container.appendChild(questionElement);
  });
}

/**
 * Checks if all quiz questions have been answered.
 * @return {Boolean} True if all questions are answered, false otherwise.
 */
function areAllQuestionsAnswered() {
  const questions = document.querySelectorAll('.question');
  let allAnswered = true;

  questions.forEach(question => {
    const answersContainer = question.querySelector('.answers');
    if (answersContainer.querySelector('input[type="radio"]:checked') || 
        answersContainer.querySelector('input[type="checkbox"]:checked') || 
        answersContainer.querySelector('textarea').value.trim() !== '') {
      // Answer is selected or the freeform input is filled
    } else {
      allAnswered = false;
    }
  });

  return allAnswered;
}

/**
 * Checks if the answer provided for a single-answer question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the answer is correct, false otherwise.
 */
function isSingleAnswerCorrect(question, correctAnswer) {
  const selectedAnswer = question.querySelector('input[type="radio"]:checked');
  return selectedAnswer && selectedAnswer.value === correctAnswer;
}

/**
 * Checks if the answers provided for a multiple-answer question are correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if all correct answers are selected, false otherwise.
 */
function isMultipleAnswerCorrect(question, correctAnswers) {
  const selectedAnswers = Array.from(question.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(input => input.value);
  return correctAnswers.every(answer => selectedAnswers.includes(answer)) &&
         selectedAnswers.length === correctAnswers.length;
}

/**
 * Checks if the answer provided for a free-form question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the free-form answer is correct, false otherwise.
 */
function isFreeFormAnswerCorrect(question, correctAnswer) {
  const userAnswer = question.querySelector('textarea').value.trim();
  return userAnswer.toLowerCase() === correctAnswer.toLowerCase();
}

/**
 * Submits the quiz, checks all answers, calculates the score, and displays it.
 * Alerts the user if not all questions have been answered.
 */
function submitQuiz() {
  if (!areAllQuestionsAnswered()) {
    alert('Please answer all questions before submitting.');
    return;
  }

  let score = 0;
  const questions = document.querySelectorAll('.question');

  questions.forEach((question, index) => {
    const quizItem = quizData[index];

    if (quizItem.type === 'single' && isSingleAnswerCorrect(question, quizItem.correctAnswer)) {
      score++;
    } else if (quizItem.type === 'multiple' && isMultipleAnswerCorrect(question, quizItem.correctAnswers)) {
      score++;
    } else if (quizItem.type === 'freeform' && isFreeFormAnswerCorrect(question, quizItem.correctAnswer)) {
      score++;
    }
  });

  showResults(score, quizData.length);
}

/**
 * Displays the score to the user.
 * @param {number} score - The user's score.
 * @param {number} totalQuestions - The total number of questions.
 */
function showResults(score, totalQuestions) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = `You scored ${score} out of ${totalQuestions}`;
}

/**
 * Creates and returns a new score display element.
 * @return {HTMLElement} The created score display element.
 */
function createScoreDisplay(score, totalQuestions) {
  const scoreDisplay = document.createElement('div');
  scoreDisplay.textContent = `You scored ${score} out of ${totalQuestions}`;
  return scoreDisplay;
}
