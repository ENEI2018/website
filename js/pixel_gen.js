var colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
var layer1ProbOfHidden = 1;
var layer2ProbOfHidden = 5;
var layer3ProbOfHidden = 25;
var rectangleSize = 35;


function draw() {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext) {

    var ctx = canvas.getContext('2d');
    ctx.canvas.width = document.getElementById('canvas').clientWidth;
    ctx.canvas.height = document.getElementById('canvas').clientHeight;

    var tableX = Math.round(ctx.canvas.width / rectangleSize);
    var tableY = Math.round(ctx.canvas.height / rectangleSize);

    console.log(tableX);
    console.log(tableY);

    for (let x = 0; x < tableX; x++) {
      for (let y = 0; y < tableY; y++) {
        let xPostition = x * rectangleSize;
        let yPostition = y * rectangleSize;

        var rand;
        if ((x < (tableX / 12) || x > (tableX - (tableX / 12))) || (y < (tableY / 12) || y > (tableY - (tableY / 12))))
          rand = Math.trunc(Math.random() * (colors.length + layer3ProbOfHidden));
        else if (x > (3 * tableX / 12) && x < (9 * tableX / 12) && y > (3 * tableY / 12) && y < (9 * tableY / 12))
          rand = Math.trunc(Math.random() * (colors.length + layer1ProbOfHidden));
        else
          rand = Math.trunc(Math.random() * (colors.length + layer2ProbOfHidden));

        if (rand < colors.length) {
          ctx.fillStyle = colors[rand];
          ctx.fillRect(xPostition, yPostition, rectangleSize, rectangleSize);
        }
      }
    }

  }
}