

function setup() {
    createCanvas(400,400);
}

function draw() {
    let cx = width/2;
    let cy = height/2;
    let size = 30;
    let d = 5;

    let temp_nacht = document.getElementById("temp_nacht").value;
    let temp_ochtent = document.getElementById("temp_ochtent").value;
    let temp_middag = document.getElementById("temp_middag").value;
    let temp_avond = document.getElementById("temp_avond").value;

    let zon_nacht = document.getElementById("zon_nacht").value;
    let zon_ochtent = document.getElementById("zon_ochtent").value;
    let zon_middag = document.getElementById("zon_middag").value;
    let zon_avond = document.getElementById("zon_avond").value;

    let regen_nacht = document.getElementById("regen_nacht").value;
    let regen_ochtent = document.getElementById("regen_ochtent").value;
    let regen_middag = document.getElementById("regen_middag").value;
    let regen_avond = document.getElementById("regen_avond").value;

    let temp_color = '#7d7d7d';
    let zon_color = '#faca1b';
    let regen_color = '#1811f2';


    noStroke();
    fill(0);
    for (let x = 4; x > 0; x--){
        for (let y = 4; y > 0; y--){
            let occu = [];

            // Temp
            if(Math.abs(Math.floor((temp_nacht / 46) * 5)-5) == y && x == 1){
                occu.push(temp_color);
            }

            if(Math.abs(Math.floor((temp_ochtent / 46) * 5)-5) == y && x == 2){
                occu.push(temp_color);
            }

            if(Math.abs(Math.floor((temp_middag / 46) * 5)-5) == y && x == 3){
                occu.push(temp_color);
            }

            if(Math.abs(Math.floor((temp_avond / 46) * 5)-5) == y && x == 4){
                occu.push(temp_color);
            }


            // Zon
            if(Math.abs(Math.floor((zon_nacht / 101) * 5)-5) == y && x == 1){
                occu.push(zon_color);
            }

            if(Math.abs(Math.floor((zon_ochtent / 101) * 5)-5) == y && x == 2){
                occu.push(zon_color);
            }

            if(Math.abs(Math.floor((zon_middag / 101) * 5)-5) == y && x == 3){
                occu.push(zon_color);
            }

            if(Math.abs(Math.floor((zon_avond / 101) * 5)-5) == y && x == 4){
                occu.push(zon_color);
            }
            

            // regen
            if(Math.abs(Math.floor((regen_nacht / 101) * 5)-5) == y && x == 1){
                occu.push(regen_color);
            }

            if(Math.abs(Math.floor((regen_ochtent / 101) * 5)-5) == y && x == 2){
                occu.push(regen_color);
            }

            if(Math.abs(Math.floor((regen_middag / 101) * 5)-5) == y && x == 3){
                occu.push(regen_color);
            }

            if(Math.abs(Math.floor((regen_avond / 101) * 5)-5) == y && x == 4){
                occu.push(regen_color);
            }

            if (occu.length==1){
                fill(occu[0]);
                rect(x*(size+d), y*(size+d)+200, size);
            }
            else if (occu.length==2){
                fill(occu[0]);
                rect(x*(size+d), y*(size+d)+200, size);
                fill(occu[1]);
                triangle(x*(size+d), y*(size+d) + 200, x*(size+d) + size, y*(size+d) + 200, x*(size+d), y*(size+d) + size + 200);
            }
            else if (occu.length==3){
                fill(occu[0]);
                rect(x*(size+d), y*(size+d)+200, size);
                fill(occu[1]);
                triangle(x*(size+d), y*(size+d) + 200, x*(size+d) + 20, y*(size+d) + 200, x*(size+d), y*(size+d) + 20 + 200);
                fill(occu[2]);
                triangle(
                    x*(size+d)+size,    y*(size+d)+size + 200, 
                    x*(size+d)+size - 20,    y*(size+d)+size + 200, 
                    x*(size+d)+size,    y*(size+d)+size + 200-20, 
                );
            } else {
                rect(x*(size+d), y*(size+d)+200, size);
            }
            fill(0);


        }
    }



}
