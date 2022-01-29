
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
      question: "Q1. Which method can not be override in java___?",
       

      answers: {
        a: "private",
        b: "final",
        c: "protected",
        d: "static"
      },
      correctAnswer: "d"
    },

    {
      question: "Q2. Overriding is based on_____.",

      answers: {
        a: " Methods",
        b: " Constructor overloading",
        c: " Compile time Polymorphism",
        d: " run-time Polymorphism"
      },
      correctAnswer: "d"
    },

    {
      question: "Q3. Method Overriding shows static polymorphism?",

      answers: {
        a: "False",
        b: "True"
               
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
      question: "Q5. Can we override a private method in Java?",
      
      answers: {
        a: "No",
        b: "Yes"
      
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
