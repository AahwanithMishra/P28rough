
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone, mango1Img,mango2Img,mango3Img,mango4Img,mango1,mango2,mango3,mango4,boy1,boy1Image;
function preload()
{
	boy1Image=loadImage(boy.png);
	mango1Img=loadImage(mango.png)
	mango2Img=loadImage(mango.png)
	mango3Img=loadImage(mango.png)
	mango4Img=loadImage(mango.png)
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy1.addImage(boy1Image);
	mango1.addImage(mango1Img);
	mango2.addImage(mango2Img);
	mango3.addImage(mango3Img);
	mango4.addImage(mango4Img);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



