let minutes = 25;
let seconds = 0;
let timer;
let isRunning = false;

const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimer() {
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
    }

    // Update the timer display
    minutesDisplay.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondsDisplay.textContent = seconds < 10 ? `0${seconds}` : seconds;

    // Update the page title with the timer
    document.title = ` ${minutesDisplay.textContent}:${secondsDisplay.textContent}`;

    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Time's up! Take a break.");
        resetTimer();
    }
}

function startPauseTimer() {
    if (!isRunning) {
        timer = setInterval(updateTimer, 1000);
        startPauseBtn.textContent = 'Pause';
        isRunning = true;
    } else {
        clearInterval(timer);
        startPauseBtn.textContent = 'Resume';
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    minutesDisplay.textContent = '25';
    secondsDisplay.textContent = '00';
    document.title = 'Pomodoro Timer'; // Reset the page title
    startPauseBtn.textContent = 'Start';
    isRunning = false;
}

startPauseBtn.addEventListener('click', startPauseTimer);
resetBtn.addEventListener('click', resetTimer);
