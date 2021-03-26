
var monke , monkey_running
var bana ,banaImage, rok, rokImage
var FoodGroup, rokGroup
var score, ground
var survivalTime

function preload(){
  
  
  monke_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  banaImage = loadImage("banana.png");
  rokImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  rokGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,10)
  
   monke=createSprite(90,370,10,10)
  monke.addAnimation("monkey_running",monke_running)
  monke.scale=0.1
  
  
  

  }
function draw() {
  background("lime")
  
  if(keyDown("space")&&monke.y >= 350){
    monke.velocityY=-10
  }
  monke.velocityY = monke.velocityY + 0.3
  monke.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monke.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  bana=createSprite(670,Math.round(random(170,230)),10,10)
  bana.addImage(banaImage)
  bana.scale=0.1
  bana.velocityX=-3
  FoodGroup.add(bana)
}

function stones(){
  rok=createSprite(670,380,10,10)
  rok.addImage(rokImage)
  rok.velocityX=-4
  rok.scale=0.2
  rokGroup.add(rok)
}






