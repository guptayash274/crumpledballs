
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var litter;
var dust;
var dust1;
var dust2;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
}
function draw() {
  background("black");
  drawSprites();
}



