let canvas = document.querySelector(".grid");
let range = document.querySelector(".range");
let drawModeButtons = document.querySelectorAll("button");
let drawMode = "black";
let canvasSize = 16;
let pixels = [];

for (let drawModeButton of drawModeButtons) {
    drawModeButton.addEventListener("click", function() {
        drawMode = drawModeButton.value;
        console.log(`Draw Mode set to ${drawMode}`);
    })
}

let reformatCanvas = function() {
    canvasSize = range.value;
    canvas.innerHTML = "";
    for (let i=0; i<canvasSize**2; i++){
        canvas.innerHTML += `<div class="pixel"></div>`;
    }
    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        pixel.addEventListener('onhover', adjustColor());
    }
    console.log(`Canvas reformatted to ${canvasSize} x ${canvasSize}`);
};

let adjustColor = function() {
    //TODO

}

range.addEventListener("change", function() { 
    canvasSize = range.value;
    console.log(`Range slider moved to ${canvasSize} x ${canvasSize}`)
    reformatCanvas();
})

window.addEventListener("DOMContentLoaded", reformatCanvas());