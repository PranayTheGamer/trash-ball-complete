var ball;
var box1,box2,box3;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(700,690,150,30);
	box2 = new Box(640,630,30,150);
	box3 = new Box(780,630,30,150);

	ball = new Paper(100,300,10);

	ground = new Ground(400,680,800,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ball.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:16,y:-16})
	 }
}
