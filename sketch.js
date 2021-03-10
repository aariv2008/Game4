function preload()
{
 backImg=loadImage("backgroundimg.png")
  baloonImg=loadImage("baloonimg.png")
}
function setup() {
  createCanvas(1500,650);
  ball=createSprite(400, 200, 50, 50);
 
}

function draw() {
  background(backImg);  

  ball.addAnimation("baloon",baloonImg)
  ball.scale=0.5
if(keyCode==DOWN_ARROW){
  ball.y=ball.y+1
  ball.x=ball.x
}
else  if(keyCode==UP_ARROW){
    ball.y=ball.y-1
    ball.x=ball.x
  }
    else if(keyCode==LEFT_ARROW){
      ball.y=ball.y
      ball.x=ball.x-1
    }

  else if (keyCode==RIGHT_ARROW){
ball.y=ball.y
ball.x=ball.x+1
  }
fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);
 edges=createEdgeSprites()
  
 drawSprites();
 ball.bounceOff(edges)
}