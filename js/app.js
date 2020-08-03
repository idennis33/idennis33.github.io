// console.log("hello");
// console.log($);

let timer = 30;
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
    question1();
  } else if (userChoice === "no" || userChoice === "No" ) {
    alert("That's okay you need more time to study.");
    return; 
  }
};

const question1 = () => {
  userChoice = window.prompt(`What does Au stand for in the periodic table? a. sodium, b. mercury, c. gold, d.oxygen `);
  if (userChoice === "c" || userChoice === "C") {
    alert("That is correct");
    addPoints(); 
    question2();
  } else if (userChoice != "c" || userChoice != "C" || timer == -1) {
    alert("That is incorrect");
    question2();
  }
};

const question2 = () => {
  userChoice = window.prompt("Which popular video game franchise has released games with the subtitled Modern Warfare and Black Ops? a. Call of Duty, b. Rainbow Six, c. Battlefield, d. Super Mario Bros");
  if (userChoice === "a" || userChoice === "A") {
    alert("That is correct");
    addPoints(); 
    question3();
  } else if (userChoice != "a" || userChoice != "A" || timer == -1) {
    alert("That is incorrect");
    question3();
  }
};

const question3 = () => {
  userChoice = window.prompt(
    "What is rapper P Diddy’s real name? a. Chris Brown, b. Sean Adams, c. Micheal Jones, d. Sean Combs"
  );
  if (userChoice === "d" || userChoice === "D") {
    alert("That is correct");
    addPoints(); 
    question4();
  } else if (userChoice != "d" || userChoice != "D" || timer == -1) {
    alert("That is incorrect");
    question4();
  }
};

const question4 = () => {
  userChoice = window.prompt(
    "Which European city hosted the 1936 Summer Olympics? a. Greece, b. Berlin, c. Rome, d. Paris"
  );
  if (userChoice === "B" || userChoice === "B") {
    alert("That is correct");
    addPoints(); 
    question5();
  } else if (userChoice != "b" || userChoice != "B"|| timer == -1) {
    alert("That is incorrect");
    question5();
  }
};

const question5 = () => {
  userChoice = window.prompt(
    "In which year was the Nintendo 64 released in Europe? a.1995, b.1996, c.2000, d.1997"
  );
  if (userChoice === "d" || userChoice === "D") {
    alert("That is correct");
    addPoints(); 
    endGame(); 
  } else if (userChoice != "d" || userChoice != "D" || timer == -1) {
    alert("That is incorrect");
    endGame();
  }
};

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

const quest = () =>{
  let ids = arrayOfFunctions = [
    startTheGame(),
    question1(),
    question2(),
    question3(),
    question4(),
    question5()
  ]; 
  for (let i = 0; i < quest.length; i++){
    document.write(quest[i]); 
  }
}
document.getElementById('questions').innerHTML =quest(); 

startTheGame();
