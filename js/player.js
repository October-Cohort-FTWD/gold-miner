class Player {
    /**
     * constructor for Player object
     * @param {x axis position on canvas} x 
     * @param {y axis position on canvas} y 
     * @param {width of player} width 
     * @param {height of player} height 
     * @param {default charater type is a miner} characterType 
     */
    constructor(x,y,width,height, characterType) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        const minerImg = new Image();
        minerImg.src = "../images/gold-miner.png";
        this.characterType = minerImg;
    }

    /**
     * move method for Player object
     * @param {new x axis position on canvas} arrivalX 
     * @param {new y axis position on canvas} arrivalY 
     * @param {canvas width} canvasWidth 
     * @param {canvas height} canvasHeight 
     */
    movePlayer(arrivalX, arrivalY, canvasWidth, canvasHeight) {
        if(arrivalX + this.width <= canvasWidth && arrivalX >= 0 && 
            arrivalY + this.height <= canvasHeight && arrivalY >= 0) {
            this.x = arrivalX;
            this.y = arrivalY;
        }
    }
}
