const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var drops =[];
var maxDrops = 100;
var tb1, tb2, tb3, tb4;
var walking, man;
var ground, groundImg;

function preload(){
    t1 = loadImage("images/thunderbolt/1.png");
    t2 = loadImage("images/thunderbolt/2.png");
    t3 = loadImage("images/thunderbolt/3.png");
    t4 = loadImage("images/thunderbolt/4.png");
    walking = loadAnimation("images/Walking Frame/walking_1.png", "images/Walking Frame/walking_2.png", "images/Walking Frame/walking_3.png", "images/Walking Frame/walking_4.png", "images/Walking Frame/walking_5.png", "images/Walking Frame/walking_6.png", "images/Walking Frame/walking_7.png", "images/Walking Frame/walking_8.png");
    groundImg = loadImage("images/ground.png")
}

function setup(){
createCanvas(400, 600);

engine = Engine.create();
world = engine.world;

ground = createSprite(200, 590, 200, 20);
ground.addImage("gro", groundImg);
ground.scale = 0.3;
ground.velocityX = -2;

man = createSprite(200, 460, 20, 20);
man.addAnimation("walk", walking);
man.scale = 0.4;

umbrella = new Umbrella(200, 400)

for(var i = 0; i< maxDrops; i++){
    drops.push(new Drop(random(0,400),  random(0, 400)));
}

drops.pop();

}

function draw(){
    background("black");
    Engine.update(engine);

    console.log(ground.x);
    umbrella.display();
    
    for(var i = 0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }

    if(frameCount % 80 === 0) {
        var thunder = createSprite(random(10, 370), 40,20,20);
    
        var rand = Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(t1);
                  break;
          case 2: thunder.addImage(t2);
                  break;
          case 3: thunder.addImage(t3);
                  break;
          case 4: thunder.addImage(t4);
                  break;
          default: break;
        } 
        thunder.scale = 0.7;
        thunder.lifetime = 80;
    }

    if(ground.x <0){
        ground.x = 200;
    }

    drawSprites();
}       