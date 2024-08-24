
let trix = 8;
let triy = 8;

function setup() {
  createCanvas(400, 400);
}

function draw() {
    // background(220);
  let regen = document.getElementById("regen").value;
  let zon = document.getElementById("zon").value;
  let wind = document.getElementById("wind").value;
  
  let regenhz = map(regen, 0, 20, 2, 2000);
  let zonhz = map(zon, 0, 20, 2, 2000);
  let windhz = map(wind, 0, 20, 2, 2000);

  let triColor1 = 0;
  let triColor2 = 0;



  for (let x = -1; x < trix; x++){
    for (let y = 0; y < triy; y++){

    let r = floor(random(0, regenhz));
    if (r){
      if (r == 1){
        triColor1 = "#ff0000";
      } 
      else if (r == 2){
        triColor2 = "#ff0000";
      }
    }

    r = floor(random(0, zonhz));
    if (r){
      if (r == 1){
        triColor1 = "#00ff00";
      } 
      else if (r == 2){
        triColor2 = "#00ff00";
      }
    }

    r = floor(random(0, windhz));
    if (r){
      if (r == 1){
        triColor1 = "#0000ff";
      } 
      else if (r == 2){
        triColor2 = "#0000ff";
      }
    }

    let sizeX = width / trix;
    let sizeY = height / triy;

      fill(triColor1);
      triangle(x*sizeX, y*sizeY, 
        x*sizeX+sizeX, y*sizeY, 
        x*sizeX+(sizeX/2), y*sizeY+sizeY);

      fill(triColor2);
      triangle(x*sizeX+(sizeX/2), y*sizeY+sizeY,
        x*sizeX+sizeX, y*sizeY,
        x*sizeX+(sizeX/2)+sizeX , y*sizeY+sizeY);
    }
  }

  
}

// class Walker {
//   constructor(x, y, stepSize) {
//
//     this.x1 = x;
//     this.x2 = x;
//     this.x3 = x;
//     this.x4 = x;
//
//     this.y1 = y;
//     this.y2 = y;
//     this.y3 = y;
//     this.y4 = y;
//
//     this.stepSize = stepSize;
//   }
//
//   update() {
//     // Move walker randomly within the step size
//     this.x1 += random(-this.stepSize, this.stepSize);
//     this.y1 += random(-this.stepSize, this.stepSize);
//     this.x2 += random(-this.stepSize, this.stepSize);
//     this.y2 += random(-this.stepSize, this.stepSize);
//     this.x3 += random(-this.stepSize, this.stepSize);
//     this.y3 += random(-this.stepSize, this.stepSize);
//     this.x4 += random(-this.stepSize, this.stepSize);
//     this.y4 += random(-this.stepSize, this.stepSize);
//
//     // Constrain to the canvas
//     this.x1 = constrain(this.x1, 0, width);
//     this.y1 = constrain(this.y1, 0, height);
//     this.x2 = constrain(this.x2, 0, width);
//     this.y2 = constrain(this.y2, 0, height);
//     this.x3 = constrain(this.x3, 0, width);
//     this.y3 = constrain(this.y3, 0, height);
//     this.x4 = constrain(this.x4, 0, width);
//     this.y4 = constrain(this.y4, 0, height);
//
//   }
//
//   show(c) {
//     stroke(c);
//     strokeWeight(2);
//     // point(this.x, this.y);
//     // curve(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4)
//     bezier(this.x1, this.y1, this.x2, this.y2,this.x3, this.y3,this.x4, this.y4);
//   }
// }
