var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
var probOfHidden = 3;

window.addEventListener("load", generateColors);

function generateColors() {
  var pixels = document.getElementsByClassName("pixel");

  for (let pixel of pixels) {
    //if rand < colors.length -> backgroundColor = colors[rand]
    //else pixel turns invisible
    var rand = Math.trunc(Math.random() * (colors.length + probOfHidden));

    if (rand < colors.length) pixel.style.backgroundColor = colors[rand];
    else pixel.style.visibility = "hidden";
  }
}
