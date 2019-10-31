class Monster{
    contstructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveMonster(){
        setInterval(()=>{
            this.x =Math.floor(Math.random()*700)+1;
            setInterval(()=>{
                this.x += 1; 
            },500);
            this.y = Math.floor(Math.random()*700)+1;
            setInterval(()=>{
                this.y += 1; 
            },500);

        },10000)
            
        
        
    }
    
}


