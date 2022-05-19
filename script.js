var startButton = document.getElementById('start-btn')
var timeEl = document.getElementById('time')
var count = 10
var questionsIndex = 0
var questionEl = document.getElementById('questions')
var correctAns = document.getElementById('correct')
var wrongAns = document.getElementById('wrong')

// list of all questions, choices, and answers
var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Arrays in JavaScript can be used to store ____.",
      choices: [
        "numbers and strings",
        "other arrays",
        "booleans",
        "all of the above"
      ],
      answer: "all of the above"
    },
    {
      title:
        "String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "quotes"
    },
    {
      title:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "console.log"
    }
  ];


startButton.onclick = startGame




function startGame() {
    console.log('Game Has started')
    startButton.classList.add('hide')
    document.getElementById('questionEl').classList.remove('hide');
    timer = setInterval(countDown, 1000)
    timeEl.textContent = count
    showQuestion()
    document.getElementById('correctAns').classList.add('hide')
    document.getElementById('wrongAns').classList.add('hide')

    // Hide feedback

}

function selectAnswer(event) {
    // console.log('here')
    // console.log(event.target.value)
    // console.log(questions[questionsIndex].answer)
    
    if (event.target.value == questions[questionsIndex].answer) {
        console.log('correct')

    } else {
        wrongAns.textContent = wrongAns
        console.log('incorrect')
    }

}

 function countDown() {
    count--;
    timeEl.textContent = count;

    if (count <= 0) {
        quizEnd()
        
    }
 }

function quizEnd() {
    clearInterval(timer);
}

function showQuestion() {
    var question = questions[questionsIndex];
    questionEl.textContent = question.title;
    question.choices.forEach(function(choice) {
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('value', choice)
        choiceBtn.textContent = choice;
        choiceBtn.onclick = selectAnswer;
        questionEl.appendChild(choiceBtn)

        
    })
    
}



// click start game and present questions

// 30 sencond timer starts

// show question 1 

// present the 4 answers available for each corrisponding question

// if correct answer is chosen..
  // jumbotron shows 'correct'
  // else jumbotron will show wrong answer

// next question is presented whether right or wrong answer is chosen

// once timer is up, new page pops up and reveals quiz score

//start button restarts quiz

// High score link shows the high score 

// High score is determined by correct answers and completion time
  //*correct answrs + lowest time elapesd = high score

  //penalize the time