$(document).ready(function () {
  const colors = ["#0000e0", "#c200ff", "#0000ff", "#6000ff", "#00baff", "#00008c"];
  $('.speaker-overlay').each(function () {
    let randomIndex = Math.trunc(Math.random() * colors.length);
    $(this).css('background-color', colors[randomIndex] + '7F');
  })
});