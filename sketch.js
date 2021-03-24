const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function setup(){
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper = new Paper(100, 600, 10);

	ground = new Ground(400, 680, 800, 20);

	leftSide = new Dustbin(550, 620, 20, 100);
	bottom = new Dustbin(610, 660, 100, 20);
	rightSide = new Dustbin(670, 620, 20, 100);

	Engine.run(engine);

}


function draw(){
	rectMode(CENTER);

	background(0, 0, 0);

	Engine.update(engine);
	
	paper.display();

	ground.display();

	leftSide.display();
	bottom.display();
	rightSide.display();

	drawSprites();

	fill(0);
  	stroke("orange");
  	textSize(25);
  	text("Hello it is very important to throw garbage in dustbin to maintain",40,40);

	fill(0);
	stroke("orange")
	textSize(25);
	text("cleanliness now there is a garbage paper ball can you put it in", 40, 70);

	fill(0);
  	stroke("white");
  	textSize(25);
  	text("the dust bin (press the up arrow key) if you had fun throwing the",40,100);

	fill(0);
  	stroke("green");
  	textSize(25);
  	text("garbage and want to do it again press the buttons ctrl and r togehter",40,130);

	fill(0);
  	stroke("green");
  	textSize(25);
  	text("and you can throw another garbage",40,160);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
	}
}
