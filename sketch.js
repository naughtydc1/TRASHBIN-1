
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var ground,Paper,engine,world,roof;
var box1,box2,box3;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	
	 box1 = new box(900,360,200,20);
	 box2 = new box(800,320,20,100);
     box3 = new box(1000,320,20,100);
	 Paper = new paper(100,340,40);
	 //Paper.velocityY += 0.2;
	 ground = new Ground(600,370,1200,10);
	 //roof = new Ground(600,30,1200,10);

	 var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
   
	
	 box1.display();
	 box2.display();
	 box3.display();
	 Paper.display();
	 ground.display();
	 //roof.display();
	 drawSprites();
   
}
  
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-65});
  
	}
}

 



