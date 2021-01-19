var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var survivalTime;

function preload(){
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,330,20,20);
  monkey.addAnimation("monkey", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,370,600,20);
  ground.velocityX=-3
                    
  survivalTime=0;
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
 }


function draw() {
  background(180);
  //jump when space bar is pressed
  if(keyDown("space")) {
        monkey.velocityY = -12;
    }
  
  //setting the gravity
   monkey.velocityY = monkey.velocityY + 0.8
  
  //making the monkey collide with the ground
  monkey.collide(ground);
  
  //resetting the ground after it crosses the canvas
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //spawn the banana
  spawnFood();
  
  //spawn the obstacles
  spawnObstacles();
  
  //Displaying survival time
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black");
  textSize("20");
  fill("stroke");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,50);
  
  
  drawSprites();
  
}

function spawnFood(){
  if(frameCount%80===0){
    var banana=createSprite(300,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale=0.1
    banana.velocityX=-3;
    
    //setting lifetime to bananas
    banana.lifetime=100;
    
    bananaGroup.add(banana);
     
  }
    
  }


function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(300,330,10,40);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX=-3;
    obstacle.scale=0.2;
    obstacle.lifetime=100;
    
       obstacleGroup.add(obstacle);
     }
}






