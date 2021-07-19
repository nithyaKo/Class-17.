var box;

function setup() 
{
  createCanvas(400, 400);
  box = new Box(100,200,20,20,2);
  box1=new Box(45,32,9,6,4)
}

function draw() 
{
  background(220);
  box.show();
  box.move();

  box1.show()
  box1.move()
}




