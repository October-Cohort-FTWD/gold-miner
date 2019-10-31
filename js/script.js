/**
 * Step 1: create a canvas so that you can use canvas function (e.g. clearRect)
 * Step 2: create game
 * Step 3: create a loop to update the animation
 */

// create the canvas that you will be working, assign it to ctx
const ctx = document.getElementById('rock-board').getContext('2d');

// variables that hold the canvas width and height in case the canvas size changes
let canvasWidth = document.querySelector("#rock-board").width;
let canvasHeight = document.querySelector("#rock-board").height;

// create a Game object, initializes new player and monster
let theGame = new Game(canvasWidth, canvasHeight);

// create player and monster variables
let player = theGame.thePlayer;
let monster = theGame.theMonster;

// keeps count of the frames
let frame = 0;

// function that recursively calls itself to update the animation screen
// the loop can be called anything you want, doesn't have to be mainLoop
function mainLoop(){
    frames++;
    
    // clearRect erases the pixels of the canvas starting from (0, 0) until (canvasWidth, canvasHeight)
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw the player, money and monster
    theGame.drawPlayer(ctx);
    theGame.drawMoney(ctx);
    theGame.drawMonster(ctx);

    /**
    * You should call this method whenever you're ready to update your animation onscreen. 
    * This will request that your animation function be called before the browser performs 
    * the next repaint. The number of callbacks is usually 60 times per second, but will 
    * generally match the display refresh rate in most web browsers as per W3C recommendation. 
    * */
    requestAnimationFrame(mainLoop);
}

monster.moveMonster(canvasWidth, canvasHeight);

// controls how fast the character moves
let characterSpeed = 30;

// depending on the direction the user presses move in that direction
document.onkeydown = function(e){
  if(e.key === "ArrowUp"){
    player.movePlayer(player.x,player.y - characterSpeed, canvasWidth, canvasHeight);
  }
  if(e.key === "ArrowDown"){
    player.movePlayer(player.x,player.y + characterSpeed, canvasWidth, canvasHeight);
  }
  if(e.key === "ArrowLeft"){
    player.movePlayer(player.x - characterSpeed,player.y, canvasWidth, canvasHeight);
  }
  if(e.key === "ArrowRight"){
    player.movePlayer(player.x + characterSpeed,player.y, canvasWidth, canvasHeight);
  }
}
mainLoop();

