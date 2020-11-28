var bob1,bob2,roof,rope1,rope2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1=new Bob(320,300,20);
roof=new Roof(400,150,200,20);
rope1 = new Rope(bob1.body,roof.body,-80,12);
bob2=new Bob(360,300,20);
rope2 = new Rope(bob2.body,roof.body,-40,12);
	Engine.run(engine);
  
}


function draw() {


  background(255);
  bob1.display();

  bob2.display();
  roof.display();
  rope1.display();
  rope2.display();
  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-15,y:-15});
  }
  }


