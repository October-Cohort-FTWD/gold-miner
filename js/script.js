/**
 * Step 1: create a canvas so that you can use canvas function (e.g. clearRect)
 * Step 2: create game
 * Step 3: create a loop to update the animation
 */

// create the canvas that you will be working, assing it to ctx
const ctx = document.getElementById('rock-board').getContext('2d');
let frames = 0;
let miner = new Player(100,100,50,50);
const playerImg = new Image();
playerImg.src = '../images/gold-miner.png';

let snake = new Monster(300,300,50,40);
const snakeImg = new Image();
snakeImg.src = '../images/enemy-snake.png';

function drawImages() {
    console.log('miner');
    //ctx.clearRect(0, 0, 400, 800);
    ctx.drawImage(playerImg, miner.x, miner.y, miner.width, miner.height);
    ctx.drawImage(snakeImg,snake.x,snake.y,snake.width, snake.height);
    console.log('snake');
  }
  

function mainLoop(){
    frames++;
    ctx.clearRect(0,0,700,700);
    drawImages();
    requestAnimationFrame(mainLoop);
}
mainLoop();