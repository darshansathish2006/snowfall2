const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var backgroundImg;
var snowflake1,snowflake2;
var ice =[];

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  flakeImg = loadImage("snow4.webp");
  flakeIMg = loadImage("snow5.webp");
}

function setup() {
  var canvas = createCanvas(800,400);

   engine=Engine.create();
   world=engine.world;

   ground = createSprite(650,670);
   ground.velocityX=-10;
   /*
 snowflake1=createSprite((random(10,790)),100,50,50);
  snowflake1.addImage(flakeImg);
 snowflake1.scale = 0.08;
  snowflake1.velocityY = (6);

  snowflake2=createSprite((random(05,790)),100,50,50);
  snowflake2.addImage(flakeIMg);
  snowflake2.scale = 0.08;
  snowflake2.velocityY = (6);
*/
  if(frameCount%275 === 0){
    for(var i = 0; i<100;i++){
      ice.push(new Snow(random(0,1350),random(0,50)));
    }
  }

}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  for(var i = 0;i<100;i++){
    ice[i].display();
    ice[i].changePosition();
  }

  //snowflake1.display();
  //snowflake2.display();
  drawSprites();
}
