const MAX_TIME = 60;

let secondsRemaining = 0;

// event listener for start button
const startButton = document.getElementById("start");
startButton.addEventListener("click", function() {
    // get start screen div by id
    // add class hide to remove it being displayed
    document.getElementById("start-screen").classList.add("hide");

    // get questions section div by id and remove class hide
    document.getElementById("questions").classList.remove("hide");

    // reset timer 
    resetTimer();

    // start count down timer
    startCountdownTimer()
})

const resetTimer = () => {
    secondsRemaining = MAX_TIME;
    setCountdownTimer()
}

const setCountdownTimer = () => {
    document.getElementById("time").textContent = `${secondsRemaining}`;
}

const startCountdownTimer = () => {
    const timer = setInterval(function() {
        secondsRemaining--;
        setCountdownTimer();

    }, 1000)
}