// console.log("hello");
// console.log($);
//// This is my timer that runs down from 75 seconds.
let timer = 75;
const elem = document.getElementById("timer");
const countDown = () => {
  if (timer == -1) {
    clearTimeout(timerId);
    endGame();
  } else {
    $("#timer").text(`${timer} seconds remaining`);
    timer--;
  }
};
let timerId = setInterval(countDown, 1000);
////  This adds my points to see the score after each session of the questions ran.
let points = 0;
const scr = document.getElementById("scoreboard");
const addPoints = () => {
  let score = points++;
};
$(() => {
  //Grabbing Elements
  const $openBtn = $("#openModal");
  const $modal = $("#modal");
  const $closeBtn = $("#close");
  //Event Handlers
  const openModal = () => {
    $modal.css("display", "block");
  };
  const closeModal = () => {
    $modal.css("display", "none");
  };
  //Event Listeners
  $openBtn.on("click", openModal);
  $closeBtn.on("click", closeModal);
});
// Start Game Functions that runs after user choice is yes. If userchoice is no an alert is invoked and endGame function is ran
const startTheGame = () => {
  userChoice = prompt("Are you ready to be questioned?");
  if (userChoice === "yes" || userChoice === "Yes") {
    alert("Let's see what you know!!");
    currentQuestion = questions[currentQuestionIndex];
  $('#question').html(`Question:  ${currentQuestion.question}`);
    // currentQuestionIndex++;
    countDown();
  } else if (userChoice === "no" || userChoice === "No") {
    alert("That's okay you need more time to study.");
    endGame();
  }
};
//// Class of question which has two parameters of question and answer
class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
//// My instances of the Question class which has 5 quesitons.
const q1 = new Question(
  "What does Au stand for in the periodic table? 1-sodium  2-mercury  3-gold  4-oxygen",
  "3"
);
const q2 = new Question(
  "Which popular video game franchise has released games with the subtitled Modern Warfare and Black Ops? 1-Call of Duty  2-Rainbow Six   3-Battlefield 4-Super Mario Bros",
  "1"
);
const q3 = new Question(
  "What is rapper P Diddy’s real name? 1-Chris Brown 2-Sean Adams  3-Mike Jones  4-Sean Combs",
  "4"
);
const q4 = new Question(
  "In which year was the Nintendo 64 released in Europe? 1-1995, 2-1996, 3-1997, 4-2000",
  "3"
);
const q5 = new Question(
  "Which European city hosted the 1936 Summer Olympics?  1-Berlin  2-Greece 3-Rome  4-Paris",
  "1"
);
/// I have an array of the quesitons instances called [questions]
const questions = [q1, q2, q3, q4, q5,q5];
let currentQuestion = undefined;
let highestIndex = questions.length-1;
let currentQuestionIndex = 0;
// DOM targets
const question = $("#question");
$("#submit").on("click", (e) => {
  const answer = $("#answer").val();
  // console.log(answer)
  if (answer === currentQuestion.answer) {
    $("#message").text("Correct answer!");
    addPoints();
  } else if (answer !== currentQuestion.answer) {
    $("#message").text( `Wrong! the correct answer was  ${currentQuestion.answer}`);
    
  }
});
// My two on-click functions for the new questions button and submit button.
$("#new-question").on("click", (e) => {
  // $("#question").empty();
  console.log(currentQuestion)
  currentQuestion = questions[currentQuestionIndex];
  $('#question').text(`Question: ${currentQuestion.question}`);
  console.log(highestIndex)
  console.log(currentQuestionIndex)
  if (currentQuestionIndex < highestIndex) {
    console.log(highestIndex)
    console.log(currentQuestionIndex)
    currentQuestionIndex++;
    }else if(currentQuestionIndex === highestIndex){
      endGame();
  }
});
//// Endgame function that prompts user if they want to repeat the quesitons again if not GAME OVER!!!
const endGame = () => {
  alert("Lets see your final score.");
  alert(`You got ${points} out of 5`);
  userChoice = window.prompt("Do you want to retry the questions.");
  if (userChoice === "yes" || userChoice === "Yes") {
    window.location.reload();
  } else if (userChoice === "no" || userChoice === "No") {
    alert("Well better luck next time.");
    $("#message").empty();
    $("#message").text("GAME OVER").appendTo(".game-screen");
    $("#timer").detach();
    return;
  }
};
 //// On click
$("#startGame").on("click", (e) => {
  startTheGame();
});