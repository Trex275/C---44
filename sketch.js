const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

function setup() {
  createCanvas(600, 600);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  //top to bottom
  maze1 = new Maze(10, 80, 10, 140);
  maze3 = new Maze(63, 15, 100, 10);
  maze6 = new Maze(107, 60, 10, 80);
  maze8 = new Maze(127, 105, 50, 10);
  maze10 = new Maze(152, 86, 10, 50);
  maze13 = new Maze(270, 66, 250, 10);
  maze14 = new Maze(400, 86, 10, 50);
  maze17 = new Maze(430, 105, 50, 10);
  maze18 = new Maze(460, 60, 10, 100);
  maze20 = new Maze(520, 15, 130, 10);
  maze21 = new Maze(588, 80, 10, 140);
  maze23 = new Maze(270, 100, 160, 10);
  maze26 = new Maze(230, 120, 80, 10);
  maze28 = new Maze(195, 110, 10, 10);
  //bottom to top
  maze2 = new Maze(300, 595, 600, 10);
  maze4 = new Maze(5, 540, 10, 130);
  maze5 = new Maze(5, 362, 10, 80);
  maze7 = new Maze(54, 320, 120, 10);
  maze9 = new Maze(89, 310, 49, 10);
  maze11 = new Maze(69, 280, 10, 50);
  maze12 = new Maze(32, 260, 66, 10);
  maze15 = new Maze(32, 227, 66, 10);
  maze16 = new Maze(32, 187, 66, 10);
  maze19 = new Maze(70, 207, 10, 50);
  maze22 = new Maze(595, 540, 10, 130);
  maze24 = new Maze(595, 362, 10, 80);
  maze25 = new Maze(554, 320, 120, 10);
  maze27 = new Maze(489, 310, 49, 10);
}

function draw() {
  background(0, 0, 0);
  fill("purple");
  maze1.display();
  maze2.display();
  maze3.display();
  maze4.display();
  maze5.display();
  maze6.display();
  maze7.display();
  maze8.display();
  maze9.display();
  maze10.display();
  maze11.display();
  maze12.display();
  maze13.display();
  maze14.display();
  maze15.display();
  maze16.display();
  maze17.display();
  maze18.display();
  maze19.display();
  maze20.display();
  maze21.display();
  maze22.display();
  maze23.display();
  maze24.display();
  maze25.display();
  maze26.display();
  maze28.display();
  maze27.display();
  textSize(15);
  text(mouseX + ":" + mouseY, mouseX, mouseY);

}