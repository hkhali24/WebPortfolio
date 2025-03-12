/**
 * Initializes the quiz when the DOM content is fully loaded. It sets up the quiz container and the submit button functionality.
 */
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

 // ... Code to render the quiz ...
 function renderQuiz(quizData, container) {
  const container= document.getElementById ('quiz-container');
  }

/**
 * Checks if all quiz questions have been answered.
 * @return {Boolean} True if all questions are answered, false otherwise.
 */

 // ... Code to check if all questions are answered ...
function areAllQuestionsAnswered() {
  return false;
}

/**
 * Checks if the answer provided for a single-answer question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the answer is correct, false otherwise.
 */

// ... Code to check single answer correctness ...
function isSingleAnswerCorrect(question) {
  return false;
}

/**
 * Checks if the answers provided for a multiple-answer question are correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if all correct answers are selected, false otherwise.
 */

  // ... Code to check multiple answer correctness ...
function isMultipleAnswerCorrect(question) {
  return false;
}

/**
 * Checks if the answer provided for a free-form question is correct.
 * @param {HTMLElement} question - The DOM element representing the question.
 * @return {Boolean} True if the free-form answer is correct, false otherwise.
 */

// ... Code to check free-form answer correctness ...
function isFreeFormAnswerCorrect(question) {
  return false;
}

/**
 * Submits the quiz, checks all answers, calculates the score, and displays it.
 * Alerts the user if not all questions have been answered.
 */

function checkValidity (field) {
  if (!field.checkValidity ()) {
    field.style.backgroundColor = 'pink';
  }
  else {
    field.style.backgroundColor = ('');
  }
}

window.addEventListener ('load', function (e) {
  const form = document.getElementById ('quiz-form');
  const question1 = form.querySelector.question1
  const question2 = form.querySelector.question2
  const question3 = form.querySelector.question3
  const question4 = form.querySelector.question4
  const question5 = form.querySelector.question5
  const question6 = form.querySelector.question6
  const question7 = form.querySelector.question7
  const question8 = form.querySelector.question8
  const question9 = form.querySelector.question9
  const question10 = form.querySelector.question10
  const question11 = form.querySelector.question11
  const question12 = form.querySelector.question12
  


  question1.addEventListener ('click', function (e) {
    checkValidity (question1);

  });

  question2.addEventListener ('click', function (e) {
      checkValidity (question2);

 });

 question3.addEventListener ('click', function (e) {
        checkValidity (question3);

});

question4.addEventListener ('click', function (e) {
  checkValidity (question4);

});

question5.addEventListener ('click', function (e) {
  checkValidity (question5);

});

question6.addEventListener ('click', function (e) {
  checkValidity (question);

});

question7.addEventListener ('click', function (e) {
  checkValidity (question7);

});

question8.addEventListener ('click', function (e) {
  checkValidity (question8);

});

question9.addEventListener ('click', function (e) {
  checkValidity (question9);

});

question10.addEventListener ('click', function (e) {
  checkValidity (question10);

});

question11.addEventListener ('click', function (e) {
  checkValidity (question11);

});

question12.addEventListener ('click', function (e) {
  checkValidity (question12);

});




form.addEventListener ("submit", function (e) {
  checkValidity (question1);
  checkValidity (question2);
  checkValidity (question3);
  checkValidity (question4);
  checkValidity (question5);
  checkValidity (question6);
  checkValidity (question7);
  checkValidity (question8);
  checkValidity (question9);
  checkValidity (question10);
  checkValidity (question11);
  checkValidity (question12);



if (!form.checkValidity ()) {
  e.preventDefault ();
  alert ('Please fix errors.')
}

});

});


// ... Code to submit the quiz and display the score ...

/**
 * Creates and returns a new score display element.
 * @return {HTMLElement} The created score display element.
 */
function createScoreDisplay() {
  // ... Code to create a score display element ...
}
