
// Don't touch the below code

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  

// Don't touch the above code




// Write your MCQs here --- Start --- --------------------

  const myQuestions = [
    {
      question: "Q1. What is the output of the following program?",
       

      answers: {
        a: " Derived class",
        b: " Test class",
        c: "Runtime error",
        d: "Compilation error"
      },
      correctAnswer: "d"
    },

    {
      question: "Q2. What is the output of the following program?",

      answers: {
        a: " Test class",
        b: " Compilation error due to line xyz",
        c: " Derived class",
        d: " Compilation error due to access modifier"
      },
      correctAnswer: "d"
    },

    {
      question: "Q3. What is the output of the following program?",

      answers: {
        a: "Test class Derived class",
        b: " Derived class Test class",
        c: " Compilation error",
        d: " Runtime error"        
      },
      correctAnswer: "a"
    },
	
	{
      question: "Q4. Which polymorphism concept is applied to inheritance relationship in java programming?",
      answers: {
        a: " Method overloading",
        b: " Constructor overloading",
        c: "  Method overriding",
        d: " None "        
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. In below java code, whose “Car” will be called?",
      
      answers: {
        a: "Father’s Car",
        b: "Son’s Car",
        c: "There is an ambiguity, so no one Car",
        d: "Compiler Error"
      },
      correctAnswer: "b"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
