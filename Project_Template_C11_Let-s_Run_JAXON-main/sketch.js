var runner,runner_running
var ground,groundImage
var mouse
var invisbleWall1,invisibleWall2

function preload(){
  //pre-load images
runner_running = loadAnimation("Runner-1.png","Runner-2.png")
groundImage = loadImage("path.png")
}

function setup(){
  createCanvas(400,400);

//creating path
ground=createSprite(200,200,20,400);
ground.addImage("ground",groundImage);
ground.scale = 1.2
ground.y = height / 2
ground.velocityY = 4
background(220)

//create sprites here
runner = createSprite(200,300)
runner.addAnimation("runner",runner_running)
runner.scale = 0.1

//creating invisible walls
  invisbleWall1 = createSprite(40,200,5,400)
  invisbleWall1.visible = false

invisibleWall2 = createSprite(360,200,5,400)
invisibleWall2.visible = false


}

function draw() {
  if(ground.y > 400){
   ground.y = height / 2 
   
  } 
  runner.x=World.mouseX;
  runner.collide(invisibleWall2)
  runner.collide(invisbleWall1)
  drawSprites()
}
