$(document).ready(function () {
  $(".clickable1").click(function () {
    $("#walrus1-showing").slideToggle();
    $("#walrus-hidden").fadeToggle();
  });
  $(".clickable2").click(function () {
    $("#walrus2-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
  });
  $(".clickable3").click(function () {
    $("#walrus3-showing").fadeToggle();
    $("#walrus-hidden").slideToggle();
  });
});