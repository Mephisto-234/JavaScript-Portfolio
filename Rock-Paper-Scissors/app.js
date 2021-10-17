let userScore = 0;
let opponentScore = 0;
const userScore_span = document.getElementById("user-score");
const opponentScore_span = document.getElementById("opponent-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getOpponentChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, opponentChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    const userChoice_div = document.getElementById(userChoice);
    opponentScore_span.innerHTML = opponentScore;
    result_p.innerHTML = `${convert(userChoice)} beats ${convert(opponentChoice)}, You win!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, opponentChoice) {
    opponentScore++;
    opponentScore_span.innerHTML = opponentScore;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${convert(opponentChoice)} beats ${convert(userChoice)}, You lose...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, opponentChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = ` - It's a Draw - `;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
    const opponentChoice = getOpponentChoice();
    switch (userChoice + opponentChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, opponentChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, opponentChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, opponentChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () =>  game("r"));

    paper_div.addEventListener('click', () =>  game("p"));

    scissors_div.addEventListener('click', () =>  game("s"));
}

main();
