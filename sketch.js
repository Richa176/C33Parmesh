const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;


var engine,world;
var snow=[];
var snowf;
var bgimg;

function preload(){
  bgimg = loadImage("snow1.jpg");  
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  if(frameCount % 50 === 0){
    for( var i=0; i<200; i++) {
     snow.push (new createSnow(random(0,1200),random(0,1200)) ); 
  }
}
}

function draw() {
  background(bgimg);
  Engine.update(engine);

  for (var i=0; i<200; i++){
    snow[i].display();
    snow[i].updateY();
   }

  // snowf= new snow();
  // //snowf= new snow(random(0,1200),random(0,1200));
  // snowf.display();
  
  
}