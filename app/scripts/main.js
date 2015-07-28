// jshint devel:true
// Scroll to anchor
$('a[href*=#]:not([href=#])').click(function() {
    'use strict';
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 500);
            return false;
        }
    }
});

// naam en foto van de watson api binnenhalen en aan html attributen binden.
$.get('http://api.testing.mrwatson.com/users', function(data) {
    'use strict';
    if (!data || data === "") {
        console.log('geen data sorry joh');
        return;
    }
    var json;
    try {
        json = jQuery.parseJSON(data);
    } catch (e) {
        console.log('die andere error');
        return;
    }

    var randomUser = (Math.floor(Math.random() * json.length - 1));


    // console.log(json[randomUser].user.first_name);
    // console.log(json[randomUser].user.profile_picture);


    $('#naam').html(json[randomUser].user.first_name);
    $('#foto').attr("src", json[randomUser].user.profile_picture);
    // .html(json[randomUser].user.profile_picture);



}, "text");

//dropdown
$("li.dropdown").click(function() {
        $(this).toggleClass("drop-nav-active");
    });