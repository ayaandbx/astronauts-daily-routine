var bath,drink,gym,gym2,eat,move,brush,sleep,move2;
var iss,issImg;
var astronaut;
function preload(){
    createCanvas(400,400);
    bath = loadAnimation("bath1.png", "bath2.png");
    brush = loadImage("brush.png");
    drink = loadAnimation("drink1.png", "drink2.png");
    gym = loadAnimation("gym1.png", "gym2.png");
    gym2 = loadAnimation("gym11.png", "gym12.png");
    eat = loadAnimation("eat1.png", "eat2.png");
    move = loadAnimation("move.png", "move1.png");
    sleep = loadImage("sleep.png");
    issImg = loadImage("iss.png");
    move2 = loadImage("move.png");
}
function setup(){
    iss = createSprite(200,200,20,20);
    iss.addImage("issImgs", issImg);
    iss.scale = 0.09;

    astronaut = createSprite(200,200,20,20);
    astronaut.scale = 0.1;
    astronaut.addImage("image", move2);
}
function draw(){
    background("white");
    if(keyDown("left")){
        astronaut.addAnimation("move", move);
        astronaut.x = astronaut.x - 3;
    }
    if(keyDown("right")){
        astronaut.changeAnimation("move", move);
        astronaut.x = astronaut.x + 3;
    }
    if(keyDown("up")){
        astronaut.changeAnimation("eat", eat);
    }
    if(astronaut.x > 400){
        astronaut.x = 380;
    }
    if(astronaut.x < 0){
        astronaut.x = 20;
    }
    drawSprites();
}