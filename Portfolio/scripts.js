/*Scroll functionality for the future

var docH= $(document).height();
console.log(docH);


$(document).on("scroll", function() {
     console.log($(document).scrollTop());
});
*/
$(document).ready(function() {
    animateDiv($('.a'));
    animateDiv($('.b'));
    animateDiv($('.c'));
    animateDiv($('.d'));
    animateDiv($('.e'));

});

function makeNewPosition($container) {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $container.height() - 500;
    var w = $container.width() - 150;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

}

function animateDiv($target) {
    var newq = makeNewPosition($target.parent());
    var oldq = $target.offset();
    var speed = calcSpeed([oldq.top, oldq.left], newq);

    $target.animate({
        top: newq[0],
        left: newq[1]
    }, speed, function() {
        animateDiv($target);
    });

};

function calcSpeed(prev, next) {

    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);

    var greatest = x > y ? x : y;

    var speedModifier = 0.5;

    var speed = Math.ceil(greatest / speedModifier);

    return speed;

}





$('#burgerToggle').click(function() {	
  $(this).toggleClass('expanded');
  $('.menuitem').toggleClass('notHidden');
  console.log("button is clicked");
});

$('.menuitem').click(function(){
	$('#burgerToggle').removeClass('expanded');
	$('.menuitem').removeClass('notHidden');
})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
