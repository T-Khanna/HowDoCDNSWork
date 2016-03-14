$(document).ready(function() {
  $('.reference').click(function() {
    var thefn = '#fn' + $(this).text();
    $(thefn).addClass('flash');
    setTimeout(function () {
      $(thefn).removeClass('flash');
    }, 750);
  });
});
