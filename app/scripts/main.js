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
