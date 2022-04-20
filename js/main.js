

let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {

  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;
 

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

let progressSpans = document.querySelectorAll(".the-progress span");
let section = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let finished=false

window.onscroll = function () {

  if (window.scrollY+250 > section.offsetTop ) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }

  if (window.scrollY > statsSection.offsetTop) {
    if(!finished){
      nums.forEach((num) => startCount(num));

    }

    finished=true
    
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    console.log(888)
    if (el.textContent > +goal-1) {

      clearInterval(count);
    }
  }, 1500 / goal);
}
