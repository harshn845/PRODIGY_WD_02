const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const laps = document.getElementById('laps');

let stopwatch = null;
let lapTimes = [];
let time = 0;

function startStopwatch() {
  if (stopwatch === null) {
    stopwatch = setInterval(() => {
      time++;
      display.textContent = formatTime(time);
    }, 10);
    startBtn.textContent = 'Pause';
  } else {
    clearInterval(stopwatch);
    stopwatch = null;
    startBtn.textContent = 'Start';
  }
}

function resetStopwatch() {
  clearInterval(stopwatch);
  stopwatch = null;
  time = 0;
  lapTimes = [];
  display.textContent = '00:00:00';
  laps.innerHTML = '';
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function addLap() {
  lapTimes.push(time);
  laps.innerHTML += `<li>${formatTime(time)}</li>`;
}

startBtn.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);