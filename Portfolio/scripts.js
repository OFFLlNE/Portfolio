/*Scroll functionality for the future

var docH= $(document).height();
console.log(docH);


$(document).on("scroll", function() {
     console.log($(document).scrollTop());
});
*/

$('#burgerToggle').click(function() {	
  $(this).toggleClass('expanded')
  $('.mobileMenuItems').slideToggle();
  $('.mobilemenuitem').css('display','block');
  $('.mobileMenuItems').css('display','block');
  console.log("button is clicked");
});