class Rain {
    constructor(x,y,width,height) {
        this.x = random(width);
        this.y = random(400,350);
        this.length = random(1,5);
        

    }
    display(){
       strokeWeight(4);
        stroke(138, 43, 226);
        line(this.x, this.y, this.x, this.y + this.length); 
     }
    
}