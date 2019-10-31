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

    moveMonster(canvasWidth, canvasHeight) {
        let futureX = 0;
        let futureY = 0;
        let monsterSpeed = 10;
        setInterval(()=>{
            console.log(futureX, futureY, canvasWidth, canvasHeight, monsterSpeed)
            futureX = Math.floor(Math.random()*canvasWidth-this.width);
            futureY = Math.floor(Math.random()*canvasWidth-this.height);
            if(this.checkBoundary(futureX, futureY, canvasWidth, canvasHeight)) {
                console.log(this.checkBoundary(futureX, futureY, canvasWidth, canvasHeight))
                this.x = futureX;
                this.y = futureY;
            }
            setInterval(()=>{
                if(this.checkBoundary(this.x + monsterSpeed, this.y + monsterSpeed, canvasWidth, canvasHeight)) {
                    this.x += monsterSpeed;
                    this.y += monsterSpeed;
                }
                else {
                    this.x = canvasHeight/2;
                    this.y = canvasWidth/2;
                }
            },500);
        },5000)      
    }

    checkBoundary(futureX, futureY, canvasWidth, canvasHeight) {
        if(futureX + this.width <= canvasWidth && futureX >= 0 && 
            futureY + this.height <= canvasHeight && futureY >= 0) {
            return true;
        }
        return false;
    }
}



