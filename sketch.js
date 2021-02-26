var paper, bin, ground;
var paperImg, binImg;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Render = Matter.Render

function preload()
{
	
}

function setup() {
	createCanvas(1350, 500);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper = new Paper(200, 10, 70);
	bin = new Dustbin();
	ground = new Ground();
	var render = Render.create({
		element:document.body,
		engine:engine,
		options:{width:1200, height:700, wireframes:false}
	})
	Engine.run(engine);
 Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
 bin.display();
 ground.display();
}

function keyCode(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
	}
}



