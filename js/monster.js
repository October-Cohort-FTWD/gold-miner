class Monster {
    /**
     * 
     * @param {x axis position on canvas} x 
     * @param {y axis position on canvas} y 
     * @param {width of player} width 
     * @param {height of player} height 
     * @param {default monster type is a snake } monsterType 
     */
    constructor(x,y,width,height, monsterType){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        // default character is a snake
        const snakeImg = new Image();
        snakeImg.src = "../images/enemy-snake.png";
        this.monsterType = snakeImg;
    }

    /**
     * randomly moves the monster throughout the board 
     * @param {canvas width} canvasWidth 
     * @param {canvas height} canvasHeight 
     */
    moveMonster(canvasWidth, canvasHeight) {
        let futureX = 0;
        let futureY = 0;
        let monsterSpeed = 10;
         setInterval(()=>{
             setTimeout(()=>{
                console.log(futureX, futureY, canvasWidth, canvasHeight, monsterSpeed)
                futureX = Math.floor(Math.random()*canvasWidth-this.width);
                futureY = Math.floor(Math.random()*canvasWidth-this.height);
                if(this.checkMonsterBoundary(futureX, futureY, canvasWidth, canvasHeight)) {
                    console.log(this.checkMonsterBoundary(futureX, futureY, canvasWidth, canvasHeight))
                    this.x = futureX;
                    this.y = futureY;
                    console.log('spawning');
             }
            },4000)
                if(this.checkMonsterBoundary(this.x + monsterSpeed, this.y + monsterSpeed, canvasWidth, canvasHeight)) {
                    if(this.x%2 === 0 && this.y%2 === 0){
                       this.x += monsterSpeed; 
                    } else if(this.x%2 !== 0 && this.y%2 !== 0){
                        this.x -= monsterSpeed;
                    }
                    else if(this.x%2 === 0 && this.y%2 !== 0){
                        this.y += monsterSpeed;
                    } else if(this.x%2 !== 0 && this.y%2 === 0){
                        this.y -= monsterSpeed;
                    }
                    
                } else{
                     this.x = Math.floor(Math.random()*canvasWidth-this.width);
                     this.y = Math.floor(Math.random()*canvasWidth-this.height);
                }
                
                console.log('moving');
            
        },1000)      
    }

    /**
     * checks if the new position of the monster is within the canvas
     * @param {new x axis position} futureX 
     * @param {new x axis position} futureY 
     * @param {canvas width} canvasWidth 
     * @param {canvas height} canvasHeight 
     */
    checkMonsterBoundary(futureX, futureY, canvasWidth, canvasHeight) {
        if(futureX + this.width <= canvasWidth && futureX >= 0 && 
            futureY + this.height <= canvasHeight && futureY >= 0) {
            return true;
        }
        return false;
    }
}



