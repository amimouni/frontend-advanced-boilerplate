$(document).ready(function() {
  function setHeight() {
    windowHeight = $(window).innerHeight();
    $('.window-full-sized').css('min-height', windowHeight);
  };
  setHeight();

  $(window).resize(function() {
    setHeight();
  });
});
