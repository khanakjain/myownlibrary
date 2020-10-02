var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(40,20,30,30);
  obj1.shapeColor = "green";
  
  obj2 = createSprite(100,20,30,30);
  obj2.shapeColor = "green";

  obj3 = createSprite(180,20,30,30);
  obj3.shapeColor = "green";

  obj4 = createSprite(240,20,30,30);
  obj4.shapeColor = "green";


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  obj1.x = World.mouseX;
  obj1.y = World.mouseY;

  if(isTouching(obj1,obj2))
  {
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }

  else{
    obj1.shapeColor = "green";
    obj2.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);


  
  drawSprites();
}




















