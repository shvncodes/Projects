let canvas = document.getElementById("box");
let cntx = canvas.getContext("2d");

// v = u + at
// y = prev distance + v*t

let u = 0;
let a = 9.8;
let y = 0;
let t = 0.33;

async function main() {
    for(let i = 0; i < 542; i++) {
        // for add garvity behaviour
        let v = u + a*t;
        y = y + v*t;
        u = v;
        // to clear prev. canvas
        cntx.clearRect(0, 0, 800, 600);
        // for making rectangle
        cntx.beginPath();
        cntx.rect(10, y, 70, 60);
        cntx.fill();

        cntx.fillStyle = "red";

        // to sleep
        await new Promise((r) => setTimeout(r, 33));
    }
}

main();