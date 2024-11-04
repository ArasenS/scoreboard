let timerInterval;
let seconds = 0;

function startTimer() {
    // Clear any existing timer to avoid multiple intervals
    clearInterval(timerInterval);
    
    // Start a new interval to increment time every second
    timerInterval = setInterval(() => {
        seconds++;

        // Calculate minutes and remaining seconds
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;

        // Format the time as 00:00
        const formattedTime = 
            String(mins).padStart(2, '0') + ":" + 
            String(secs).padStart(2, '0');

        // Display the formatted time
        document.getElementById("timer").textContent = formattedTime;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

let count = 0
let foulCount = 0
let countG = 0
let foulGCount = 0
let counters = document.getElementById("counters")
let foulsCounter = document.getElementById("foulsCounter")
let guestCounters = document.getElementById("guestCounters")
let foulsGCounter = document.getElementById("foulsGCounter")

function addOne() {
    count += 1
    counters.textContent = count
}

function addTwo() {
    count += 2
    counters.textContent = count
}

function addThree() {
    count += 3
    counters.textContent = count
}

function addFoul() {
    foulCount += 1
    foulsCounter.textContent = foulCount
}

function addGOne() {
    countG += 1
    guestCounters.textContent = countG
}

function addGTwo() {
    countG += 2
    guestCounters.textContent = countG
}

function addGThree() {
    countG += 3
    guestCounters.textContent = countG
}

function addGFoul() {
    foulGCount += 1
    foulsGCounter.textContent = foulGCount
}