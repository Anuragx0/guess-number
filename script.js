
const compGuess = document.querySelector("#comp");
const userGuess = document.querySelector("#user");
const atmptCount = document.querySelector("#atmptCount");
const prvAtmpt = document.querySelector("#prvAtmpt");
const newGame = document.querySelector("#newGame");
const resetGame = document.querySelector("#resetGame");
const container_1 = document.querySelector("#main");
const inputContainer = document.querySelector("#input-container")
const winingMsg = document.querySelector("#winingMsg")
const losingMsg = document.querySelector("#loseMsg")
let previousGuess = [];

// genrate random number...

const rndm = Math.floor(Math.random() * 10);


let i = 5

userGuess.addEventListener("click", (el) => {
    const input = parseInt(document.querySelector(".input-box").value);

    if (isNaN(input)) {
        compGuess.innerText = "Computer Says: [ Don't be oversmart Type a NUmber   ]"
    } else {
        if (input < rndm && input >= 0) {
            compGuess.innerText = "Computer Says: [ Little Low :(   ]"
        } else if (input < 0) {
            compGuess.innerText = "Computer Says: [ Toooo Low :(   ]"
        } else if (input > rndm && input <= 9) {
            compGuess.innerText = "Computer Says: [ Little Above :(    ]"
        } else if (input > 9) {
            compGuess.innerText = "Computer Says: [ Toooo Above :(   ]"
        } else if (input === rndm) {
            compGuess.innerText = "Computer Says: [ That's Right :)   ]"
            inputContainer.classList.toggle("hide")
            winingMsg.classList.toggle("hide")
        }
    }
    previousGuess.push(input)
    console.log(previousGuess)
    prvAtmpt.innerText = `Previous Attempt : ${previousGuess}`

    i--;
    if (i > 0 & i <= 5) {
        atmptCount.innerText = ` Remaining Attempts : ${i}`
    }
    if (i <= 0) {
        compGuess.innerText = "Computer Says: [ Attempt Over (Game Over) ]";
        losingMsg.classList.toggle("hide")
        inputContainer.classList.toggle("hide")

    }

})

newGame.addEventListener("click", (el) => {
    location.reload();
    // console.log(el)
})

resetGame.addEventListener("click", (el) => {
    i = 5

    losingMsg.classList.toggle("hide")
    inputContainer.classList.toggle("hide")


    previousGuess.splice(0, previousGuess.length)
    prvAtmpt.innerText = `Previous Attempt : ${previousGuess}`

    if (i > 0 & i <= 5) {
        atmptCount.innerText = ` Remaining Attempts : ${i}`
    }
})
