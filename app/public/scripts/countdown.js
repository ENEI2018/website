// Set the date we're counting down to
var countDownDate = new Date("Mar 23, 2018 09:00:00").getTime();

$(document).ready(function(){
  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  jQuery('#countdown').append("<div class='countdown-text' id='faltam'>FALTAM</div>"+
     " <div class='countdown-numbers' id='days'></div> <div class='countdown-text'>DIAS</div>" +
     " <div class='countdown-numbers' id='hours'></div> <div class='countdown-text'>H</div>" +
     " <div class='countdown-numbers' id='minutes'></div> <div class='countdown-text'>MIN</div>" +
     " <div class='countdown-numbers' id='seconds'></div> <div class='countdown-text'>SEG</div>");

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
});

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);
var y = setInterval(function() {
  var heightCountdown = document.getElementById("countdown-row").offsetHeight;
  var heightLogo = document.getElementById("logo-div").offsetHeight;
  var newheight = heightCountdown+heightLogo+100;
  var widthLogoArea = document.getElementById("logo-area").offsetWidth;

  document.getElementById("logo-area").style.backgroundSize = widthLogoArea+"px "+newheight+"px";
  document.getElementById("logo-area").style.height = newheight+"px";
},1);
