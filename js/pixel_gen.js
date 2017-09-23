var colors = ["#00008c", "#c200ff", "#0000ff", "#00e9ff", "#5a00ff"]; // main colors on identity book

var layer1ProbOfHidden = 1;
var layer2ProbOfHidden = 5;
var layer3ProbOfHidden = 20;
var RECTANGLE_SCALE = 1 / 6;

function draw() {
    var logo = document.getElementById('logo');
    var canvas = document.getElementById('canvas');

    var rectangleWidth = Math.trunc(logo.width * RECTANGLE_SCALE);
    var rectangleHeight = Math.trunc((logo.height - Math.tan(Math.PI / 12 /*15º*/ ) * logo.width) * RECTANGLE_SCALE);

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
                if ((x < (tableX / 12) || x > (tableX - (tableX / 12))) || (y < (tableY / 12) || y > (tableY - (tableY / 12))))
                    rand = Math.trunc(Math.random() * (colors.length + layer3ProbOfHidden));
                else if (x > (3 * tableX / 12) && x < (9 * tableX / 12) && y > (3 * tableY / 12) && y < (9 * tableY / 12))
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