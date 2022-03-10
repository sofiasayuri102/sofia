var caixa
function setup() {
  createCanvas(600,400);
  caixa=createSprite(200,200,20,20)
}

function draw() 
{
  background(30);
  if(keyDown(RIGHT_ARROW))
  {caixa.x=caixa.x+5}
  if(keyDown(LEFT_ARROW))
  {caixa.x=caixa.x-5}
  if(keyDown(UP_ARROW))
  {caixa.y=caixa.y-5}
  if(keyDown(DOWN_ARROW))
  {caixa.y=caixa.y+5}


drawSprites();
}




