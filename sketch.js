
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400,350,260,20)
	bob1= new Bob(400,530,40)
	bob2= new Bob(360,530,40)
	bob3= new Bob(320,530,40)
	bob4= new Bob(440,530,40)
	bob5= new Bob(480,530,40)
  rope1= new Rope(bob1.body,roof.body,0,0);
  rope2= new Rope(bob2.body,roof.body,0,0);
  rope3= new Rope(bob3.body,roof.body,0,0);
  rope4= new Rope(bob4.body,roof.body,0,0);
  rope5= new Rope(bob5.body,roof.body,0,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  line(bob1.body.position.x,bob1.body.position.y,roof.body.position.x,roof.body.position.y);
  rope2.display();
  line(bob2.body.position.x,bob2.body.position.y,roof.body.position.x-35,roof.body.position.y);
  rope3.display();
  line(bob3.body.position.x,bob3.body.position.y,roof.body.position.x-75,roof.body.position.y);
  rope4.display();
  line(bob4.body.position.x,bob4.body.position.y,roof.body.position.x+35,roof.body.position.y);
  rope5.display();
  line(bob5.body.position.x,bob5.body.position.y,roof.body.position.x+70,roof.body.position.y);
  
  drawSprites();
 
}



