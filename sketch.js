
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject;
var ground;
var dustbin1,dustbin2,dustbin3;



function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper (100,340,25);



	


	//dustbin1 = new Dustbin(650,310,15,100);
	//dustbin2 = new Dustbin(500,310,15,100);
	dustbin3 = new Dustbin(540,265,150,10);


	ground = new Ground(400,370,800,15);

	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);
  background(250);

 paperObject.display();


ground.display();

//dustbin1.display();
//dustbin2.display();
dustbin3.display();
drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:78,y:-140});
	}
}


