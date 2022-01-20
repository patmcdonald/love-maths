// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to these

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button")

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this. getAttribute("data-type") === "submit") {
                checkAnswer()
            } else {
                let gameType = this.getAttribute("data-type")
                runGame(gameType)
            }
        })
    }

    runGame("addition")
})

/**
 * Main game "loop" is called when script is initially loaded
 * and after user input has been processed 
 */
function runGame(gameType) {

// creates 2 random numbers 1 - 25
let num1 = Math.floor(Math.random() * 24) + 1
let num2 = Math.floor(Math.random() * 24) + 1

if (gameType === "addition") {
    displayAdditionQuestion(num1, num2)
} else {
    alert(`Unknown game type: ${gameType}`)
    throw `Unknown game type: ${gameType}. Aborting!`
}

}
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value)
    let calculatedAnswer = calculateCorrectAnswer()
    let isCorrect = userAnswer === calculatedAnswer[0]

    if (isCorrect) {
        alert("Hey! You got it right! :D")
        incrementScore()
    } else {
        alert(`Ach...you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer()
    }

    runGame(calculatedAnswer[1])
}

/**
 * Gets operands (numbers) and operator (+, -, *, /).
 * from the DOM and returns correct answer
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText)
    let operand2 = parseInt(document.getElementById('operand2').innerText)
    let operator = document.getElementById('operator').innerText

    if (operator === "+") {
        return[operand1 + operand2, "addition"]
    } else {
        alert(`Unimplemented operator ${operator}`)
        throw `Unimplemented operator ${operator}. Abort`
    }

}
/**
 * gets the current score from the DOM and increment it by 1
 * incremented score is written back to the DOM
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText)
    document.getElementById("score").innerText = ++oldScore

}
/**
 * gets the current tally from the DOM and increments it by 1
 * incremented wrong answers are written back to the DOM
 */
function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText)
    document.getElementById("incorrect").innerText = ++oldScore


}


function displayAdditionQuestion(operand1, operand2) {
    document.getElementById(`operand1`).textContent = operand1
    document.getElementById(`operand2`).textContent = operand2
    document.getElementById(`operator`).textContent = "+"

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}