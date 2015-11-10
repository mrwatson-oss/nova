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
  var originalButtonContent = thisButton.innerHTML;
  if(!$(thisButton).hasClass('btn__loader')){
    $(thisButton).addClass('btn__loader');
    thisButton.style.color = 'rgba(0,0,0,0)';
  }
  // if (thisButton.hasClass('btn__loader')) {
    // alert ('nope');
  // }



  // var buttonContent = thisButton.innerHTML;
  // var lastChars = buttonContent[buttonContent.length-1] + buttonContent[buttonContent.length-2] + buttonContent[buttonContent.length-3];
  // console.log(lastChars);


};

// var dots = window.setInterval( function() {
//   var wait = document.getElementById("wait");
//   if ( wait.innerHTML.length > 3 )
//       wait.innerHTML = "";
//   else
//       wait.innerHTML += ".";
//   }, 100);
