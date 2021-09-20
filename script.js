let canvas = document.querySelector(".grid");
let range = document.querySelector(".range");
let drawModeButtons = document.querySelectorAll("button");
let drawMode = "black";
let canvasSize = range.value;
let pixels = [];

for (let drawModeButton of drawModeButtons) {
    console.log(drawModeButton);
    drawModeButton.addEventListener("click", function() {
        drawMode = drawModeButton.value;
        console.log(drawMode);
        return false;
    })
}

let reformatCanvas = function() {
    canvasSize = range.value;
    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        pixel.addEventListener('onhover', adjustColor());
    }//TODO
    console.log(`Canvas reformatted to ${canvasSize} x ${canvasSize}`);
    //TODO
};

let adjustColor = function() {
    //TODO
}

window.addEventListener("DOMContentLoaded", reformatCanvas());