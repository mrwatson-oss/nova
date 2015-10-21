// jshint devel:true
// Scroll to anchor
$(document).ready(function() {
  $("li.dropdown").click(function() {
      'use strict';
      $(this).toggleClass("drop-nav-active");
  });
// make horizontal nav item active on click
  $('.nav--horizontal li a').on( "click", function() {
    $(this).parent().siblings().children().removeClass('nav--active');
    $(this).addClass('nav--active');
  });
});
