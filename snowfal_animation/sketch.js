const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var engine,world;
 var ice=[];

function preload(){

bgI=loadImage("snow4.png");
shivaI = loadAnimation("shiva.png");
flakeI = loadImage("snow4.webp");
kidsI = loadImage("kids2.png");
kids1I = loadImage("kids1.png");
kids2I = loadImage("kids3.png");
snowmanI = loadImage("snowman.png");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
    world = engine.world;
    
    shiva = createSprite(180,310,20,20);
    shiva.addAnimation("walking",shivaI);
    shiva.scale = 0.4;

    kids = createSprite(380,305,20,20);
    kids.addImage(kidsI);
    kids.scale=0.5;

    kids1 = createSprite(550,305,20,20);
    kids1.addImage(kids1I);
    kids1.scale=0.5;

    kids2 = createSprite(100,305,20,20);
    kids2.addImage(kids2I);
    kids2.scale=0.8;

    snowman = createSprite(730,310,20,20);
    snowman.addImage(snowmanI);
    snowman.scale=0.5;


    for (var o = 10; o <=width ; o=o+400) 
  {
    ice.push(new Ice(o,40));
    
  }
    
}


function draw() {
  background(bgI);
  Engine.update(engine);
  if(keyDown("left_arrow")){
    shiva.x= shiva.x-2;
  }
  if(keyDown("right_arrow")){
    shiva.x= shiva.x+2;
  }
  for (var o = 0; o < ice.length; o++){
    ice[o].display();
   
  }
  if(frameCount % 20===0){
    ice.push(new Ice(random(100,900),10,10))
  
    }

   
  drawSprites();
}