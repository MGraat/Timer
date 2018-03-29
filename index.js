const interval = setInterval(timer, 1000);
const startTime = new Date().getTime();
let currentscore = document.getElementById('currentscore');
let highscore = document.getElementById('highscore');

function timer() {
    let elapsedTime = (new Date().getTime() - startTime) / 1000; 
    currentscore.innerText = formatting(elapsedTime);
    formatting(elapsedTime);
    Cookie(elapsedTime);
   
}

function formatting (elapsedTime) {
    let seconds = Math.round(elapsedTime % 60);
    elapsedTime = Math.floor(elapsedTime /60);
    let minutes = Math.round(elapsedTime % 60);
    elapsedTime = Math.floor(elapsedTime / 60);
    let hours = Math.round(elapsedTime % 24);
    elapsedTime = Math.floor(elapsedTime / 24);
        return ((hours <10) ? "0" + hours : hours)
        + ":" + ((minutes < 10) ? "0" + minutes:minutes)
        + ":" + ((seconds < 10) ? "0" + seconds : seconds);
}

function Cookie (elapsedTime) {
   let highScoreValue = document.cookie; 
    if (elapsedTime > highScoreValue) {
         highScoreValue = elapsedTime;
         document.cookie = highScoreValue;
    } else {
        highScoreValue = highScoreValue;
        document.cookie = highScoreValue;
    }  
    
    highscore.innerText = formatting(highScoreValue);
   
    }



