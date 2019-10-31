/**
 * Step 1: create a canvas so that you can use canvas function (e.g. clearRect)
 * Step 2: create game
 * Step 3: create a loop to update the animation
 */

// create the canvas that you will be working, assing it to ctx
const ctx = document.getElementById('rock-board').getContext('2d');
let frames = 0;
let miner = new Player(500,500,50,50);
const playerImg = new Image();
playerImg.src = '../images/gold-miner.png';

function drawImages() {
    ctx.drawImage(playerImg, miner.x, miner.y, miner.width, miner.height);
  }

function mainLoop(){
    frames++;
    ctx.clearRect(0,0,700,700);
    drawImages()
    requestAnimationFrame(mainLoop);
}

// controls how fast the character moves
let characterSpeed = 30;

// depending on the direction the user presses move in that direction
document.onkeydown = function(e){
  if(e.key === "ArrowUp"){
    miner.movePlayer(miner.x,miner.y - characterSpeed);
  }
  if(e.key === "ArrowDown"){
    miner.movePlayer(miner.x,miner.y + characterSpeed);
  }
  if(e.key === "ArrowLeft"){
    miner.movePlayer(miner.x - characterSpeed,miner.y);
  }
  if(e.key === "ArrowRight"){
    miner.movePlayer(miner.x + characterSpeed,miner.y);
  }
}

mainLoop();