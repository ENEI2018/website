var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];

window.addEventListener("load", generateColors);

function generateColors() {
    var pixels = document.getElementsByClassName("pixel");

    for (let pixel of pixels) {
        pixel.style.backgroundColor = colors[Math.trunc(Math.random() * colors.length)];
    }
}