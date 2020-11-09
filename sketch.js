
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,bin2,bin3
var paper
var ground
var bin_img

function preload()
{
	bin_img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(width/2, 690, width, 10)
	bin1=new Bin(600, 675, 200, 20)
	bin2=new Bin(500, 635,20,100)
	bin3=new Bin(700, 635,20,100)

	paper=new Paper(100,100, 50, 50)

	
  
}


function draw() {
  Engine.update(engine);
  background("white");
  
  ground.display()
  bin1.display()
  bin2.display()
  bin3.display()
  paper.display()
image(bin_img, 600, 600, 237, 170)
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
	   Matter.Body.applyForce(paper.body, paper.body.position, {x:400,y:-400})
	 }
   }



