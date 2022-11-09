let scoreEl1 = document.getElementById("scoreEl1");
let score1 = 0;

let scoreEl2 = document.getElementById("scoreEl2");
let score2 = 0;

// Home Buttons
function addOne1() {
  score1 += 1;
  scoreEl1.textContent = score1;
}
function addTwo1() {
  score1 += 2;
  scoreEl1.textContent = score1;
}
function addThree1() {
  score1 += 3;
  scoreEl1.textContent = score1;
}

//Away Buttons

function addOne2() {
  score2 += 1;
  scoreEl2.textContent = score2;
}
function addTwo2() {
  score2 += 2;
  scoreEl2.textContent = score2;
}
function addThree2() {
  score2 += 3;
  scoreEl2.textContent = score2;
}

//New Game Btn
let message = document.getElementById("message");
function newGame(){
  if (score1 > score2) {
    message.textContent="Home Team WON!!"

  } else if (score2 > score1) {
   message.textContent="Away Team WON!!"

 } else {
   message.textContent="A Draw !! What a match !!"

 }
 score1 = 0;
 score2 = 0;
 scoreEl1.textContent = score1;
 scoreEl2.textContent = score2;

}
