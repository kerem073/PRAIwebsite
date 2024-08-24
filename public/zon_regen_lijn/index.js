

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(255);
    let cx = width/2;
    let cy = height/2;
    let d = 50;

    let sun_index = document.getElementById("sun_slider").value;
    console.log(sun_index);


    curve(
        cx - d,
        (sun_index + cy) / 50,
        cx - d,
        cy,
        cx + d,
        cy,
        cx + d,
        (sun_index + cy) / 50
    );
    // curve(cx -d, cy + 260, cx - d, cy, cx + d, cy, cx + d, cy + 260);
}
