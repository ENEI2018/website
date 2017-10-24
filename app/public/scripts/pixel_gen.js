var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
var layer1ProbOfHidden = 2;
var layer2ProbOfHidden = 10;
var layer3ProbOfHidden = 20;
var RECTANGLE_SCALE = 1 / 3;

function draw() {
    var logo = document.getElementById('logo');

    var rectangleWidth = Math.trunc(logo.offsetWidth * RECTANGLE_SCALE);
    var rectangleHeight = Math.trunc((logo.offsetHeight - Math.tan(Math.PI / 24 /*15º*/ ) * logo.offsetWidth) * RECTANGLE_SCALE);

    var canvas_array = ['canvas1', 'canvas2'];
    for (let i = 0; i < canvas_array.length; i++) {

        var canvas = document.getElementById(canvas_array[i]);

        var tableX = Math.trunc(canvas.clientWidth / rectangleWidth);
        var tableY = Math.trunc(canvas.clientHeight / rectangleHeight);

        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');

            ctx.canvas.width = Math.trunc(tableX * rectangleWidth);
            ctx.canvas.height = Math.trunc(tableY * rectangleHeight);

            for (let x = 0; x < tableX; x++) {
                for (let y = 0; y < tableY; y++) {
                    let xPos = x * rectangleWidth;
                    let yPos = y * rectangleHeight;

                    var rand;
                    if ((x < (tableX / 8) && i == 0) || (x + 1 >= (tableX - (tableX / 8)) && i == 1))
                        rand = Math.trunc(Math.random() * (colors.length + layer3ProbOfHidden));
                    else if ((x > (tableX - (tableX / 4)) && i == 0) || (x + 1 <= (tableX / 4) && i == 1))
                        rand = Math.trunc(Math.random() * (colors.length + layer1ProbOfHidden));
                    else
                        rand = Math.trunc(Math.random() * (colors.length + layer2ProbOfHidden));

                    if (rand < colors.length) {
                        ctx.fillStyle = colors[rand];
                        ctx.fillRect(xPos, yPos, rectangleWidth, rectangleHeight);
                    }
                }
            }
        }
    }
}