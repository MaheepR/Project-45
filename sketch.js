var bg,bgImg;
var boy,boyImg;
var ground;
var platformImg;

function preload(){
  bgImg=loadImage("backgroud.png");
  boyImg=loadImage("Boy.png");
  platformImg=loadImage("platform.png");
}


function setup() {
  createCanvas(800,600);

  bg=createSprite(400,300);
  bg.addImage("bg",bgImg);
  bg.velocityY=1;
  bg.scale=7;

  boy=createSprite(400,580,50,50);
  boy.addImage("boy",boyImg);
  boy.scale=0.25;
  boy.setCollider("rectangle",1,-55,boy.width,boy.height);
  
  
  ground=createSprite(0,600,1600,10);
  ground.shapeColor="brown";

  platformG=new Group();
  
}

function draw() {
  background(255,255,255);  

  if(bg.y>400){
    bg.y=300;
}

if(keyDown("space")){
  boy.velocityY=-13;
}

if(keyDown("left")){
  boy.x-=5;
}

if(keyDown("right")){
  boy.x+=5;
}

boy.velocityY = boy.velocityY + 0.8;

boy.collide(platformG);
boy.collide(ground);

spawnPlatforms();  

  drawSprites();
}


function spawnPlatforms(){
  if(frameCount % 150 === 0){
    var platform=createSprite(Math.round(random(100,600)),Math.round(random(200,400)),20,20);
    platform.addImage("platform",platformImg);
    platform.scale=0.9;
    platform.lifetime=150;
    platform.setCollider("rectangle",1,1,10,platform.height);
    platformG.add(platform);
  }
}