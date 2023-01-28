const MAX_TIME = 60;

let secondsRemaining = 0;
let currentQuestionIndex = 0;
let currentScore = 0;

const addQuestionButtons = () => {
    const choiceDiv = document.getElementById("choices");
    const totalChoices = questions[0].answers.length
    for (let i = 0; i < totalChoices; i++) {
        const button = document.createElement("button");
        button.id = `answer-${i}`;
        button.setAttribute("data-state", `${i}`);
        button.classList.add("answer-button");
        choiceDiv.append(button);
        console.log("Append: ", i);
    }
}

// add question buttons at the start
addQuestionButtons();

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

    // show first question
    showNextQuestion();
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

const showNextQuestion = () => {
    const nextQuestion = questions[currentQuestionIndex];
    const questionTitle = document.getElementById("question-title");
    questionTitle.textContent = nextQuestion.question;
    const totalChoices = questions[currentQuestionIndex].answers.length
    for (let i = 0; i < totalChoices; i++) {
        const button = document.getElementById(`answer-${i}`);
        button.innerHTML = nextQuestion.answers[i];
    }
}

const choicesDiv = document.getElementById("choices");
choicesDiv.addEventListener("click", function(event) {
    const element = event.target;
    if (element.matches(".answer-button")) {
    
        // turn data into int for comparison
        const state = parseInt(element.getAttribute("data-state"));
        const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex
        
        // correct answer
        if (state === correctAnswerIndex) {
            currentScore += 1;
        } else {
            secondsRemaining -= 10;
        }
    }
})