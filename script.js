/**
 * Step 1: create a canvas so that you can use canvas function (e.g. clearRect)
 * Step 2: create game
 * Step 3: create a loop to update the animation
 */

// create the canvas that you will be working, assing it to ctx
const ctx = document.getElementById('rock-board').getContext('2d');
let frames = 0;
let miner = new Player(100,100,25,50);
const playerImg = new Image();
playerImg.src = './images/gold-miner.png';

function drawSelf(u){
    ctx.fillRect(u.x, u.y, u.width, u.height)
}

function drawImages() {
    ctx.clearRect(0, 0, 400, 800);
    ctx.drawImage(playerImg, miner.x, miner.y, miner.width, miner.height);
  }

function mainLoop(){
    frames++;

    ctx.clearRect(0,0,400,400);

    // this is where we draw the hero
    drawSelf(miner, false);
    // then we draw all the obstacles
    // theGame.obstacleArray.forEach((eachObstacle)=>{
    //     drawSelf(eachObstacle, true)
    // })

    requestAnimationFrame(mainLoop);
}
mainLoop();