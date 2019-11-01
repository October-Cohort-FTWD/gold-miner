class Money {
    /**
     * constructor for Player object
     * @param {x axis position on canvas} x 
     * @param {y axis position on canvas} y 
     * @param {width of player} width 
     * @param {height of player} height 
     * @param {default money type is random} moneyType 
     */
    constructor(x,y,width,height,moneyType, the){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.moneyType = moneyType; 
    }

    revealType(moneyType) {
        if(moneyType === 1) {
            const goldImg = new Image();
            goldImg.src = "../images/gold-nugget.png";
            return goldImg;
        }
        if(moneyType === 2) {
            const diamondImg = new Image();
            diamondImg.src = "../images/diamond.png";
            return diamondImg;
        }
        if(moneyType === 3) {
            const rubyImg = new Image();
            rubyImg.src = "../images/ruby.png";
            return rubyImg;
        }
        if(moneyType === 4) {
            const sapphireImg = new Image();
            sapphireImg.src = "../images/saphire.png";
            return sapphireImg;
        }
    }
}
