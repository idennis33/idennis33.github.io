// console.log("hello");
// console.log($);

let timer = 30;
const elem = document.getElementById("timer");

const countDown = () => {
  if (timer ==-1) {
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
  setTimeout(openModal, 3000);
});


