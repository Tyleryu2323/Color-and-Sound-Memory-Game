/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
//Global constants

const cluePauseTime = 300; //how long to pause in between clues
const nextClueWaitTime = 300; //how long to wait before starting playback of the clue sequence

//Global Variables
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var pattern = [2, 2, 1, 1, 3, 1, 2, 4];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0; 
var numMistake = 0;


function randomPattern() {
  //generate a random pattern
  var x = [0, 0, 0, 0, 0, 0, 0, 0];
  var i;
  for (i = 0; i < 8; i ++) {
    x[i] = Math.floor(Math.random() * 5) + 1
  }
  console.log(x)
  return x
}

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  numMistake = 0;
  clueHoldTime = 1000;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  //display number of attempts left
  document.getElementById("numMistake").innerHTML = 3;
  //initialize random pattern
  pattern = randomPattern();
  console.log(pattern)
  playClueSequence();
}

function stopGame() {
  //initialize game variables
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 293.7,
  3: 329.6,
  4: 392,
  5: 440
};

function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}

function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
}

function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }

}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (pattern[guessCounter] != btn) {
    if (numMistake < 2) {
      numMistake ++;
      document.getElementById("numMistake").innerHTML = 3 - numMistake;
    } else {
      document.getElementById("numMistake").innerHTML = 0;
      loseGame();
    }
  } else {
    if (guessCounter == progress) {
      if (progress == pattern.length - 1) {
        winGame();
      } else {
        progress++;
        if (clueHoldTime > 300) {
          clueHoldTime -=300;
        }
        playClueSequence();
      }
    } else {
      guessCounter++;
    }
  }
}
