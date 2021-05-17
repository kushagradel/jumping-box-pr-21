var canvas;
var music;
var block1;
var block2;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
block1 = createSprite(0,580,360,30)
block1.shapeColor = "blue";

block2 = createSprite(295,580,200,30)
block2.shapeColor = "orange";

block3 = createSprite(462,580,200,30)
block3.shapeColor = "red";

block4 = createSprite(689,580,200,30)
block4.shapeColor = "green";


    //create box sprite and give velocity
ball = createSprite(random(20,750),100,50,50);
ball.shapeColor=rgb(255,255,255);
ball.velocityX= 2 ;
ball.velocityY= 3;

}

function draw() {
    background(rgb(169,169,169));
    
    //create edgeSprite
  edges=createEdgeSprites();
  


    //add condition to check if box touching surface and make it box
   if(block1.isTouching(ball) && ball.bounceOff(block1)){
    ball.shapeColor="blue";
     music.play();
   }

   if(block2.isTouching(ball) && ball.bounceOff(block2)){
    ball.shapeColor="orange";
    ball.velocityX=0;
    ball.velocityY =0;
    music.stop();
   }
   if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor="red";
    music.play();
   }
   if(block4.isTouching(ball) && ball.bounceOff(block4)){
    ball.shapeColor="green";
    music.play();
   }

   ball.bounceOff(edges);
   ball.bounceOff(block1);
   ball.bounceOff(block2);
   ball.bounceOff(block3);
   ball.bounceOff(block4);
    drawSprites();
}
