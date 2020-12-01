
var car,wall;
var car1,wall1;
var car2,wall2;
var spped,weight;


function setup() {
  createCanvas(1600,400);
 car = createSprite (50, 200, 50, 50);
 wall = createSprite(1500,200,60,height/2);
 car1= createSprite(50,300,50,50);
 wall1 = createSprite(1500,400,60,height/2);
 car2 = createSprite(50,400,50,50)
 wall2 = createSprite(1500,600,60,height/5);
 speed  =random(55,90);
 weight = random(1500,200,60,height/5);
 car.velocityX = speed;
 car1.velocityX = speed;
 car2.velocityX = speed;
}


function draw() {
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX = 0;
    car1.velocityX=0;
    car2.velocityX = 0;
     var deformation =0.5*weight*speed*speed/22509
     if (deformation>180){
       car.shapeColor = color(250,0,0);
     }
     if(deformation<180&&deformation>100){
      car1.shapeColor = color(230,230,0);
    }
     if(deformation<100){
       car2.shapeColor = color(0,255,0);
     }
    }


    
  background(255,255,255);  
  drawSprites();
}