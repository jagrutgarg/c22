const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine;
var world;
var ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    var options = {
        isStatic : true
    }
    ground = Bodies.rectangle(100,400,200,20,options);
    World.add(world,ground);
    var ball_options = {
        restitution : 1.0
    }
    ball = Bodies.circle(100,70,20,ball_options);
    World.add(world,ball);
    //console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,50,50);
    ellipse(ball.position.x,ball.position.y,20,20);
}
