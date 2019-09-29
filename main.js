let player;
let ground;
let mario;
let gravity;
let square;
let plants = [];
function preload()
{
  mario = loadImage('http://localhost:8080/dino/graphics/run_2.png');
  square = loadImage('http://localhost:8080/dino/graphics/square.png');
}
function setup()
{
  setFrameRate(24);
  imageMode(CENTER);
  rectMode(CENTER);
  createCanvas(window.windowWidth,400);
  ground = new Actor(width/2,380,window.windowWidth,20,100,100,square);
  ground.animation.setFramesPerRow(1);
  gravity = createVector(0,1);
  player = new Player(100,0,
                      415*0.33,507*0.33);
  player.animation.setFrameSize(createVector(415,507));
  player.animation.setDrawSize(createVector(415*0.33,507*0.33));
  player.animation.setFramesPerRow(10);
  player.animation.setTexture(mario);
  for(let i=0;i<3;i++)
  {
    plants.push(new Plant(window.windowWidth+random(300,350)*i));
    plants[plants.length-1].applyForce(createVector(-10,0));
  }
}
function draw()
{
  background(51);
  player.update();
  player.show_test();
  player.show();
  ground.animation.update(createVector(0,380));
  ground.show_test();
  for(plant of plants)
  {
    plant.update();
    plant.show_test();
  }
}
