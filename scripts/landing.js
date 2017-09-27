var animateLogo = function() {
  var logo = document.getElementsByClassName('logo');
  var revealLogo = function() {
     logo[0].style.opacity = 1;
     logo[0].style.transform = "scaleX(1) translateY(0)";
     logo[0].style.msTransform = "scaleX(1) translateY(0)";
     logo[0].style.WebkitTransform = "scaleX(1) translateY(0)";
    };
  revealLogo();
};


var animatePoints = function() {
  var points = document.getElementsByClassName('point');
  var revealPoints = function(foo) {
     points[foo].style.opacity = 1;
     points[foo].style.transform = "scaleX(1) translateY(0)";
     points[foo].style.msTransform = "scaleX(1) translateY(0)";
     points[foo].style.WebkitTransform = "scaleX(1) translateY(0)";
   };

for (v=0; v < points.length; v++) {
   revealPoints(v);
   };
};
