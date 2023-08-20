var compPick = randomNumber(1, 3);
console.log(compPick);
var userPick;
var score = 0;
var Cscore = 0;
var isLimit3 = false;
var isLimit5 = false;
var isLimit10 = false;
var vWinner = "C";
updatecompPickText()
  
function updatecompPickText(){
  if(compPick == 1){
    setText("compPickText", "Computer Picks Ninja!");
  } else if(compPick == 2){
    setText("compPickText", "Computer Picks Bear!");
  } else{
    setText("compPickText", "Computer Picks Hunter!");
  }
}

function OutComeActions (vWinner) {
  if (vWinner=="C") {
    setText ("outcomeText", "Computer Won");
    score = score;
    setText ("yourscore", "Your Score: " + score);
    Cscore = Cscore + 1;
    setText ("compscore", "Computer's Score: " + Cscore);
  } else {
    if (vWinner=="Y") {
      setText ("outcomeText", "You Won");
      score = score + 1;
      setText ("yourscore", "Your Score: " + score);
      Cscore = Cscore;
      setText ("compscore", "Computer's Score: " + Cscore);
    } else {
      setText ("outcomeText", "Tie");
      score = score;
      setText ("yourscore", "Your Score: " + score);
      Cscore = Cscore;
      setText ("compscore", "Computer's Score: " + Cscore);
    }
  }
}

function decideOutcome(){
  if(userPick == 1){
    if(compPick == 1){
      OutComeActions('T');
    }else if(compPick == 2){
      OutComeActions ('C');
    }else{
      OutComeActions ('Y');
    }
  }else if(userPick ==2){
    if(compPick ==1){
      OutComeActions ('Y');
    }else if(compPick == 2){
      OutComeActions ('T');
    }else{
      OutComeActions ('C');
    }
  }else{
    if(compPick == 1){
      OutComeActions('C');
    }else if(compPick == 2){
      OutComeActions ('Y');
    }else{
      OutComeActions('T');
    }
  }
}

onEvent ("playButton", "click", function (event) {
  setScreen("bestofScreen");
});

onEvent ("ninjaButton", "click", function(event) {
  userPick = 1;
  setText ("userPick", "You Picked Ninja!");
  decideOutcome ();
  setScreen ("endScreen");
  if (isLimit3) {
    limit3();
  }
  if (isLimit5) {
    limit5();
  }
  if (isLimit10) {
    limit10();
  }
});

onEvent ("bearButton", "click", function(event) {
  userPick = 2;
  setText ("userPick", "You Picked Bear!");
  decideOutcome ();
  setScreen ("endScreen");
  if (isLimit3) {
    limit3();
  }
  if (isLimit5) {
    limit5();
  }
  if (isLimit10) {
    limit10();
  }
});

onEvent("hunterButton", "click", function(event) {
  userPick = 3;
  setText ("userPick", "You Picked Hunter!");
  decideOutcome ();
  setScreen ("endScreen");
  if (isLimit3) {
    limit3();
  }
  if (isLimit5) {
    limit5();
  }
  if (isLimit10) {
    limit10();
  }
});
  
onEvent("playAgain", "click", function(event) {
  setScreen ("gameScreen");
  compPick = randomNumber (1, 3);
  console.log(compPick); 
  updatecompPickText ();
});
  
onEvent ("yourscore", "change", function(event) {
  console.log("scoreboard entered text: " + getText("scoreboard"));
});
onEvent ("rulesbutton", "click", function(event) {
  console.log ("rulesbutton clicked!");
  setScreen ("ruleScreen");
});
onEvent ("backbutton", "click", function(event) {
  console.log("backbutton clicked!");
  setScreen ("startScreen");
});
onEvent ("unlimitedbutton", "click", function (event) {
  console.log ("unlimitedbutton clicked!");
  setScreen ("gameScreen");
});
onEvent("firstbutton", "click", function(event) {
  console.log("firstbutton clicked!");
  isLimit3 = true;
  setScreen("gameScreen");
});
onEvent ("first5button", "click", function(event) {
  console. log("first5button clicked!");
  isLimit5 = true;
  setScreen ("gameScreen");
});
onEvent("first10button", "click", function (event) {
  console.log("first10button clicked!");
  isLimit10 = true;
  setScreen ("gameScreen");
});
onEvent ("menubutton", "click", function(event) {
  console.log("menubutton clicked!");
  isLimit3 = false;
  isLimit5 = false;
  isLimit10 = false;
  setScreen ("startScreen");
  score = 0;
  Cscore = 0;
});
onEvent("backButton2" , "click", function (event) {
  console.log ("backButton2 clicked!");
  setScreen("startScreen");
});

//function that checks to make sure the score does exceed 3
function limit3(){
  if(score == 3){
    gameWin (3);
  }else if(Cscore == 3){
    gameLoose (3);
  }
}
  
//function that checks to make sure the score does exceed 5
function limit5(){
  if(score == 5) {
    gameWin (5);
  }else if(Cscore == 5){
    gameLoose (5);
  }
}
  
//function that checks to make sure the score does exceed 10
function limit10(){
  if (score == 10){
    gameWin (10);
  }else if(Cscore == 10){
    gameLoose (10);
  }
}

function gameWin(x){
  setScreen("gameresultscreen");
  setText ("gameresultstext", "You Won First to " + x);
}

function gameLoose(x){
  setScreen("gameresultscreen");
  setText("gameresultstext", "You Lost First to " + x);
}