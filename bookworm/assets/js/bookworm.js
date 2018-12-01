$(document).ready(function() {
  $('.menu-button').click(function() {
    $('.nav-content')
      .stop()
      .slideToggle();
  });
});
