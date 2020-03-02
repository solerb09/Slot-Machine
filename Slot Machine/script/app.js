

// the three icons that are available
let availableCans = [
  "images/coke.png",
  "images/sprite.png",
  "images/crush.png"
];
// setting the points to 200
let points = 200;

//by default the three wheels are set to the empty can
let wheelOne = "images/empty.png";
let wheelTwo = "images/empty.png";
let wheelThree = "images/empty.png";

function onload() {
  //loading the points onload
  document.getElementById("score").innerHTML = `Points: ${points}`;
}

//reset function if the user wants to play again
function reset() {
  availableCans = ["images/coke.png", "images/sprite.png", "images/crush.png"];
  points = 200;

  wheelOne = "images/empty.png";
  wheelTwo = "images/empty.png";
  wheelThree = "images/empty.png";

  document.getElementById("wheelOne").src = wheelOne;
  document.getElementById("wheelTwo").src = wheelTwo;
  document.getElementById("wheelThree").src = wheelThree;

  document.getElementById("spin").disabled = false;
  document.getElementById("reset").disabled = false;

  document.getElementById("msg").innerHTML = "";
  document.getElementById("score").innerHTML = `Points: ${points}`;
}

function play() {
  //get random cans for each wheel
  wheelOne = availableCans[Math.floor(Math.random() * availableCans.length)];
  wheelTwo = availableCans[Math.floor(Math.random() * availableCans.length)];
  wheelThree = availableCans[Math.floor(Math.random() * availableCans.length)];

  //setting the source of the image boxes to each wheel
  document.getElementById("wheelOne").src = wheelOne;
  document.getElementById("wheelTwo").src = wheelTwo;
  document.getElementById("wheelThree").src = wheelThree;

  //setting the font color for the game state to green
  document.getElementById("msg").style.color = "#33cc33";

  //the 7 rules
  if (wheelOne == "images/coke.png" &&wheelTwo == "images/crush.png" &&wheelThree == "images/sprite.png") 
  {
    //incrementing the points
    points += 25;
    //displaying to the user they won
    document.getElementById("msg").innerHTML = "Winner! +25";
    //moving the sentence to be centered
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else if (wheelOne == "images/sprite.png" &&wheelTwo == "images/coke.png" &&wheelThree == "images/crush.png") 
  {
    points += 35;
    document.getElementById("msg").innerHTML = "Winner! +35";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } else if (wheelOne == "images/sprite.png" &&wheelTwo == "images/crush.png" &&wheelThree == "images/coke.png") 
  {
    points += 50;
    document.getElementById("msg").innerHTML = "Winner! +50";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else if (wheelOne == "images/sprite.png" &&wheelTwo == "images/sprite.png" &&wheelThree == "images/crush.png") 
  {
    console.log(wheelOne);
    console.log(wheelTwo);
    console.log(wheelThree);
    points += 80;
    document.getElementById("msg").innerHTML = "Winner! +80";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else if (wheelOne == "images/coke.png" &&wheelTwo == "images/coke.png" &&wheelThree == "images/coke.png") 
  {
    console.log(wheelOne);
    console.log(wheelTwo);
    console.log(wheelThree);
    points += 110;
    document.getElementById("msg").innerHTML = "Winner! +110";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else if (wheelOne == "images/crush.png" &&wheelTwo == "images/crush.png" &&wheelThree == "images/crush.png") 
  {
    console.log(wheelOne);
    console.log(wheelTwo);
    console.log(wheelThree);
    points += 130;
    document.getElementById("msg").innerHTML = "Winner! +130";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else if (wheelOne == "images/sprite.png" &&wheelTwo == "images/sprite.png" &&wheelThree == "images/sprite.png") 
  {
    console.log(wheelOne);
    console.log(wheelTwo);
    console.log(wheelThree);
    points += 200;
    document.getElementById("msg").innerHTML = "Winner! +200";
    document.getElementById("msg").style.left = "100px";
    let audio = new Audio('sounds/win.mp3');
    audio.play();
  } 
  else 
  {
    //if the user loses they lost 40 points
    points -= 50;
    //font color is set to red
    document.getElementById("msg").style.color = "#e60000";
    //display how many points they lost
    document.getElementById("msg").innerHTML = "Loser! -50";
    //recentering
    document.getElementById("msg").style.left = "106px";
  }
  //enabling the spin
  document.getElementById("spin").disabled = false;
  //keeping the reset button disabled until the user loses
  document.getElementById("reset").disabled = true;
  //displaying the points
  document.getElementById("score").innerHTML = `Points: ${points}`;
  //if the points is less than or equal to zero
  if (points < 50) 
  {
    //display to the user they lost
    document.getElementById("msg").innerHTML =
      "You Lost!!! Press New Game to Play Again";
    //recentering
    document.getElementById("msg").style.left = "5%";
    //disable spinner
    document.getElementById("spin").disabled = true;
    //enable the restart button
    document.getElementById("reset").disabled = false;
  }
}

function spin() 
{
  //disabling the two buttons
  document.getElementById("spin").disabled = true;
  document.getElementById("reset").disabled = true;

  let audio = new Audio('sounds/spin1.mp3');
  audio.play();

  //setting the source of the three boxes to the gif which rolls through the three icons
  document.getElementById("wheelOne").src = "gif/wheelspin.gif";
  document.getElementById("wheelTwo").src = "gif/wheelspin.gif";
  document.getElementById("wheelThree").src = "gif/wheelspin.gif";



  //running the funciton in 1.5s
  setTimeout(play, 1550);
}
