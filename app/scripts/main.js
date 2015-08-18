// jshint devel:true
// Scroll to anchor
$(document).ready(function() {
'use strict'; 
$('a[href*=#]:not([href=#])').click(function() {
    // 'use strict';
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
})

// naam en foto van de watson api binnenhalen en aan html attributen binden.
// $.get('http://api.testing.mrwatson.com/users', function(data) {
//     'use strict';
//     if (!data || data === "") {
//         console.log('geen data sorry joh');
//         return;
//     }
//     var json;
//     try {
//         json = jQuery.parseJSON(data);
//     } catch (e) {
//         console.log('die andere error');
//         return;
//     }

//     var randomUser = (Math.floor(Math.random() * json.length - 1));


//     // console.log(json[randomUser].user.first_name);
//     // console.log(json[randomUser].user.profile_picture);


//     $('#naam').html(json[randomUser].user.first_name);
//     $('#foto').attr("src", json[randomUser].user.profile_picture);
//     // .html(json[randomUser].user.profile_picture);



// }, "text");

//dropdown
$("li.dropdown").click(function() {
    'use strict';
    $(this).toggleClass("drop-nav-active");
});


//app
//start app on doc load
$(document).ready(function() {
// 'use strict';
    //prepare html to show first screen only
    $('#game, #finish').hide();


    //these functions make the buttons go to the next page when a button is clicked
    $('#startbutton').on("click", function() {
        $('#start').hide("slow");
        $('#game').show("slow");
    });

    $('#replaybutton').on("click", function() {
        $('#finish').hide("slow");
        $('#game').show("slow");
        // console.log("click");
    });

    $('#menubutton').on("click", function() {
        $('#finish').hide();
        $('#start').show();
        // console.log("click");
    });



    //load the JSON-object with all users
    $.getJSON('http://api.testing.mrwatson.com/users', function(userData) {

        var pastUsers = [];
        var randomUsers = [];
        var availableUsers = [];
        var rightAnswer;
        var currentUser;
        var score = 0;
        var highscore = 0;
        var scorelist = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

        //method to create user with name and photo
        function user(firstName, photo, ID) {
            this.firstName = firstName;
            this.photo = photo;
            this.userID = ID;
        }

        //generate a random user based on a userdata provided by the JSON object.
        function randomUser() {
            var randomJSonIndex = Math.floor(Math.random() * (userData.length - 1));
            randomUserName = userData[randomJSonIndex].user.first_name;
            randomUserPhoto = userData[randomJSonIndex].user.profile_picture;
            randomUserID = userData[randomJSonIndex].user.user_id;
        }


        //count all users with a valid profile picture in the JSon file.
        function countUsers() {
            for (i = 0; i < userData.length - 1; i++) {
                if (userData[i].user.profile_picture == "https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" || userData[i].user.profile_picture == "https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs") {
                    // do nothing
                } else {
                    availableUsers.push(userData[i].user.profile_picture);
                }
            }
        }

        countUsers();

        //set a user to display it's photo
        function pickUser() {
            randomUser();
            //if the user has no photo, pick another user
            while (randomUserPhoto == "https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" || randomUserPhoto == "https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs") {
                randomUser();
            }



            //if a user has already been picked, generate another one.
            if (pastUsers.indexOf(randomUserID) == -1) {
                pastUsers.push(randomUserID);
            } else {
                while (pastUsers.indexOf(randomUserID) >= 0 || randomUserPhoto == "https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu" || randomUserPhoto == "https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs") {
                    randomUser();
                }
                pastUsers.push(randomUserID);
            }

            //create a user with the current random properties
            currentUser = new user(randomUserName, randomUserPhoto, randomUserID);

            //render the users photo in the browser
            $("#userPhoto").attr("src", currentUser.photo);
            console.log(currentUser.firstName);
        }

        //capitalize a string's first character.
        function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

        //pick 5 random names from the JSon object and display them in a list
        function setData() {
            //pick 5 random names from the JSON object
            for (i = 0; i < 5; i++) {
                if (randomUsers.indexOf(randomUserName) == -1) {
                    capitalizeFirstLetter(randomUserName);
                    randomUsers.push(randomUserName);
                    randomUser();
                } else {
                    randomUser();
                    i -= 1;
                }
            }
            //the name that belongs to the picture is the first one in the array
            rightAnswer = randomUsers[0];
            //sort the array alphabetically
            randomUsers.sort();
            //render the array as a list
            for (i = 0; i < 5; i++) {
                $('#names').append('<li class="pick solid-button--neutral">' + randomUsers[i] + '</li>');
            } 
        }

        //get answer based on input and give an output based on whether the answer is correct or not
        $('.progress').html("0" + " / " + (availableUsers.length -1));

        function play() {
            $('.pick').on("click", function() {

                if (this.innerHTML == rightAnswer) {
                    $("#userPhoto").attr("src", 'http://jimpunk.net/Loading/wp-content/uploads/loading18.gif');
                    // return;
                    setTimeout(function(){
                    $('.progress').html(pastUsers.length + " / " + (availableUsers.length -1));
                    score += 1;
                    $('.score').html(score);
                    // console.log("corrreeectt : " + score);
                    //when all valid users have been shown.
                    if (pastUsers.length >= availableUsers.length - 1) {
                        alert("you the man");
                        $(theWinner).html('<img class="image" src="http://i416.photobucket.com/albums/pp250/mychitphoto/comments%20diver/youre-da-man.jpg">');
                    }
                    $('#names').empty();
                    randomUsers = [];
                    pickUser();
                    setData();
                    play();
                }, 100);
                } else {
                    if (score > highscore) {
                        highscore = score;
                    }

                    if (score > (scorelist)[9]) {
                        scorelist.pop();
                        scorelist.push(score);
                        scorelist.sort(function(a, b) {
                            return b - a;
                        });
                        $('#scoreListHighscore1').html(scorelist[0]);
                        $('#scoreListHighscore2').html(scorelist[1]);
                        $('#scoreListHighscore3').html(scorelist[2]);
                        $('#scoreListHighscore4').html(scorelist[3]);
                        $('#scoreListHighscore5').html(scorelist[4]);
                        $('#scoreListHighscore6').html(scorelist[5]);
                        $('#scoreListHighscore7').html(scorelist[6]);
                        $('#scoreListHighscore8').html(scorelist[7]);
                        $('#scoreListHighscore9').html(scorelist[8]);
                        $('#scoreListHighscore10').html(scorelist[9]);
                    }
                    // console.log(scorelist);

                    $('#game').hide();
                    $('#finish').show("slow");

                    $('.finalscore').html("Final Score:" + score);
                    $('#wrongUser').attr("src", currentUser.photo);

                    $('#thisPersonsName').html(currentUser.firstName);

                    // console.log("game over: " + score);
                    score = 0;
                    pastUsers = [];
                    $('.progress').html("0" + " / " + (availableUsers.length -1));
                    $('#names').empty();
                    randomUsers = [];
                    pickUser();
                    setData();
                    play();
                }
            });
        }

        pickUser();
        setData();
        play();

    });

});
