var playerWins = 0
var playerLoss = 0
var playerTies = 0
var userwin=false
const body = document.querySelector('body')
const info = document.querySelector('.info')
info.classList.add('game-info')
const gameStatus = document.querySelector(".score")
const p = document.querySelector("p")
const img = document.querySelectorAll('.image')
const imgpc = document.querySelectorAll('.imagepc')
const button = document.querySelectorAll("button")
// this gets an image according to the dataset (display none shows nothing while block shows the image)
img.forEach(function (image) {
    if (image.dataset.moves !== "none") {
        image.style.display = "none"

    }
    else { image.style.display = "block" }
})
imgpc.forEach(function (image) {
    if (image.dataset.moves !== "none") {
        image.style.display = "none"

    }
    else { image.style.display = "block" }
})



button.forEach(function (buttons) {
    buttons.addEventListener("click", function () {
        playerChoice = buttons.dataset.button
        if (playerLoss <5 && playerWins < 5) {
        const audio = document.querySelector('audio')
        audio.currentTime = 0;
        audio.play()
            playRound()
        }
        else if(playerLoss < 5 ){
        info.textContent = "You Win"
        }
        else{info.textContent = "You Lose"}

    })
})

function playRound(playerSelection, computerPlay) {
    let letter = ["r", "p", "s"];
    playerSelection = playerChoice
    computerPlay = letter[Math.floor(Math.random() * letter.length)]

    function imgSelcPlayer() {
        img.forEach(function (image) {
            if (image.dataset.moves !== playerSelection) {
                image.style.display = "none"

            }
            else { image.style.display = "block" }
        })
    }

    function imgSelcComputer() {
        imgpc.forEach(function (image) {
            if (image.dataset.moves !== computerPlay) { image.style.display = "none" }
            else { image.style.display = "block" }
        })
    }

    imgSelcComputer()
    imgSelcPlayer()
    if (playerSelection == "r" && computerPlay == "p") {
        playerLoss++;
        info.textContent = "You lose paper beats rock!"
        gameStatus;
    }

    else if (playerSelection == "p" && computerPlay == "r") {
        playerWins++;
        info.textContent = "You win paper beats rock!"
        gameStatus
    }

    else if (playerSelection == "s" && computerPlay == "r") {
        playerLoss++;
        info.textContent = "You lose rock beats scissors!"
        gameStatus
    }

    else if (playerSelection == "s" && computerPlay == "r") {
        playerWins++;
        info.textContent = "You win rock beats scissors!"
        gameStatus
    }

    else if (playerSelection == "p" && computerPlay == "s") {
        playerLoss++;
        info.textContent = "You lose scissors beats rock!"
        gameStatus
    }

    else if (playerSelection == "r" && computerPlay == "s") {
        playerWins++;
        info.textContent = "You win scissors beats rock!"
        gameStatus
    }


    else if (playerSelection == "s" && computerPlay == "p") {
        playerWins++;
        info.textContent = "You win scissors beats rock!"
        gameStatus
    }

    else {
        info.textContent = "Its a tie "
        playerTies++;
        gameStatus
    }
    gameStatus.textContent = playerWins + '-' + playerLoss


}

