let canvas = document.querySelector(".grid");
let range = document.querySelector(".range");
let drawModeButtons = document.querySelectorAll("button");
let drawMode = "Black";
let pixels = [];
let rangeCaption = document.querySelector("#rangeCaption");
let pixelSize;
let canvasSize;
let rainbowList = ["#FF0000", "#FFFF00", "#00FF00", "#00FFFF", "#FF00FF"]


for (let drawModeButton of drawModeButtons) {
    drawModeButton.addEventListener("click", function() {

        //Sets drawMode value for later color selection, returns false to prevent refreshing.

        drawMode = drawModeButton.value;
        if (drawMode === "Reset"){

            //Reset button does not change drawMode, but resets every pixel to white.

            pixels = document.querySelectorAll(".pixel");
            for (let pixel of pixels) {
                pixel.style.backgroundColor = "#FFFFFF";
            }
        }
        return false;
    })
}

let resize = function() {
    pixelCount = range.value;
    canvasSize = canvas.offsetWidth;

    //pixelSize is changed as a function of canvasSize, shrunk slightly to avoid overflow.
    //only width value is used for calculations as canvas is a constant square.

    let pixelSize = (canvasSize / pixelCount) - 1;
    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        pixel.style.width = pixelSize + "px";
        pixel.style.height = pixelSize   + "px";
    }

    document.querySelector("#rangeCaption").innerHTML = `${pixelCount} x ${pixelCount}`;    
}

let reformatCanvas = function() {
    pixelCount = range.value;
    //writes new pixels when canvas is reset.

    canvas.innerHTML = "";
    for (let i=0; i<pixelCount**2; i++){
        canvas.innerHTML += `<div class="pixel" style="background-color: white;"></div>`;
    }

    //resize canvas due to pixel count changing.
    resize();

    pixels = document.querySelectorAll(".pixel")
    for (let pixel of pixels) {
        //event listeners to change pixel color on mouseover

        pixel.addEventListener("mouseover", function(){
            let color;

            if (drawMode === "Black") {
            color = "#000000"
            }
            else if (drawMode === "Rainbow") {
                //selects rancomly from an array of colors to create rainbow

                color = rainbowList[Math.floor(Math.random() * 6)];
            }

            else {
                //last possible drawMode is eraser, set to white.

                color = "#FFFFFF"
            }

            pixel.style.backgroundColor = color;
        });
    }
};


range.addEventListener("change", function() { 
    reformatCanvas();
})

window.addEventListener("DOMContentLoaded", reformatCanvas());

window.onresize = function() {
    resize();
};
