/*Scroll functionality for the future

var docH= $(document).height();
console.log(docH);


$(document).on("scroll", function() {
     console.log($(document).scrollTop());
});
*/

$('#burgerToggle').click(function() {	
  $(this).toggleClass('expanded')
  $('.menuitem').toggleClass('notHidden')
  console.log("button is clicked");
});