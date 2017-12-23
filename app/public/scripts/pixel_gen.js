var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
var layer1ProbOfHidden = 1;
var layer2ProbOfHidden = 5;
var layer3ProbOfHidden = 20;
var RECTANGLE_SCALE = 1 / 4;

var filledPositions = [];
var rectangleWidth = 0;
var rectangleHeight = 0;
var intervals = [];

function draw() {
    var logo = document.getElementById('logo');
    if (logo === null) {
        // Page doesn't have pixel canvas
        return;
    }

    filledPositions = [];
    rectangleWidth = Math.trunc(logo.clientWidth * RECTANGLE_SCALE);
    rectangleHeight = Math.trunc(logo.offsetHeight * RECTANGLE_SCALE);

    var canvas = document.getElementById('canvas');
    var tableX = Math.trunc(canvas.clientWidth / rectangleWidth);
    var tableY = Math.trunc(canvas.clientHeight / rectangleHeight);

    var offsetX = Math.round((canvas.clientWidth - logo.clientWidth) / 2) -
        (Math.trunc((canvas.clientWidth - logo.clientWidth) / (2 * rectangleWidth)) * rectangleWidth);

    var offsetY = Math.round((canvas.clientHeight - logo.offsetHeight) / 2) -
        (Math.trunc((canvas.clientHeight - logo.offsetHeight) / (2 * rectangleHeight)) * rectangleHeight);

    var logoXmin = Math.trunc((canvas.clientWidth - rectangleWidth / RECTANGLE_SCALE) / 2) - 1;
    var logoXmax = Math.trunc((canvas.clientWidth + rectangleWidth / RECTANGLE_SCALE) / 2) - 1;
    var logoYmin = Math.trunc((canvas.clientHeight - rectangleHeight / RECTANGLE_SCALE) / 2) - 1;
    var logoYmax = Math.trunc((canvas.clientHeight + rectangleHeight / RECTANGLE_SCALE) / 2) - 1;

    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.canvas.width = canvas.clientWidth;
        ctx.canvas.height = canvas.clientHeight;

        for (let x = 0; x < tableX; x++) {
            for (let y = 0; y < tableY; y++) {
                let xPos = x * rectangleWidth + offsetX;
                let yPos = y * rectangleHeight + offsetY;

                if (xPos >= logoXmin && xPos < logoXmax && yPos >= logoYmin && yPos < logoYmax)
                    continue;

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
                    filledPositions.push([xPos, yPos]);
                }
            }
        }
    }

    setupIntervalChanges();
}

function setupIntervalChanges() {
    for (var i = 0; i < intervals.length; ++i) {
        clearInterval(intervals[i]);
    }

    var numIntervals = Math.floor(filledPositions.length * 0.2);
    for (var i = 0; i < numIntervals; ++i) {
        intervals.push(setInterval(changeRandomRectangle, Math.floor(Math.random() * 1000) + 800));
    }
}

function changeRandomRectangle() {
    var posIndex = Math.floor(Math.random() * (filledPositions.length - 1));
    var colorIndex = Math.floor(Math.random() * (colors.length - 1));
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = colors[colorIndex];
    ctx.fillRect(filledPositions[posIndex][0], filledPositions[posIndex][1], rectangleWidth, rectangleHeight);
}