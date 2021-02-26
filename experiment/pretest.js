
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
      question: "Q1. What is the process of defining a method in a subclass having same name & type signature as a method in its superclass?",
      answers: {
        a: "Method overloading",
        b: "Method overriding",
        c: " Method hiding",
        d: "None of the mentioned"
      },
      correctAnswer: "b"
    },

    {
      question: "Q2. Which of these keywords can be used to prevent Method overriding?",
      answers: {
        a: " static",
        b: " constant",
        c: " protected",
        d: " final"

      },
      correctAnswer: "d"
    },

    {
      question: "Q3. Which of these is correct way of calling a constructor having no parameters, of superclass A by subclass B?",
      answers: {
        a: "super(void);",
        b: "superclass.();",
        c: "super.A();",
        d: " super();"
      },
      correctAnswer: "d"
    },
	
	{
      question: "Q4. Which of these is supported by method overriding in Java?",
      answers: {
        a: "Abstraction",
        b: "Encapsulation",
        c: "Polymorphism",
        d: "None of the mentioned"
      },
      correctAnswer: "c"
    },
	
	{
      question: "Q5. Run time polymorphism is also known as",
      answers: {
        a: "Method Overriding",
        b: "Method Overloading",
        c: "Method Rewriting",
        d: "None of these"

      },
      correctAnswer: "a"
    },
  ];




// ---------------------------- End -------------------------------








  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
