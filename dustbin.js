class Dustbin {
    constructor (x,y,width,height){
        var options = {
            isStatic : true
        }

        
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width= width;
        this.height= height;
        this.image= loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
    }

    display(){
        var pos =this.body.position;
       // rectMode(CENTER);
        fill("red");
       // rect(pos.x, pos.y, this.width, this.height);
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,200,200);
        pop();
      }

}