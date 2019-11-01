class Game {
  /**
   * constructor for Game object
   * a Player object is initialzed with default values
   */
  constructor(canvasWidth, canvasHeight) {
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.thePlayer = new Player(0,0,60,100);
    this.theMonster = new Monster(canvasWidth/7, canvasHeight/7, 60, 100);
    this.moneyArray = [];
    this.tracker = 0;
    this.createMoney();
  }

  // create money
  createMoney() {
    this.moneyArray = [];
    // randomly creates number of money
    let r = Math.floor(Math.random() * 20) + 5;
    let moneyXPosition;
    let moneyYPosition;
    
    for (let i = 0; i < r; i++) {
      moneyXPosition = Math.floor(Math.random() * (this.canvasWidth - 25));
      moneyYPosition = Math.floor(Math.random() * (this.canvasHeight - 40));
      if(moneyXPosition <= this.thePlayer.width)
      moneyXPosition += this.thePlayer.width;
      if(moneyXPosition <= this.thePlayer.height)
      moneyYPosition += this.thePlayer.height;

      this.moneyArray.push({
        i: new Money(moneyXPosition, moneyYPosition, 25, 40, Math.floor(Math.random() * 4) + 1)
      });
    }
  }

  /**
   * 
   * @param {the context where the canvas is located} context 
   */
  drawMoney(context) {
    let moneyX;
    let moneyY;
    let moneyWidth;
    let moneyHeight;

    for(let i=0;i< this.moneyArray.length;i++) {
      moneyX = this.moneyArray[i].i.x;
      moneyY = this.moneyArray[i].i.y;
      moneyWidth = this.moneyArray[i].i.width;
      moneyHeight = this.moneyArray[i].i.height;
      context.drawImage(this.moneyArray[i].i.revealType(this.moneyArray[i].i.moneyType), moneyX, moneyY, moneyWidth, moneyHeight);
    }
  }

  /**
   * draw the player on the canvas
   * @param {passes the canvas context} context 
   */
  drawPlayer = (context) => {
    let playerX = this.thePlayer.x;
    let playerY = this.thePlayer.y;
    let playerWidth = this.thePlayer.width;
    let playerHeight = this.thePlayer.height;
    let playerImage = this.thePlayer.characterType;
    context.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);
  }

  /**
   * this function allows the player to choose a different character
   * @param {string: specifies the character the player wants} characterType 
   */
  chooseCharacter(characterChosen) {
    switch(characterChosen) {
      case "test":
          const characterTheUserTypesImg = new Image();
          characterTheUserTypesImg.src = "./images/cartoon-miner.png";
          this.thePlayer.characterType = characterTheUserTypesImg;
          break;
    }
  }

  /**
   * draw the monster on the canvas
   * @param {the context where the canvas is located} context 
   * @param {the obstacle object} obstacleObject 
   */
  drawMonster(context) {
    let monsterX = this.theMonster.x;
    let monsterY = this.theMonster.y;
    let monsterWidth = this.theMonster.width;
    let monsterHeight = this.theMonster.height;
    let monsterImage = this.theMonster.monsterType
    context.drawImage(monsterImage, monsterX, monsterY, monsterWidth, monsterHeight);
  }

  /**
   * this function allows the monster to be randomly change
   * @param {string: specifies the monster type} characterType 
   */
  randomizeMonster(monsterType) {
    switch(monsterType) {
      case "monsterTypes":
          const monsterTypesavailable = new Image();
          monsterTypesavailable.src = "./images/characterTheUserTypes.png";
          this.theMonster.character = monsterTypesavailable;
          break;
    }
  }

  /**
   * detect if the player has collided with the monster or monies
   * @param {new x axis position on canvas} futureX 
   * @param {new y axis position on canvas} futureY 
   */
  collisionDetection(futureX, futureY) {
    let canMove = true;

    // the greater these values are the closer the player will be able to get to the object before it cannot move
    let rightCollissionProximity = 10;
    let leftCollissionProximity = 11;
    let topCollissionProximity = 25;
    let bottomCollissionProximity = 30;

    let playerRightSide = futureX + this.thePlayer.width - rightCollissionProximity;
    let playerLeftSide = futureX  + leftCollissionProximity;
    let playerTopSide = futureY + topCollissionProximity;
    let playerBottomSide = futureY + this.thePlayer.height - bottomCollissionProximity;

    let monsterRightSide = this.theMonster.x + this.theMonster.width;
    let monsterLeftSide = this.theMonster.x;
    let monsterTopSide = this.theMonster.y;
    let monsterBottomSide = this.theMonster.y + this.theMonster.height;

    /**
     * if the right and left side of the player are between then monsters left and right side &&
     * if the top and bottom side of the player are between then monsters top and bottom side
     */
    if(playerRightSide >= monsterLeftSide && playerLeftSide <= monsterRightSide && 
      playerBottomSide >= monsterTopSide && playerTopSide <= monsterBottomSide) {
      canMove = false;
    }
    return canMove;
  }

  // track the score and keeps adding it to the score element in the score-board
  trackScore(valueScored) {
    this.tracker += valueScored;
    document.getElementsByClassName('score-value')[0].innerText = this.tracker;
  }

  // reset the game
  reset() {
    location.reload();
  }
}