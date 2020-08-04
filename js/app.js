// console.log("hello");
// console.log($);

let timer = 60;
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

const startTheGame = () => {
  userChoice = prompt("Are you ready to be questioned?");
  if (userChoice === "yes" || userChoice === "Yes") {
    alert("Let's see what you know!!");
    // countDown(); 
  } else if (userChoice === "no" || userChoice === "No") {
    alert("That's okay you need more time to study.");
    endGame();
  }
};

class Question {
  constructor(question, answer) {
    this.question = question;
    this.answer = answer;
  }
}
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

const questions = [q1, q2, q3, q4, q5];
let currentQuestion = undefined;
const highestIndex = questions.length-1;
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
    $("#message").text(`Wrong! the correct answer was  ${currentQuestion.answer}`);
  }
});
$("#new-question").on("click", (e) => {
    currentQuestion = questions[currentQuestionIndex];
    question.html(`Question:  ${currentQuestion.question}`);
    if (currentQuestionIndex <= highestIndex) {
      // if it's NOT the highest index, incriment the currentImgIndex by 1
      currentQuestionIndex++;
    }else {
      endGame(); 
    }
    const countDown = () => {
  if (timer == -1) {
    clearTimeout(timerId);
    endGame(); 
  } else {
    $("#timer").text(`${timer} seconds remaining`);
    timer--;
  }
};

});

const endGame = () => {
  alert("Lets see your final score.");
  alert(`You got ${points} out of 5`);
  userChoice = window.prompt("Do you want to retry the questions.");
  if (userChoice === "yes" || userChoice === "Yes") {
    window.location.reload();
  } else if (userChoice === "no" || userChoice === "No") {
    alert("Well better luck next time.");
    $('#message').empty();
    $('#message').text('GAME OVER').appendTo('.game-screen')
    $('#timer').detach(); 
    return;
  }
};

startTheGame();
