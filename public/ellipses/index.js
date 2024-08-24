

function setup() {
    createCanvas(400,400);
}

function draw() {
    background(255);

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

    let offset = 50;

    let ellipse_max_height = 150;
    let stroke_max_width = 25;
    let ellipse_max_width = 20;

    let mapped_zonduur = map(zonduur, 0, 100, ellipse_max_width, ellipse_max_height);
    let mapped_uv_index = map(uv_index, 0, 11, 2, stroke_max_width);
    
    let mapped_regen_milli = map(regen_milli, 0, 100, 2, stroke_max_width);
    let mapped_regen_procent = map(regen_procent, 0, 100, ellipse_max_width, ellipse_max_height);

    let mapped_windrichting = map(windrichtig, 0, 359, ellipse_max_width, ellipse_max_height);
    let mapped_windkracht = map(windkracht, 0, 100, 2, stroke_max_width);

    let mapped_vochtigheid = map(vochtigheid, 0, 100, ellipse_max_width, ellipse_max_height);
    let mapped_luchtkwaliteit = map(luchtkwalliteit, 0, 11, 2, stroke_max_width);

    fill(0,0,0,0);
    fill(20);

    y -= offset * 2

    push();
    translate(width/2, height/2);
    angleMode(DEGREES);
    rotate(windrichtig);
    
    // Wind
    // stroke("#8f8f8f");
    strokeWeight(mapped_windkracht);
    ellipse(x, y, ellipse_max_width, ellipse_max_width);
    y += offset;

    // Zon
    // stroke("#ffda0a");
    strokeWeight(mapped_uv_index);
    ellipse(x, y, mapped_zonduur, ellipse_max_width);
    y += offset;

    // Regen
    // stroke("#140ad1");
    strokeWeight(mapped_regen_milli);
    ellipse(x, y, mapped_regen_procent, ellipse_max_width);
    y += offset;

    // Lucht
    // stroke("#7ce0e6");
    strokeWeight(mapped_luchtkwaliteit);
    ellipse(x, y, mapped_vochtigheid, ellipse_max_width);
    y += offset;

    stroke(20);

}
