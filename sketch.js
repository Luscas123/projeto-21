
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var rightSide;




function preload()
{
	
}

function setup() {
	createCanvas(1000, 800);


	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		densuty:1.2
	}

	var ground_options={
		isStatic:true
	}

	ball=Bodies.circle(100,400,15, ball_options)
	World.add(world, ball)

	ground=Bodies.rectangle(500,700, width,30, ground_options)
	World.add(world, ground)

	leftSide=Bodies.rectangle(800, 635, 20,120, ground_options)
	World.add(world, leftSide)

	rightSide=Bodies.rectangle(900, 635, 20,120, ground_options)
	World.add(world, leftSide)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x, ball.position.y, 15);
  rect(ground.position.x, ground.position.y, width,30);
  rect(leftSide.position.x, leftSide.position.y, 20,120);
  rect(rightSide.position.x, rightSide.position.y, 20,120);

  


  drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.01147, y:-0.02})
	}
}


