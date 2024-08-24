let franticWalker;
let mildWalker;
let veryMildWalker;

function setup() {
  createCanvas(400, 400);
  // Initialize walkers with different step sizes
  franticWalker = new Walker(width/2, height/2, 20);
  mildWalker = new Walker(width/3, height/3, 5);
  veryMildWalker = new Walker(width/4, height/4, 2);
}

function draw() {
  // background(220);

  // Update and display each walker
  franticWalker.update();
  franticWalker.show(color("#1f42f0"));

  mildWalker.update();
  mildWalker.show(color("#ffdb38"));

  veryMildWalker.update();
  veryMildWalker.show(color("#878787"));

    franticWalker.stepSize = document.getElementById("stepSizeFrantic").value;
    mildWalker.stepSize = document.getElementById("stepSizeMild").value;
    veryMildWalker.stepSize = document.getElementById("stepSizeVery").value;


    fill(0,0,0,0);
}

class Walker {
  constructor(x, y, stepSize) {

    this.x1 = x;
    this.x2 = x;
    this.x3 = x;
    this.x4 = x;

    this.y1 = y;
    this.y2 = y;
    this.y3 = y;
    this.y4 = y;

    this.stepSize = stepSize;
  }

  update() {
    // Move walker randomly within the step size
    this.x1 += random(-this.stepSize, this.stepSize);
    this.y1 += random(-this.stepSize, this.stepSize);
    this.x2 += random(-this.stepSize, this.stepSize);
    this.y2 += random(-this.stepSize, this.stepSize);
    this.x3 += random(-this.stepSize, this.stepSize);
    this.y3 += random(-this.stepSize, this.stepSize);
    this.x4 += random(-this.stepSize, this.stepSize);
    this.y4 += random(-this.stepSize, this.stepSize);

    // Constrain to the canvas
    this.x1 = constrain(this.x1, 0, width);
    this.y1 = constrain(this.y1, 0, height);
    this.x2 = constrain(this.x2, 0, width);
    this.y2 = constrain(this.y2, 0, height);
    this.x3 = constrain(this.x3, 0, width);
    this.y3 = constrain(this.y3, 0, height);
    this.x4 = constrain(this.x4, 0, width);
    this.y4 = constrain(this.y4, 0, height);

  }

  show(c) {
    stroke(c);
    let weight = map(this.stepSize, 0, 20, .1, 3);
    let size = map(this.stepSize, 0, 20, 10, 15);
    strokeWeight(weight);
    // point(this.x, this.y);
    // curve(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4)
    
    // bezier(this.x1, this.y1, this.x2, this.y2,this.x3, this.y3,this.x4, this.y4);
    circle(this.x1, this.y1, size);
    // circle(this.x2, this.y2, size);
    // circle(this.x3, this.y3, size);
    // circle(this.x4, this.y4, size);
  }
}
