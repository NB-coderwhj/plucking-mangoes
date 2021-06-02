
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree, ground;
var m1,m2,m3,m4,m5;
var stone;
var boy
var elastic
var gState = "onSling"

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(650,380);
	ground = new Ground(560,800);

	m1 = new Mango(600,290);
	m2 = new Mango(670,220);
	m3 = new Mango(750,350);
	m4 = new Mango(700,310);
	m5 = new Mango(580,360);

	boy = new Boy(200,500);
	stone = new Stone(160,420);

	elastic = new Elastic(stone.body,{x:160,y:450});

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("SKYBLUE");

 /* mouseDragged();
  mouseReleased();*/

 

  tree.display();
  ground.display();
  
  m1.display();
  m2.display();
  m3.display();
  m4.display();
  m5.display();

  stone.display();
  boy.display();

  elastic.display();

  if(stone.hasCollided(m1.body)){
	m1.setStatic(false);
	console("collided")
}
if(stone.hasCollided(m5.body)){
	m1.setStatic(false);
}
if(stone.hasCollided(m4.body)){
	m1.setStatic(false);
}
if(stone.hasCollided(m3.body)){
	m1.setStatic(false);
}
if(stone.hasCollided(m2.body)){
	m1.setStatic(false);
}

detectCollision(stone,m1);
detectCollision(stone,m2);
detectCollision(stone,m3);
detectCollision(stone,m4);
detectCollision(stone,m5);
  
 
 console.log(gState)
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:160,y:450});
		elastic.attatch(stone.body)
		gState = "onSling"
	}
}


function mouseDragged(){
	if(gState === "onSling"){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
	console.log("hi")
	}
}

function mouseReleased(){
	elastic.fly();
	gState = "fly"
}

function detectCollision(lStone,lMango){
    lMangoPos = m1.body.position;
	lStonePos = stone.body.position;
	var distance = dist(lStonePos.x,lStonePos.y,lMangoPos.x,lMangoPos.y);
	if(distance<=lMango.r+lStone.r){
		Matter.Body.setStatic(lMango.body,false);
	}
}



