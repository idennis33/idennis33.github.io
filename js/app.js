// console.log("hello");
// console.log($);

let timer = 150;
const elem = document.getElementById("timer");

const countDown = () => {
  if (timer == -1) {
    clearTimeout(timerId);
  } else {
    elem.innerHTML = timer + " seconds remaining";
    timer--;
  }
};

let timerId = setInterval(countDown, 1000);

let points = 0; 
const scr = document.getElementById("scoreboard"); 
const addPoints = () => {
  let score =  points++
}



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
  if (userChoice === "yes" || userChoice === "Yes" ) {
    alert("Let's see what you know!!")
  } else if (userChoice === "no" || userChoice === "No" ) {
    alert("That's okay you need more time to study.");
    endGame(); 
  }
};

class Question{
  constructor(question, answer,countDown){
    this.question = question
    this.answer= answer
  }
}
const q1 = new Question(
  'What does Au stand for in the periodic table? /n 1-sodium /n 2-mercury /n 3-gold /n 4-oxygen',
  '3'
)
const q2 = new Question(
  'Which popular video game franchise has released games with the subtitled Modern Warfare and Black Ops? /n 1-Call of Duty /n 2-Rainbow Six /n  3-Battlefield /n 4-Super Mario Bros',
  '1'
)
const q3 = new Question(
  'What is rapper P Diddy’s real name? /n 1-Chris Brown /n 2-Sean Adams /n 3-Micheal Jones /n 4-Sean Combs',
  '4'
)
const q4 = new Question(
  'In which year was the Nintendo 64 released in Europe? /n 1-1995 /n 2-1996 /n 3-1997 /n 4-2000',
  '3'
)
const q5 = new Question(
  'Which European city hosted the 1936 Summer Olympics? /n 1-Berlin /n 2-Greece /n 3-Rome /n 4-Paris',
  '1'
)
const questions = [q1, q2, q3,q4,q5]
currentQuestion = undefined
// DOM targets
const question = $('#question')
$('#submit').on('click', (e)=>{
  const answer = $('#answer').val()
  console.log(answer)
  if(answer===currentQuestion.answer){
      $('#messsage').text('Correct answer!')
  } else {
      $('#messsage').text(`Wrong! the correct answer was ${currentQuestion.answer}`)
  }
})
$('#new-question').on('click', (e)=>{
  const idx = Math.floor(Math.random()*questions.length)
  currentQuestion = questions[idx]
  question.html(`Question: ${currentQuestion.question}`)
})

const endGame = () => {
  alert("Lets see your final score.");
  alert(`You got ${points} out of 5`);
  userChoice = window.prompt("Do you want to retry the questions.");
  if (userChoice === "yes" || userChoice === "Yes") {
    startTheGame();
  } else if (userChoice === "no" || userChoice === "No") {
    alert("Well better luck next time.");
    return;
  }
};

startTheGame();
