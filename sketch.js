
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(600, 300, 300, 30);

	bob1 = new Bob(500, 600, 25);
	bob2 = new Bob(550, 600, 25);
	bob3 = new Bob(600, 600, 25);
	bob4 = new Bob(650, 600, 25);
	bob5 = new Bob(700, 600, 25);

	rope1 = new Rope(bob1.body, {x:500, y:300});
	rope2 = new Rope(bob2.body, {x:550, y:300});
	rope3 = new Rope(bob3.body, {x:600, y:300});
	rope4 = new Rope(bob4.body, {x:650, y:300});
	rope5 = new Rope(bob5.body, {x:700, y:300});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  roof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  //keyPressed();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-50, y:0});
	}
}



