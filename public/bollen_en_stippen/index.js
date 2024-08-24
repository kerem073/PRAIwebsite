let rainml = 11;

let lat = 51.7;
let long = 5.3;

let date = Date.now(); // Date and hour


function setup() {
    createCanvas(400,400);
}

function draw() {
    background(255);

    let temp = document.getElementById("temp").value;
    let circleOffset = document.getElementById("ball_offset").value;
    let circleSize = document.getElementById("ball_size").value;
    let circleFill = document.getElementById("ball_fill").checked;

    let centerX = 200;
    let centerY = 200;
    let balls = Math.floor(temp / 5);
    let sticks = temp % 5;
    let offsetX = 0;
    let offsetY = 0;

    if (circleFill){
        fill(255);
    } else {
        fill(0,50);
    }


    // for (let i = 0; i < sticks; i++){
    //     line(i * circleSize + 10, circleOffset, i * 20, 50);
    // }

    switch (sticks) {
        case 1:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);

            rotate(180);
            line(0, 50, 0, 70);
            pop();
            break;
        case 2:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);

            rotate(180);
            rotate(45);
            line(0, 50, 0, 70);
            rotate(-90);
            line(0, 50, 0, 70);

            pop();
            break;
        case 3:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);

            rotate(90);
            rotate(45);
            line(0, 50, 0, 70);
            rotate(45);
            line(0, 50, 0, 70);
            rotate(45);
            line(0, 50, 0, 70);

            pop();
            break;
        case 4:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);

            rotate(90);
            rotate(36);
            line(0, 50, 0, 70);
            rotate(36);
            line(0, 50, 0, 70);
            rotate(36);
            line(0, 50, 0, 70);
            rotate(36);
            line(0, 50, 0, 70);

            pop();
            break;
    }


    switch (balls){
        case 1:
            circle(centerX, centerY, circleSize);
            break;
        case 2:

            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(180);
            circle(circleOffset, 0, circleSize);
            rotate(180);
            
            pop();
            break;
        case 3:

            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(120);
            circle(circleOffset, 0, circleSize);
            rotate(120);
            circle(circleOffset, 0, circleSize);
            rotate(120);
            
            pop();
            break;
        case 4:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(90);
            circle(circleOffset, 0, circleSize);
            rotate(90);
            circle(circleOffset, 0, circleSize);
            rotate(90);
            circle(circleOffset, 0, circleSize);
            rotate(90);
            
            pop();
            break;
        case 5:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            
            pop();
            break;
        case 6:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            circle(circleOffset, 0, circleSize);
            rotate(72);
            
            circle(0, 0, circleSize);
            pop();
            break;
        case 7:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            
            pop();
            break;
        case 8:
            push();
            translate(width/2, height/2);
            angleMode(DEGREES);
            rotate(-90);

            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            circle(circleOffset, 0, circleSize);
            rotate(60);
            
            circle(0, 0, circleSize);
            pop();
            break;
        default:
            break;
    }
}
