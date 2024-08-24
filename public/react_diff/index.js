

let grid;
let next;

let dA = 1.0;
let dB = 0.5;
let feed = 0.055;
let k = 0.062;

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  grid = [];
  next = [];
  
  // Initialize the grid
  for (let x = 0; x < width; x++) {
    grid[x] = [];
    next[x] = [];
    for (let y = 0; y < height; y++) {
      grid[x][y] = { a: 1, b: 0 };
      next[x][y] = { a: 1, b: 0 };
    }
  }
  
  // Add some initial random B substance in the center
  for (let i = 190; i < 210; i++) {
    for (let j = 190; j < 210; j++) {
      grid[i][j].b = 1;
    }
  }
}

function draw() {
  background(51);
  
  // Compute next step for each cell in the grid
  for (let x = 1; x < width - 1; x++) {
    for (let y = 1; y < height - 1; y++) {
      let a = grid[x][y].a;
      let b = grid[x][y].b;
      
      // Laplacian diffusion
      let laplaceA = (
        grid[x-1][y].a +
        grid[x+1][y].a +
        grid[x][y-1].a +
        grid[x][y+1].a -
        4 * a
      );
      let laplaceB = (
        grid[x-1][y].b +
        grid[x+1][y].b +
        grid[x][y-1].b +
        grid[x][y+1].b -
        4 * b
      );
      
      // Reaction-Diffusion equations
      let newA = a + (dA * laplaceA - a * b * b + feed * (1 - a));
      let newB = b + (dB * laplaceB + a * b * b - (k + feed) * b);
      
      next[x][y].a = constrain(newA, 0, 1);
      next[x][y].b = constrain(newB, 0, 1);
    }
  }
  
  // Update the grid and display the results
  loadPixels();
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let pix = (x + y * width) * 4;
      let a = next[x][y].a;
      let b = next[x][y].b;
      let c = floor((a - b) * 255);
      c = constrain(c, 0, 255);
      
      pixels[pix + 0] = c;
      pixels[pix + 1] = c;
      pixels[pix + 2] = c;
      pixels[pix + 3] = 255;
    }
  }
  updatePixels();
  
  // Swap grids
  let temp = grid;
  grid = next;
  next = temp;
}
