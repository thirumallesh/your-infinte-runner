var Ghost,GhostImage;
var Tower,TowerImage;
var PLAY = 1;
var END = 0;
var gameState=PLAY;
var Door,DoorImage;
var left,right,lefrImage,RightImage;
var DoorGroup;

function preload(){
  GhostImage = loadImage("ghost-standing.png");
  TowerImage = loadImage("tower.png");
  DoorImage = loadImage("door.png");
  leftImage = loadImage("left arrow.png");
  RightImage = loadImage("right arrow.jpg");
}



function setup(){
createCanvas(600,600);
  Tower = createSprite(300,300);
  Tower.addImage(TowerImage);
  Ghost = createSprite(300,500);
  Ghost.addImage(GhostImage);
  left = createSprite(200,200);
  left.addImage(leftImage);
  right = createSprite(400,200);
  right.addImage(RightImage);
  Ghost.scale = 0.3
  Tower.scale = 0.9
  right.scale = 0.4
  left.scale = 0.1
  Tower.velocityY = 3;
  DoorGroup = new Group();
}

function draw(){
background("black");
  
  if(gameState==PLAY){
  
  if (keyDown("left_arrow")){
    Ghost.x = Ghost.x -5;
  }
  if (keyDown("right_arrow")){
    Ghost.x = Ghost.x +5;
  }
  doors();
  if (Tower.y>600){
    Tower.y = 400;
  }
    if (mousePressedOver(right)) {
    ( Ghost.x = Ghost.x +5);
    }
    
    if (mousePressedOver(left)) {
    ( Ghost.x = Ghost.x -5);
    }
  if(DoorGroup.isTouching(Ghost)||Ghost.y>600){
    gameState = END;
  }
 
  drawSprites();
}
   if(gameState==END){
    background("black");
     textSize(40);
     fill("blue");
     stroke("Black");
     text("GAME OVER",200,200)
     text("RETRY AGAIN",200,300)
  }
  
}

function doors(){
  if (frameCount % 100 ==0 ){
    Door = createSprite(Math.round(random(100,500)),-50)
    Door.addImage(DoorImage);
    Door.velocityY = 3;
    Door.scale = 0.10
    Door.lifetime = 250;
    Door.depth = Ghost.depth
    Ghost.depth +=1 ;
    DoorGroup.add(Door);
  }
}
