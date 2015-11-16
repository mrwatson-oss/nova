// jshint devel:true
// Scroll to anchor
$(document).ready(function() {
  $("li.dropdown").click(function() {
      'use strict';
      $(this).toggleClass("drop-nav-active");
  });
  emojify.setConfig({
  // use githubs CDN
  img_dir: 'https://github.global.ssl.fastly.net/images/icons/emoji/'
})
  emojify.run();
});

// button loading animation
function loadingButton(thisButton) {
  // var originalButtonContent = thisButton.innerHTML;
  var buttonColor = $(thisButton).css('color');
  if(!$(thisButton).hasClass('btn__loader')){
    $(thisButton).addClass('btn__loader');
    thisButton.style.color = 'rgba(0,0,0,0)';
    setTimeout(function(){
      $(thisButton).removeClass('btn__loader');
      thisButton.style.color = buttonColor;
    }, 4000);
  }
};

// var dots = window.setInterval( function() {
//   var wait = document.getElementById("wait");
//   if ( wait.innerHTML.length > 3 )
//       wait.innerHTML = "";
//   else
//       wait.innerHTML += ".";
//   }, 100);
