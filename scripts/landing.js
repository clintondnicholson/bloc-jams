// #5
var animatePoints = function() {
  var revealPoints = function() {
    $(this).css({
      opacity:1,
      transform: 'scale(X) translateY(0)'
      });
  };
  $.each($('.point'), revealPoints);
};

$(window).load(function() {
  if ($(window).height() > 950){
    animatePoints();
  }
  var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200;
  $(window).scroll(function(event) {
    if ($(window).scrollTop() >= scrollDistance) {
      animatePoints();
    }
  });
});
