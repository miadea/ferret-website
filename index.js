$(function () {
  $('nav').affix({
    offset: {
      top: $('header').height()
    }
  })
  $( "a" ).click(function(e) {
    var target = $(e.target).attr('href')
    if (target.substring(0,1) === '+') {
      e.preventDefault(); 
      console.log(target.substring(1,target.length))
      var el = $(target.substring(1,target.length));
      var offset = 50;
      if (!el[0]) {
        el = $('body');
        offset = 0;
      }
      $('html, body').animate({
        scrollTop: el.offset().top - offset
      }, 1000);
    }
  });
})