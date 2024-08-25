var s1 = function( sketch ) {

  sketch.setup = function() {
    let canvas1 = sketch.createCanvas(200,200);
    canvas1.position(sketch.windowWidth/2 - sketch.width/2,0);
  }

  sketch.draw = function() {
    //for canvas 1
    sketch.background(255);

    let x = 0;
    let y = 0;

    let temp = 25;

    let zonduur = document.getElementById("zonschijnduur").value;
    let uv_index = document.getElementById("uv_index").value;

    let regen_milli = document.getElementById("regen_millimeters").value;
    let regen_procent = document.getElementById("regen_procent").value;

    let windrichtig = document.getElementById("windrichting").value;
    let windkracht = document.getElementById("windkracht").value;

    let vochtigheid = document.getElementById("vochtigheid").value;
    let luchtkwalliteit = document.getElementById("luchtkwaliteit").value;

    let offset = 25;

    let ellipse_max_height = 150;
    let stroke_max_width = 25;
    let ellipse_max_width = 20;

    let mapped_zonduur = sketch.map(zonduur, 0, 100, ellipse_max_width, ellipse_max_height);
    let mapped_uv_index = sketch.map(uv_index, 0, 11, 2, stroke_max_width);

    let mapped_regen_milli = sketch.map(regen_milli, 0, 100, 2, stroke_max_width);
    let mapped_regen_procent = sketch.map(regen_procent, 0, 100, ellipse_max_width, ellipse_max_height);

    let mapped_windrichting = sketch.map(windrichtig, 0, 359, ellipse_max_width, ellipse_max_height);
    let mapped_windkracht = sketch.map(windkracht, 0, 100, 2, stroke_max_width);

    let mapped_vochtigheid = sketch.map(vochtigheid, 0, 100, ellipse_max_width, ellipse_max_height);
    let mapped_luchtkwaliteit = sketch.map(luchtkwalliteit, 0, 11, 2, stroke_max_width);

    sketch.fill(0,0,0,0);

    y -= offset * 2

    sketch.push();
    sketch.translate(sketch.width/2, sketch.height/2);
    sketch.angleMode(sketch.DEGREES);
    sketch.rotate(windrichtig);

    // Wind
    sketch.stroke("#8f8f8f");
    sketch.strokeWeight(mapped_windkracht);
    sketch.ellipse(x, y, ellipse_max_width, ellipse_max_width);
    y += offset;

    // Zon
    sketch.stroke("#ffda0a");
    sketch.strokeWeight(mapped_uv_index);
    sketch.ellipse(x, y, mapped_zonduur, ellipse_max_width);
    y += offset;

    // Regen
    sketch.stroke("#140ad1");
    sketch.strokeWeight(mapped_regen_milli);
    sketch.ellipse(x, y, mapped_regen_procent, ellipse_max_width);
    y += offset;

    // Lucht
    sketch.stroke("#7ce0e6");
    sketch.strokeWeight(mapped_luchtkwaliteit);
    sketch.ellipse(x, y, mapped_vochtigheid, ellipse_max_width);
    y += offset;

    sketch.stroke(20);
  }

};

// create a new instance of p5 and pass in the function for sketch 1
new p5(s1);

var s2 = function( sketch ) {

   sketch.setup = function() {
    let canvas2 = sketch.createCanvas(800, 400);
    canvas2.position(sketch.windowWidth/2 - sketch.width/2, 600);
  }

  sketch.draw = function() {
    //for canvas 2
    // let regen = document.getElementById("regen").value;
    let regen = document.getElementById("zonschijnduur").value;
    let rotation = sketch.map(regen, 0, 100, 0, sketch.QUARTER_PI / 2);
    let r  = sketch.map(regen, 0, 100, 255, 0);
    let g  = sketch.map(regen, 0, 100, 204, 102);
    let b  = sketch.map(regen, 0, 100, 0, 255);
    sketch.strokeWeight(6);


    sketch.colorMode(sketch.RGB);
    let c  = sketch.color(r,g,b);
    sketch.background(c);

    let cn = sketch.color(sketch.red(c)-80, sketch.green(c)-80, sketch.blue(c)-80);
    sketch.stroke(cn);

    for (let y = -4; y < 9; y++){
        for (let x = -4; x < 9; x++){
            sketch.push();
            if (x % 2 == 0){
                sketch.translate(x * 200, y * 200 + 100);
            } else {
                sketch.translate(x * 200, y * 200);
            }
            sketch.rotate(rotation);

            // DRAWING ICON
            
            // drawIcon(x, y, regen, , 30);


            let cx = x;
            let cy = y;

            let radius = sketch.map(regen, 0, 100, 30, 20);
            let anchor_offset = radius * 0.54;


    sketch.fill(0,0,0,0);

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
    p3y3 = sketch.map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p4x2 = cx;
    p4y2 = sketch.map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p3x4 = sketch.map(regen, 0 , 100, cx - anchor_offset, cx);
    p3y4 = sketch.map(regen, 0, 100, cy - radius, cy - (radius + 70));

    p4x1 = sketch.map(regen, 0, 100, cx + anchor_offset ,cx);
    p4y1 = sketch.map(regen, 0, 100, cy - radius, cy - (radius + 70));

    sketch.bezier(p1x2, p1y2, p1x1, p1y1, p1x4, p1y4, p1x3, p1y3);
    sketch.bezier(p2x2, p2y2, p2x1, p2y1, p2x4, p2y4, p2x3, p2y3);
    sketch.bezier(p3x2, p3y2, p3x1, p3y1, p3x4, p3y4, p3x3, p3y3);
    sketch.bezier(p4x2, p4y2, p4x1, p4y1, p4x4, p4y4, p4x3, p4y3);

    if (regen < 70){
        let line_offset = 10;
        let line_length = sketch.map(regen, 0, 70, 35, 0);
        sketch.line(cx, cy + radius + line_offset, cx, cy + radius + line_offset + line_length);
        sketch.line(cx, cy - (radius + line_offset), cx, cy - (radius + line_offset + line_length));
        sketch.line(cx + radius + line_offset, cy, cx + radius + line_offset + line_length, cy);
        sketch.line(cx - (radius + line_offset), cy, cx - (radius + line_offset + line_length), cy);

    }

            // DONE DRAWING ICON

            sketch.pop();
        }
    }

    // for (let x = -4; x < 9; x++){
    //     for (let y = -4; y < 9; y++){
    //         push();
    //         translate(x * 200, y * 200);
    //         rotate(rotation);
    //         drawIcon(x, y, regen, 20, 30);
    //         pop();
    //     }
    // }


}


function drawIcon(cx, cy, regen, rmin, rmax){

    // let cx = width/2;
    // let cy = height/2;
    fill(0,0,0,0);
    let radius = map(regen, 0, 100, rmax, rmin);
    let anchor_offset = radius * 0.54;

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


};

// create the second instance of p5 and pass in the function for sketch 2
new p5(s2);
