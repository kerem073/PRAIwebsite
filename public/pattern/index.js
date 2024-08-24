

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(255);
    let regen = document.getElementById("regen").value;
    let cx = width/2;
    let cy = height/2;
    // let radius = map(regen, 0, 100, 84, 55);
    let radius = 84;
    let anchor_offset = 46;

    // eerste lijn
    let p1x1 = cx + radius;
    let p1y1 = cy + anchor_offset;

    let p1x2 = cx + radius;
    let p1y2 = cy;

    let p1x3 = cx;
    let p1y3 = cy + radius;

    let p1x4 = cx + anchor_offset;
    let p1y4 = cy + radius;

    // tweede lijn
    let p2x1 = cx - anchor_offset;
    let p2y1 = cy + radius;

    let p2x2 = cx;
    let p2y2 = cy + radius;

    let p2x3 = cx - radius;
    let p2y3 = cy;

    let p2x4 = cx - radius;
    let p2y4 = cy + anchor_offset;

    // derde lijn
    let p3x1 = cx - radius;
    let p3y1 = cy - anchor_offset;

    let p3x2 = cx - radius;
    let p3y2 = cy;

    let p3x3 = cx;
    let p3y3 = cy - radius;

    let p3x4 = cx - anchor_offset;
    let p3y4 = cy - radius;

    // vierde lijn
    let p4x1 = cx + anchor_offset;
    let p4y1 = cy - radius;

    let p4x2 = cx;
    let p4y2 = cy - radius;

    let p4x3 = cx + radius;
    let p4y3 = cy;

    let p4x4 = cx + radius;
    let p4y4 = cy - anchor_offset;


    p3x3 = cx;
    p3y3 = map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p4x2 = cx;
    p4y2 = map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p3x4 = map(regen, 0 , 100, cx - anchor_offset, cx);
    p3y4 = map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p4x1 = map(regen, 0, 100, cx + anchor_offset ,cx);
    p4y1 = map(regen, 0, 100, cy - radius, cy - (radius + 70));

    bezier(p1x2, p1y2, p1x1, p1y1, p1x4, p1y4, p1x3, p1y3);
    bezier(p2x2, p2y2, p2x1, p2y1, p2x4, p2y4, p2x3, p2y3);
    bezier(p3x2, p3y2, p3x1, p3y1, p3x4, p3y4, p3x3, p3y3);
    bezier(p4x2, p4y2, p4x1, p4y1, p4x4, p4y4, p4x3, p4y3);

    if (regen < 70){
        let line_offset = 10;
        let line_length = map(regen, 0, 70, 35, 0);
        line(cx, cy + radius + line_offset, cx, cy + radius + line_offset + line_length);
        line(cx, cy - (radius + line_offset), cx, cy - (radius + line_offset + line_length));
        line(cx + radius + line_offset, cy, cx + radius + line_offset + line_length, cy);
        line(cx - (radius + line_offset), cy, cx - (radius + line_offset + line_length), cy);

    }
}
