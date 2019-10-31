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

    moveMonster() {
        setInterval(()=>{
            this.x =Math.floor(Math.random()*700)+1;
            setInterval(()=>{
                this.x +=10;
            },500);
            this.y = Math.floor(Math.random()*700)+1;
            setInterval(()=>{
                this.y += 10; 
            },500);

        },10000)
    }
}



