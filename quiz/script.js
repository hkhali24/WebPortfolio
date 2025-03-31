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
 function renderQuiz(quizData) {
  const form  = document.getElementById('quiz');
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

const answer = form.answer [0];
answer.dataset.errorMsg = 'Please answer question.';


/**
 * Submits the quiz, checks all answers, calculates the score, and displays it.
 * Alerts the user if not all questions have been answered.
 */

function submitQuiz (quiz) {
  if (!quiz.checkValidity ()) {
   quiz.style.backgroundColor = 'pink';
  } else {
    quiz.style.backgroundColor = '';
  }
  }

window.addEventListener ('load', function (e) {
  const form = document.getElementById ('quiz');
  const question1 = form.question1;
  const question2 = form.question2;
  const question3 = form.question3;
  const question4 = form.question4;
  const question5 = form.question5;
  const question6 = form.question6;
  const question7 = form.question7;
  const question8 = form.question8;
  const question9 = form.question9;
  const question10 = form.question10;
  const question11 = form.question11;
  const question12 = form.question12;
  
  for (radio of form.question1) {
    radio.addEventListener('click', function(e) {
      checkquiz(question1);
    });
  }

  for (radio of form.question2) {
    radio.addEventListener('click', function(e) {
      checkquiz(question2);
    });
  }

  for (radio of form.question3) {
    radio.addEventListener('click', function(e) {
      checkquiz(question3);
    });
  }

  for (radio of form.question4) {
    radio.addEventListener('click', function(e) {
      checkquiz(question4);
    });

  }
  for (radio of form.question5) {
    radio.addEventListener('click', function(e) {
      checkquiz(question5);
    });
  }

  for (radio of form.question6) {
    radio.addEventListener('click', function(e) {
      checkquiz(question6);
    });
  }

  for (radio of form.question7) {
    radio.addEventListener('click', function(e) {
      checkquiz(question7);
    });
  }

  for (radio of form.question8) {
    radio.addEventListener('click', function(e) {
      checkquiz(question8);
    });
  }

for (radio of form.question9) {
  radio.addEventListener('click', function(e) {
    checkquiz(question9);
  });
}


question10.addEventListener('input', function(e) {
  checkquiz(question10);

});

question11.addEventListener('input', function(e) {
  checkquiz(question11);

});

question12.addEventListener('input', function(e) {
  checkquiz(question12);
});


form.addEventListener('submit', function (e) {
  checkquiz(question1);
  checkquiz(question2);
  checkquiz(question3);
  checkquiz(question4);
  checkquiz(question5);
  checkquiz(question6);
  checkquiz(question7);
  checkquiz(question8);
  checkquiz(question9);
  checkquiz(question10);
  checkquiz(question11);
  checkquiz(question12);


  if (!form.checkValidity()) {
    e.preventDefault();
    alert('Please fix errors.');
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
