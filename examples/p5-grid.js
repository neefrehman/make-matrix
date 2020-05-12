// using scripts and p5 in global mode

let res;
let grid;

const camZStart = -800;
let camZ = camZStart;
let camXOff = 0;
let camYOff = 0;

setup = () => {
    createCanvas(windowWidth, windowHeight, WEBGL);
    stroke(181, 105, 25);
    strokeWeight(3);

    res = width * 0.1;
    const numColumns = Math.ceil(width / res);
    const numRows = Math.ceil(height / res);
    grid = makeMatrix([numColumns, numRows, numColumns]);
};

draw = () => {
    background(12, 32, 11);

    camZ = camZ >= camZStart + res ? camZStart : camZ + 1;
    translate(-width / 2 + res / 2, -height / 2 + res / 4, camZ);
    rotateX(camXOff);
    rotateY(camYOff);

    grid.forEach((column, x) => {
        column.forEach((row, y) => {
            row.forEach((depth, z) => {
                const curX = x * res;
                const curY = y * res;
                const curZ = z * res;

                const fogIntensity =
                    z < 10 ? map(z, 0, row.length, 20, 255) : 255;
                stroke(181, 105, 25, fogIntensity);

                line(curX, curY, curZ, curX + res, curY, curZ);
                line(curX, curY, curZ, curX, curY + res, curZ);
                line(curX, curY, curZ, curX, curY, curZ + res);
            });
        });
    });
};

mouseMoved = () => {
    const mappedMouseY = map(mouseY, 0, height, -0.02, 0.02);
    const mappedMouseX = map(mouseX, 0, width, -0.02, 0.02);
    camXOff = lerp(camXOff, mappedMouseY, 0.5);
    camYOff = lerp(camYOff, mappedMouseX, 0.5);
};
