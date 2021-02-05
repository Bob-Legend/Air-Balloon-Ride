var balloon, backgroundImage, balloonImage


function preload() {
  backgroundImage = loadImage("HotAirBallon-01.png");
  balloonImage = loadAnimation("HotAirBallon-02.png", "HotAirBallon-03.png","HotAirBallon-04.png")
}


function setup() {
  createCanvas(500,500);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.3;
}

function draw() {
  background(backgroundImage);  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x-10;
  }

  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10;
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y-10;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y+10;
  }

  drawSprites();
}