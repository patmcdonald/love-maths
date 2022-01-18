// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to these

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this. getAttribute("data-type") === "submit") {
                alert("You clicked Submit!")
            } else {
                let gameType = this.getAttribute("data-type")
                alert(`You clicked ${gameType}`)

            }
                
        })
    }
})

/**
 * Main game loop is called when script is initially loaded
 * and after user input has been processed 
 */
function runGame() {

// creates 2 random numbers 1 - 25
let num1 = Math.floor(Math.random() * 24) + 1
let num2 = Math.floor(Math.random() * 24) + 1

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}


function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}