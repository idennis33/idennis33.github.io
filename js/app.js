// console.log("hello");
// console.log($);

const timer = 30; 
const elem = document.getElementById('timer'); 
const timerId = setInterval(countdown,1000); 

const countdown = () => {
    if (timeLeft === 0 ){
        clearTimeout(timerId)
        //doSomething(); 
    }else{
        elem.innerHTML = timeleft + ' seconds remaining'; 
        timeLeft --; 
    }
}


$(() => {
    //Grabbing Elements
    const $openBtn = $('#openModal');
    const $modal = $('#modal');
    const $closeBtn = $('#close');
    //Event Handlers
    const openModal = () => {
      $modal.css('display', 'block');
    }
    const closeModal = () => {
      $modal.css('display', 'none');
    }
    //Event Listeners
    $openBtn.on('click', openModal);
    $closeBtn.on('click', closeModal);
    setTimeout(openModal, 3000);
    }); 

