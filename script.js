let ducks = [
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/duck%20(1).png",
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/duck%20(2).png",
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/duck%20(3).png"
];

let geese = [
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/goose1%20(1).png",
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/goose1%20(2).png",
  "https://raw.githubusercontent.com/EvanBenjamin27/DuckOrGoose/refs/heads/main/goose1%20(3).png"
];

let submit = 0; //duck or goose buttons
let r3 = 0;    //this chooose duck or goose
let score = 0; // game score
let highScore = 0; //this is the high score i copied and pasted from my chance game

// Start a new round
function start() {
  r3 = Math.floor(Math.random() * 2) + 1;  // goose = 1, duck = 2
  console.log(r3);

  if (r3 === 2) {
    duck();
    console.log("duck");
  } else {
    goose();
    console.log("goose");
  }

  document.getElementById("score").innerHTML = "Score: " + score;
}

//duck image thing
function duck() {
  let r = Math.floor(Math.random() * ducks.length);
  document.getElementById("img").src = ducks[r];
}

//goose image thing
function goose() {
  let r2 = Math.floor(Math.random() * geese.length);
  document.getElementById("img").src = geese[r2];
}

function goose1() {
  submit = 1;
}

function duck1() {
  submit = 2;
}

//submit button and score management
function sub() {
  if (submit === r3) {
    score += 1;  //score go up by 1
    start();     // gives you another image
    submit = 0;  // sets submit to 0 to stop errors
  } else {
    score = 0; //do I realy have to explain myself
  }
  //prints score into html using .innterHTML
  document.getElementById("score").innerHTML = "Score: " + score;
  if (score > highScore) {
    highScore++;
  }
  document.getElementById("highScore").innerHTML = "High Score: " + highScore;
}