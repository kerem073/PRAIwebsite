

function setup() {
    createCanvas(400,400);
}

function draw() {
    let cx = width/2;
    let cy = height/2;
    let d = 5;
    arc(cx + d, cy + d, 50, 50, 0, HALF_PI, CHORD);
    arc(cx - d, cy + d, 50, 50, HALF_PI, PI, CHORD);
    arc(cx - d, cy - d, 50, 50, PI, PI + HALF_PI, CHORD);
    arc(cx + d, cy - d, 50, 50, PI + HALF_PI , TWO_PI, CHORD);

}
