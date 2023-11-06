// Iteration 8: Making scoreboard functional
const scoreBox =document.getElementById("score-board")
var urlQuery =new URLSearchParams(window.location.search)
var score =urlQuery.get("score")
scoreBox.innerHTML=score;
const playAgainButton = document.getElementById("play-again-button")
playAgainButton.onclick=()=>{
location.href="game.html"
}