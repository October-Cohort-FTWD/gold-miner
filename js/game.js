class Game {
  /**
   * constructor for Game object
   * a Player object is initialzed with default values
   */
  constructor() {
    // this.canvasWidth = canvasWidth;
    // this.canvasHeight = canvasHeight;
    this.thePlayer = new Player(0, 0, 100, 100);
    this.theMonster = new Monster(200, 200, 100, 100);
    let r = Math.floor(Math.random() * 20) + 1;
    this.moneyArray = [];
    
    for (let i = 0; i < r; i++) {
      this.moneyArray.push({i : new Money(Math.floor(Math.random() * canvasWidth-30), Math.floor(Math.random() * canvasHeight-30), 30, 30, Math.floor(Math.random()*4)+1)});
    }
  }

  /**
   * draw a player on the canvas
   * @param {passes the canvas context} context 
   */
  drawPlayer = (context) => {
    let playerX = this.thePlayer.x;
    let playerY = this.thePlayer.y;
    let playerWidth = this.thePlayer.width;
    let playerHeight = this.thePlayer.height;
    context.drawImage(this.thePlayer.characterType, playerX, playerY, playerWidth, playerHeight);
  }

  /**
   * this function allows the player to choose a different character
   * @param {string: specifies the character the player wants} characterType 
   */
  chooseCharacter(characterType) {
    switch(characterType) {
      case "characterTheUserTypes":
          const characterTheUserTypesImg = new Image();
          characterTheUserTypesImg.src = "./images/characterTheUserTypes.png";
          this.thePlayer.character = characterTheUserTypesImg;
          break;
    }
  }

  /**
   * draw a monster on the canvas
   * @param {the context where the canvas is located} context 
   * @param {the obstacle object} obstacleObject 
   */
  drawMonster(context) {
    let monsterX = this.theMonster.x;
    let monsterY = this.theMonster.y;
    let monsterWidth = this.theMonster.width;
    let monsterHeight = this.theMonster.height;
    context.drawImage(this.theMonster.character, monsterX, monsterY, monsterWidth, monsterHeight);
  }
  drawMoney(context) {
    let moneyX ;
    let moneyY ;
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
}