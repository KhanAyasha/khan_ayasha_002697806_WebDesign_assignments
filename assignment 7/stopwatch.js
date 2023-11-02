const timeDisplay = document.getElementById('time');
const datePicker = document.getElementById('datePicker');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime = 0;
let intervalId;

async function startStopwatch() {
    startTime = Date.now() - (startTime ? startTime : 0);
    intervalId = setInterval(updateDisplay, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
}

function stopStopwatch() {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
}

function resetStopwatch() {
    clearInterval(intervalId);
    timeDisplay.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
    startTime = 0;
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const hours = Math.floor(currentTime / 3600000);
    const minutes = Math.floor((currentTime % 3600000) / 60000);
    const seconds = Math.floor((currentTime % 60000) / 1000);
    timeDisplay.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

// Initialize date picker with the current date
const currentDate = new Date();
datePicker.value = currentDate.toISOString().slice(0, 16);
