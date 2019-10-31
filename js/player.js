class Player {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    movePlayer(arrivalX, arrivalY) {
        if(arrivalX + this.width <= 400 && arrivalX >=0 && arrivalY + this.height <= 400 && arrivalY >= 0) {
            this.x = arrivalX;
            this.y = arrivalY;
        }
        
    }
}
