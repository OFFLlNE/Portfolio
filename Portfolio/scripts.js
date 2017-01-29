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
});

$('.menuitem').click(function(){
	$('#burgerToggle').removeClass('expanded');
	$('.menuitem').removeClass('notHidden');
})





const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
    }

    function toggleActive(e) {
      if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


//SMOOTH SCROLL
$("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    }
  });
