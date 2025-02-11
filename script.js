let userScore = 0; //User's score by defalut
let computerScore = 0; // Computer's score by default

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    // rock, paper, scissors
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    // console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#4C0033";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("You win the Game");
        msg.innerText = `You win!. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;
         // console.log("You lose the Game");
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    // console.log("User choose =", userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    // console.log("Computer choose =", compChoice);

    if(userChoice === compChoice) {
        //Draw
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = compChoice === "scissors" ? false : true ;
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    // console.log(choice); 
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});