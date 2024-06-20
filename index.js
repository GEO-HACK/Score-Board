let Team1 = document.getElementById("team1-score");
let Team2 = document.getElementById("team2-score");

function  increaseScore(teamId , increment)
{   
    console.log("Button clicked")
    let teamElement = document.getElementById(teamId);
    let currentScore = parseInt(teamElement.innerText);
    teamElement.innerText = currentScore + increment;

}   

function resetScore(){
    console.log("Button clicked")
    document.getElementById("team1-score").innerHTML=0; 
    document.getElementById("team2-score").innerHTML = 0;
}
