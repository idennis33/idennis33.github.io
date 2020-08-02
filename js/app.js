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
let userChoice = "";
const startTheGame = () => {
  let userChoice = window.prompt("Are you ready to be questioned?");
  if (userChoice = "yes" || "yes".toUpperCase()) {
    alert("Let see how much you know");
    question1();
  } else if (userChoice = "no" || "no".toUpperCase()) {
    alert("That's okay you need more time to study.");
  }
};

const question1 = () => {
  window.prompt(
    "What does Au stand for in the periodic table? a. sodium, b. mercury, c. gold, d.oxygen"
  );
  if (userChoice === "c" || "c".toUpperCase()) {
    alert("That is correct");
    question2();
  } else if (userChoice != "c" || "c".toUpperCase() || timer == -1) {
    alert("That is incorrect");
    question2();
  }
};

const question2 = () => {
  window.prompt(
    "Which popular video game franchise has released games with the subtitled Modern Warfare and Black Ops? a. Call of Duty, b. Rainbow Six, c. Battlefield, d. Super Mario Bros"
  );
  if (userChoice === "a" || "a".toUpperCase()) {
    alert("That is correct");
  }
};

startTheGame();
