var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  


  car = createSprite(100,100,50,50);
car.shapeColor="blue";
car.velocityX=3;
wall= createSprite(400,100,50,150);
wall.shapeColor="pink";


}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;




  bounceOff(car,wall);



 if(isTouching(car,wall)){
car.shapeColor="yellow"


 }
 else{
car.shapeColor="white"
 }
  
if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="blue"

}
else{
  movingRect.shapeColor="green"

}


  drawSprites();
}

