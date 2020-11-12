
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;
var tree;
var boy,boyImg;
var mango1,mango2,mango3,mango4,mango5;
var t1;
function preload()
{
	boyImg=loadImage("boy.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boy=createSprite(500,630,1,1)
	boy.addImage(boyImg)
	boy.scale=0.1;
    tree=new Tree(1200,400,700,700)
    ground= new Ground(800,690,1200,20)
	stone=new Stone(450,550,70,70)
	mango1=new Mango(1200,200,50,50)
	mango2=new Mango(1050,200,40,40)
	mango3=new Mango(1100,240,40,40)
	mango4=new Mango(1300,300,40,40)
	mango5=new Mango(1450,350,40,40)
	t1 = new Thrower(stone.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  tree.display();

 stone.display()
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  detectcollision(stone,mango1)
  detectcollision(stone,mango2)
  detectcollision(stone,mango3)
  detectcollision(stone,mango4)
  detectcollision(stone,mango5)
  drawSprites();
  
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
    t1.fly()
}
function detectcollision(lmango,lstone){
	mangoBodyPosition=lmango.body.position
	StoneBodyPosition=lstone.body.position

	var distance=dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y)
    if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false)
	}
}
function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone.body,{x:-235,y:-420})
		t1.attach(stone.body)
	}
}