<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
$(document).ready(function() {
  'use strict';

  // Hide the scroll-to-top button on page load and show it when you scroll down.
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.button--scroll-to-top').fadeIn();
    } else {
      $('.button--scroll-to-top').fadeOut();
    }
  });

  //This loads the components from a JSON-file and renders them on the page.
  $('component').replaceWith(function() {
    var type = $(this).data('type');
    var properties = eval($(this).data('properties'));
    var component = 'ui.component.' + type + '.render';
    // random function for style guide
    if ($(this).data('random')) {
      var objectLength = Object.keys(properties).length;
      var randomObjectNumber = Math.floor(Math.random() * objectLength);
      var properties = eval($(this).data('properties') + '.' + Object.keys(properties)[randomObjectNumber]);
      // console.log(properties);
      return eval(component)(properties);
    }
    return eval(component)(properties);
  });

  $('a[href*=#]:not([href=#])').click(function() {
    // 'use strict';
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        console.log('true');
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
})

function ghPageRoutes() {
  var windowUrl = $(location).attr('pathname').split('/')[1];
  var windowUrl2 = $(location).attr('pathname').split('/')[2];
  // console.log(windowUrl);
  // console.log(windowUrl2);

  var theRef = $('a');
  var imgRef = $('img');
  imgRef.each(function() {
    var theUrl = $(this).attr('src');
    // console.log(theUrl);
    var presRef = $(this).attr('src');
    var firstPiece = presRef.split('/')[0];
    var checkThis = firstPiece.split('.')[0];
    // console.log(firstPiece);
    // console.log(checkThis);
    // windowUrl === 'nova' &&
    if (windowUrl === 'nova' && checkThis !== 'nova' && checkThis !== 'http:' && checkThis !== 'https:' && checkThis !== 'www') {
        if (windowUrl2.split('.')[0] === 'ui-components' && firstPiece === '#') {
            theUrl = '/nova/ui-components' + presRef;
            return $(this).attr('src', theUrl);
        }
      theUrl = '/nova' + presRef;
      return $(this).attr('src', theUrl);
    }
    // console.log(theUrl);
  })
  theRef.each(function() {
    var theUrl = $(this).attr('href');
    // console.log(theUrl);
    var presRef = $(this).attr('href');
    var firstPiece = presRef.split('/')[0];
    // console.log(firstPiece);
    var checkThis = firstPiece.split('.')[0];
    // console.log(checkThis);
    // windowUrl === 'nova' &&
    if (windowUrl === 'nova' && checkThis !== 'nova' && checkThis !== 'http:' && checkThis !== 'https:' && checkThis !== 'www') {
      theUrl = '/nova' + presRef;
      return $(this).attr('href', theUrl);
    }
    // console.log(theUrl);
  });
};

//dropdown
$("li.dropdown").click(function() {
  'use strict';
  $(this).toggleClass("drop-nav-active");
});
