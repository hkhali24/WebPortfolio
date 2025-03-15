document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit-btn");
  const quizForm = document.getElementById("quiz");
  const resultDiv = document.getElementById("result");

  // Function to evaluate the quiz
  function evaluateQuiz(event) {
    event.preventDefault(); // Prevent form submission
    
    let score = 0;
    const totalQuestions = 5; // Total number of questions in the quiz
    let correctAnswers = 0;

    // Evaluate single-answer questions (radio buttons)
    const singleAnswerQuestions = quizForm.querySelectorAll('.single-answer');
    singleAnswerQuestions.forEach(question => {
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        if (selectedAnswer.getAttribute('data-correct') === 'true') {
          correctAnswers++;
        }
      }
    });

    // Evaluate multiple-answer questions (checkboxes)
    const multipleAnswerQuestions = quizForm.querySelectorAll('.multiple-answer');
    multipleAnswerQuestions.forEach(question => {
      const selectedAnswers = question.querySelectorAll('input[type="checkbox"]:checked');
      selectedAnswers.forEach(selectedAnswer => {
        if (selectedAnswer.getAttribute('data-correct') === 'true') {
          correctAnswers++;
        }
      });
    });

    // Evaluate free-form questions (text inputs)
    const freeFormQuestions = quizForm.querySelectorAll('.free-form');
    freeFormQuestions.forEach(question => {
      const userAnswer = question.querySelector('input[type="text"]').value.trim();
      const correctAnswer = question.querySelector('input[type="text"]').getAttribute('data-correct-answers');
      if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        correctAnswers++;
      }
    });

    // Calculate the score
    score = (correctAnswers / totalQuestions) * 100;

    // Display the result
    resultDiv.innerHTML = `<h2>Your Score: ${score}%</h2>`;

    // Provide feedback on correct answers
    singleAnswerQuestions.forEach(question => {
      const selectedAnswer = question.querySelector('input[type="radio"]:checked');
      if (selectedAnswer) {
        const correctAnswer = question.querySelector('input[data-correct="true"]');
        if (selectedAnswer !== correctAnswer) {
          selectedAnswer.parentElement.style.color = "red"; // Wrong answer
        } else {
          selectedAnswer.parentElement.style.color = "green"; // Correct answer
        }
      }
    });

    multipleAnswerQuestions.forEach(question => {
      const selectedAnswers = question.querySelectorAll('input[type="checkbox"]:checked');
      selectedAnswers.forEach(selectedAnswer => {
        const correctAnswer = question.querySelector(`input[value="${selectedAnswer.value}"][data-correct="true"]`);
        if (selectedAnswer === correctAnswer) {
          selectedAnswer.parentElement.style.color = "green"; // Correct answer
        } else {
          selectedAnswer.parentElement.style.color = "red"; // Wrong answer
        }
      });
    });

    freeFormQuestions.forEach(question => {
      const userAnswer = question.querySelector('input[type="text"]').value.trim();
      const correctAnswer = question.querySelector('input[type="text"]').getAttribute('data-correct-answers');
      if (userAnswer.toLowerCase() !== correctAnswer.toLowerCase()) {
        question.querySelector('input[type="text"]').style.borderColor = "red"; // Incorrect answer
      } else {
        question.querySelector('input[type="text"]').style.borderColor = "green"; // Correct answer
      }
    });
  }

  // Add event listener to the submit button
  submitButton.addEventListener("click", evaluateQuiz);
});
