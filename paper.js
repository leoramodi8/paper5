class Paper {
    constructor(x, y, radius) {
        var options = {
           isStatic: false,
           restitution :0.2,
           friction : 10,
           density :1.5,

        }
        this.body = Matter.Bodies.circle(x, y, radius/1.02, options);
       this.radius = radius; 
       this.image= loadImage("sprites/paper.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        fill("white");
        //ellipseMode(RADIUS);
        //ellipse(pos.x, pos.y, this.radius);
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,75,75);
        pop();
      }
}