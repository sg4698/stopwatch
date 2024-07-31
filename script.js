let startTime;
let updatedTime;
let difference;
let interval;
let running = false;

const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);

function start() {
  if (!running) {
    startTime = new Date().getTime() - (difference || 0);
    interval = setInterval(update, 10);
    running = true;
  }
}

function stop() {
  clearInterval(interval);
  running = false;
}

function reset() {
  clearInterval(interval);
  running = false;
  display.innerHTML = '00:00:00';
  difference = 0;
}

function update() {
  updatedTime = new Date().getTime();
  difference = updatedTime - startTime;

  let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((difference % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  display.innerHTML = hours + ':' + minutes + ':' + seconds;
}
