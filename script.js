
const compGuess = document.querySelector("#comp");
const userGuess = document.querySelector("#user");
const atmptCount = document.querySelector("#atmptCount");
const prvAtmpt = document.querySelector("#prvAtmpt");
const newGame = document.querySelector("#newGame");
const resetGame = document.querySelector("#resetGame");
const container_1 = document.querySelector("#main");
const container_2 = document.querySelector("#Winning");

// console.log(`${input} \n ${compGuess} \n ${userGuess} \n ${atmptCount} \n ${prvAtmpt} \n  ${newGame} \n ${resetGame} \n ${container_1} \n ${container_2} \n `)

// genrate random number...

const rndm = Math.floor(Math.random()*10);
// console.log(rndm)

userGuess.addEventListener("click" , (el) => {
    const input = parseInt(document.querySelector(".input-box").value);
    console.log(input);
    console.log(rndm)
    if( isNaN(input)){
        compGuess.innerText = "Computer Says: [ Don't be oversmart Type a NUmber   ]"
    }else{
        if(input < rndm && input >= 0 ){
            compGuess.innerText = "Computer Says: [ Little Low :(   ]"
        }else if(input < 0){
            compGuess.innerText = "Computer Says: [ Toooo Low :(   ]"
        }else if (input > rndm && input <= 9){
            compGuess.innerText = "Computer Says: [ Little Above :(    ]"
        }else if(input > 9){
            compGuess.innerText = "Computer Says: [ Toooo Above :(   ]"
        }else if(input === rndm ){
            compGuess.innerText = "Computer Says: [ That's Right :)   ]"
        }
    }
    

})