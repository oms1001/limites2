let adri1 = 80;
let adri2 = 1500;
let adri3 = 14;
let adri4 = 300;
let adri5 = 400;
let adri6 = 500;

function setup() {
  createCanvas(displayWidth, displayHeight);
  adri1 = random(displayHeight)
  adri2 = random(displayHeight)
  adri3 = random(displayHeight)
  adri4 = random(displayHeight)
  adri5 = random(displayHeight)
  adri6 = random(displayHeight)
}

function draw() {
 
  background(0,0,0)
  fill(2, 8, 96);
  beginShape();
  vertex(0, displayHeight/2);
  vertex(500, displayHeight/4);
  vertex(mouseX, displayHeight/2)
  vertex(400, displayHeight/4)
  vertex(350, displayHeight/2)
  vertex(mouseX, displayHeight/4)
  vertex(200, displayHeight/2)
  vertex(adri1, mouseY)
  vertex(adri2, displayHeight/2)
  vertex(displayWidth, displayHeight/4)
  endShape(CLOSE);
}