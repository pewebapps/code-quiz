// fetch high scores
const highScores = JSON.parse(localStorage.getItem("high-scores"));

const compareScores = (a, b) => {
    const scoreA = a.score;
    const scoreB = b.score;

    if (scoreA > scoreB) {
        return -1;
    } else if (scoreA < scoreB) {
        return 1;
    } else {
        return 0;
    }
}

// sort high scores
highScores.sort(compareScores);

// display high scores in ordered list
console.log(highScores);
const highScoreList = document.getElementById("highscores");
for (let i = 0; i < highScores.length; i++) {
    const highScore = highScores[i];
    const listEl = document.createElement("li")
    listEl.textContent = `${highScore.initials} - ${highScore.score}`;
    highScoreList.append(listEl);
}