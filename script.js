let canvas = document.querySelector(".grid");
let range = document.querySelector(".range");
let drawModeButtons = document.querySelectorAll("button");
let drawMode = "Black";
let pixelCount = 16;
let pixels = [];
let rangeCaption = document.querySelector("#rangeCaption");
let pixelSize;
let canvasSize;
let rainbowList = ["FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF"]

for (let drawModeButton of drawModeButtons) {
    drawModeButton.addEventListener("click", function() {
        drawMode = drawModeButton.value;
        if (drawMode === "Reset"){
            let pixels = document.querySelectorAll(".pixel");
            for (let pixel of pixels) {
                pixel.style.backgroundColor = "#FFFFFF"
            }
            console.log("reset")
        }
        return false;
    })
}

let resize = function() {
    pixelCount = range.value;
    canvasSize = canvas.offsetWidth;
    let pixelSize = (canvasSize / pixelCount);
    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        pixel.style.width = pixelSize + "px";
        pixel.style.height = pixelSize + "px";
    }
    console.log("Canvas size is " + canvasSize);
    console.log("Pixel size is " + pixelSize)
    document.querySelector("#rangeCaption").innerHTML = `${pixelCount} x ${pixelCount}`
}

let reformatCanvas = function() {
    canvas.innerHTML = "";
    for (let i=0; i<pixelCount**2; i++){
        canvas.innerHTML += `<div class="pixel"></div>`;
    }

    resize();

    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        pixel.addEventListener("mouseover", function(){
            let color;

            if (drawMode === "Black") {
            color = "#000000"
            }
            else if (drawMode === "Rainbow") {
                color = rainbowList[Math.floor(Math.random() * 5)];
            }

            else {
                color = "#FFFFFF"
            }

            pixel.style.backgroundColor = color;

            console.log("Pixel color set to " + color);
        });
    }
};


range.addEventListener("change", function() { 
    pixelCount = range.value;
    reformatCanvas();
})

window.addEventListener("DOMContentLoaded", reformatCanvas());

canvas.onresize = console.log("canvas resized");
