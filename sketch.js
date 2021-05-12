const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,polygon;
var platform;
var slingshot;

function preload() {
}

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(390,height - 100,200,20);
    stand2 = new Ground(650,height - 200,200,20);

    box1 = new Block(330, 235, 30, 40);
    box2 = new Block(360, 235, 30, 40);
    box3 = new Block(390, 235, 30, 40);
    box4 = new Block(420, 235, 30, 40);
    box5 = new Block(450, 235, 30, 40);
    box6 = new Block(360, 195, 30, 40);
    box7 = new Block(390, 195, 30, 40);
    box8 = new Block(420, 195, 30, 40);
    box9 = new Block(390, 185, 30, 40);
    box10 = new Block(590, 135, 30, 40);
    box11 = new Block(620, 135, 30, 40);
    box12 = new Block(650, 135, 30, 40);
    box13 = new Block(680, 135, 30, 40);
    box14 = new Block(710, 135, 30, 40);
    box15 = new Block(620, 85, 30, 40);
    box16 = new Block(650, 85, 30, 40);
    box17 = new Block(680, 85, 30, 40);
    box18 = new Block(650, 55, 30, 40);

    platform = new Ground(400,400,800,5);
  
    polygon = new Polygon(100, 280, 40);
    slingshot = new SlingShot(polygon.body, {x: 150, y: 150});
}

function draw(){
    background(255);
    Engine.update(engine);
    strokeWeight(4);
    stand1.display();
    stand2.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    polygon.display();

    platform.display();
    slingshot.display();

    textSize(20);
    fill("black");
    text("Press Sapce To Play Again",500,30);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingshot = new SlingShot(polygon.body, {x: 150, y: 150});
    }
  }
    