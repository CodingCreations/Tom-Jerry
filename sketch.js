
var cat;
var mouse;

function preload() {
    //load the images here
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png");
    mouseImg3 = loadAnimation("images/mouse3.png");

}

function setup(){
    createCanvas(1600, 1000);
    //create tom and jerry sprites here
    var tom = createSprite(200, 500);
    tom.addAnimation("mouseHappy", mouseImg1);
    tom.changeAnimation("mouseHappy");
    tom.depth = 2;
    tom.scale = 0.2;

    var jerry = createSprite(1000, 500, 50, 50);
    jerry.addAnimation("catHappy", catImg1);
    jerry.depth = 1;
    jerry.scale = 0.2;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

  

        

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyDown === LEFT_ARROW){

    mouse.addAnimation("mouseTeasing", mouseImg3);
    mouse.changeAnimation("mouseTeasing");
    mouse.frameDelay = 25;

  }

}
