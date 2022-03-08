var playerWins=0
var playerLoss=0
var playerTies=0
const body = document.querySelector('body')
const info = document.querySelector('.info')
info.classList.add('game-info')
const gameStatus = document.querySelector(".score")
const p = document.querySelector("p")
const img = document.querySelectorAll('.image')
const imgpc = document.querySelectorAll('.imagepc')
const button = document.querySelectorAll("button")

img.forEach(function(image){
    if(image.dataset.moves!=="none")
    {
    image.style.display="none"
        
     }
     else{image.style.display="block" }
    })
imgpc.forEach(function(image){
        if(image.dataset.moves!=="none")
        {
        image.style.display="none"
            
         }
         else{image.style.display="block" }
        })
    


button.forEach(function(buttons){
buttons.addEventListener("click",function (){  
    playerChoice = buttons.dataset.button
     playRound()}
)
}
)

function playRound(playerSelection, computerPlay){
let letter = ["r","p","s"];
playerSelection = playerChoice
computerPlay = letter[Math.floor(Math.random() * letter.length)]

function imgSelcPlayer(){
    img.forEach(function(image){
        if(image.dataset.moves!==playerSelection)
        {
        image.style.display="none"
            
         }
         else{image.style.display="block" }
        })}
    
function imgSelcComputer(){
imgpc.forEach(function(image){
if(image.dataset.moves!==computerPlay)
{image.style.display="none"}
else{image.style.display="block" }
                })}
        
imgSelcComputer() 
imgSelcPlayer()
p.innerText='the computer chose '+ computerPlay
    if(playerSelection == "r" && computerPlay == "p"){
        playerLoss ++;
        info.innerText= "you lose paper beats rock!"
        gameStatus;
    }

    else if (playerSelection == "p" && computerPlay == "r"){
        playerWins ++;
        info.innerText="you win paper beats rock!"
        gameStatus
    }

    else if (playerSelection == "s" && computerPlay == "r"){
        playerLoss++ ;   
        info.innerText= "you lose rock beats scissors!"
        gameStatus
    }
    
    else if (playerSelection == "s" && computerPlay == "r"){
        playerWins++;
        info.innerText= "you win rock beats scissors!"
        gameStatus
    }

    else if (playerSelection == "p" && computerPlay == "s"){
        playerLoss++;
        info.innerText= "you lose scissors beats rock!"
        gameStatus
    }

    else if (playerSelection == "r" && computerPlay == "s"){
        playerWins ++ ;
        info.innerText= "you win scissors beats rock!"
        gameStatus
    }
    
    
    else if (playerSelection == "s" && computerPlay == "p"){
        playerWins ++;
        info.innerText= "you win scissors beats rock!"
        gameStatus
    }

    else{info.innerText= "its a tie"
        playerTies++; 
        gameStatus}
// gameStatus.innerText ='your wins '+ playerWins + '\n computers wins ' + playerLoss
gameStatus.innerText = playerWins + '-' + playerLoss

    
}

