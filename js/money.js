class Money {
    /**
     * constructor for Player object
     * @param {x axis position on canvas} x 
     * @param {y axis position on canvas} y 
     * @param {width of player} width 
     * @param {height of player} height 
     * @param {default money type is a miner} moneyType 
     */
    constructor(x,y,width,height,moneyType){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.moneyType = moneyType;
    }
}

