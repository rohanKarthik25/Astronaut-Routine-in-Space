
let background,bgGround;
let astronaut;
let sleep;
let brush;
let gym;
let eat;
let drink;
let move;

function preload() {

bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");

astronaut.bounceOff(edges);
}

function setup() {

createCanvas(800,800);

bgGround = createSprite(400,400,50,50);
bgGround.addImage(bg);
bgGround.scale = 0.215

astronaut = createSprite(400,500);
astronaut.addAnimation("sleeping",sleep);
astronaut.scale = 0.1;

astronaut.depth = bgGround.depth
astronaut.depth = bgGround.depth + 2
  
}

function draw() {

textSize(15)
text("USE Arrow keys and Space key to see the routine of a astronaut",400,300)

if(keyDown(UP_ARROW)){
astronaut.addAnimation("brushing",brush)
astronaut.changeAnimation("brushing")
astronaut.x = 350;
astronaut.y = 500;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown(DOWN_ARROW)){
astronaut.addAnimation("gymming",gym)
astronaut.changeAnimation("gymming")
astronaut.x = 400;
astronaut.y = 500;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown(LEFT_ARROW)){
astronaut.addAnimation("eating",eat)
astronaut.changeAnimation("eating")
astronaut.x = 200;
astronaut.y = 500;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}
if(keyDown(RIGHT_ARROW)){
astronaut.addAnimation("drinking",drink)
astronaut.changeAnimation("drinking")
astronaut.x = 200;
astronaut.y = 500;
astronaut.velocityX = 0;
astronaut.velocityY = 0;
}

if(keyDown("space")){
astronaut.addAnimation("moving",move)
astronaut.changeAnimation("moving")
astronaut.velocityX = 1
astronaut.velocityY = -1
}

drawSprites();

}