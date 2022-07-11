var startButton = document.getElementById('start-btn');
var timeEl = document.getElementById('time');
var count = 30;
var questionsIndex = 0;
var questionsQuestions = document.getElementById('questionEl');
var questionEl = document.getElementById('questions');
var correctAns = document.getElementById('correct');
var wrongAns = document.getElementById('wrong');
var choiceBtn = document.createElement('button');
var prompt = document.getElementById('testOver');
var playAgain = document.getElementById('playAgain-btn');
var score = document.getElementById('highScore');
var highScoreEl = document.getElementById('high-Score');
var saveBtn = document.getElementById('save');
var initialsInput = document.getElementById('initials');
const viewHighScoreBtn = document.getElementById('viewHighScoreBtn');
const highScoresPrompt = document.getElementById('highScoresPrompt');
var output = document.getElementById('output')


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


startButton.onclick = startGame;
playAgain.onclick = restartGame;
saveBtn.onclick = saveHighScore;
viewHighScoreBtn.onclick = leaderBoard;

//---------------------Start Game Function----------------------------------
function startGame() {
    console.log('Game Has started');
    startButton.classList.add('hide');
    questionsQuestions.classList.remove('hide');
    timer = setInterval(countDown, 1000);
    timeEl.textContent = count;
    console.log(questionsIndex)
    showQuestion();
    
};

//---------------------Restart Game Function----------------------------------
function restartGame() {
  prompt.classList.add('hide');
  highScoresPrompt.classList.add('hide')
  count = 30;
  questionsIndex = 0;
  startGame();
};


//--------------------Select Answer Function----------------------------------
function selectAnswer(event) {
    if (event.target.value == questions[questionsIndex].answer) {
        correctAns.classList.remove('hide');      
        console.log('correct');
        setTimeout(function(){
          correctAns.setAttribute('class', 'hide')
        },1000)
    } else {
        // wrongAns.textContent = wrongAns
        console.log('incorrect');
        count -= 5;
        timeEl.textContent=count;
        if(count <=0){
          quizEnd();
        }
        wrongAns.classList.remove('hide');
        setTimeout(function(){
          wrongAns.setAttribute('class', 'hide')
        },1000)
    }
    questionsIndex++;
    console.log(questionsIndex);
    if(questionsIndex === questions.length){
      quizEnd();
    }else{
      showQuestion();
    }
};

//------------------Show Questions Function----------------------------------------
function showQuestion() {
  var question = questions[questionsIndex];
    questionEl.textContent = question.title;
    question.choices.forEach(function(choice) {
        var choiceBtn = document.createElement('button');
        choiceBtn.classList = 'btn btn-primary d-flex justify-content-xl-center my-2 col-4';
        choiceBtn.setAttribute('value', choice);
        choiceBtn.textContent = choice;
        choiceBtn.onclick = selectAnswer;
        questionEl.appendChild(choiceBtn);
                
    });   
};

//-----------------Timer Countdown function---------------------------------------
function countDown() {
  count--;
  timeEl.textContent = count;

  if (count <= 0) {
      quizEnd();
      
  }
};

 //----------------Quiz Ending Function --------------------------------------------
 function quizEnd() {
  clearInterval(timer);
  prompt.classList.remove('hide');
  questionEl.classList.add('hide');
  wrongAns.classList.add('hide');
  correctAns.classList.add('hide');
  questionsQuestions.classList.add('hide');
  highScoresPrompt.classList.add('hide');
  highScoreEl.textContent=count;
};

//----------------Save Score Function --------------------------------------------
function saveHighScore(){
  var initials = initialsInput.value.trim();
  if(initials !== ""){
    var highScores = JSON.parse(localStorage.getItem("highScores")) || []
    var newScore = {score:count, initials:initials}
    highScores.push(newScore)
    localStorage.setItem("highScores", JSON.stringify(highScores))
  }else {
    alert("Please enter initials!");
  } 
  leaderBoard();
}

//----------------Leaderboard Function --------------------------------------------

function leaderBoard(){
  prompt.classList.add('hide')
  highScoresPrompt.classList.remove('hide')
  questionEl.classList.add('hide');
  wrongAns.classList.add('hide');
  correctAns.classList.add('hide');
  questionsQuestions.classList.add('hide');
  startButton.classList.add('hide');
    
  var score = localStorage.getItem("highScores");

  let li = document.createElement('li');
  li.innerHTML += score;
  // output.innerHTML += score;
  output.appendChild(li);
    

  
 // hide prompt
 // Show a new element thats a leaderboard
 // make it an ordered list of scores 
 // pull highscores out of local storage
 // and loop through all scores and each one is an li that needs to attach to the ol
 // need to use the built in the arrays.sort method "append"
}



