$(document).ready(function(){"use strict";$(window).scroll(function(){$(this).scrollTop()>200?$(".button--scroll-to-top").fadeIn():$(".button--scroll-to-top").fadeOut()}),$("component").replaceWith(function(){var type=$(this).data("type"),properties=eval($(this).data("properties")),component="ui.component."+type+".render";if($(this).data("random")){var objectLength=Object.keys(properties).length,randomObjectNumber=Math.floor(Math.random()*objectLength),properties=eval($(this).data("properties")+"."+Object.keys(properties)[randomObjectNumber]);return eval(component)(properties)}return eval(component)(properties)}),$("a[href*=#]:not([href=#])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")||location.hostname===this.hostname){var a=$(this.hash);if(a=a.length?a:$("[name="+this.hash.slice(1)+"]"),a.length)return console.log("true"),$("html,body").animate({scrollTop:a.offset().top},500),!1}})}),$("li.dropdown").click(function(){"use strict";$(this).toggleClass("drop-nav-active")}),$(document).ready(function(){$("#game, #finish").hide(),$("#startbutton").on("click",function(){$("#start").hide("slow"),$("#game").show("slow"),$("#replaybutton").on("click",function(){$("#finish").hide("slow"),$("#game").show("slow")}),$("#menubutton").on("click",function(){$("#finish").hide(),$("#start").show()}),$.getJSON("http://mariusdecorte.nl/dist/users.json",function(a){function b(a,b,c){this.firstName=a,this.photo=b,this.userID=c}function c(){var b=Math.floor(Math.random()*(a.length-1));randomUserName=a[b].user.first_name,randomUserPhoto=a[b].user.profile_picture,randomUserID=a[b].user.user_id}function d(){for(i=0;i<a.length-1;i++)"https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"==a[i].user.profile_picture||"https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs"==a[i].user.profile_picture||n.push(a[i].user.profile_picture)}function e(){for(c();"https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"==randomUserPhoto||"https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs"==randomUserPhoto;)c();if(-1==l.indexOf(randomUserID))l.push(randomUserID);else{for(;l.indexOf(randomUserID)>=0||"https://www.filepicker.io/api/file/Xr1rtfRBRd6HVNVynfMu"==randomUserPhoto||"https://www.filepicker.io/api/file/QrYF9eyR5CFSWoGO2bGs"==randomUserPhoto;)c();l.push(randomUserID)}k=new b(randomUserName,randomUserPhoto,randomUserID),$("#userPhoto").attr("src",k.photo),console.log(k.firstName)}function f(a){return a.charAt(0).toUpperCase()+a.slice(1)}function g(){for(i=0;i<5;i++)-1==m.indexOf(randomUserName)?(f(randomUserName),m.push(randomUserName),c()):(c(),i-=1);for(j=m[0],m.sort(),i=0;i<5;i++)$("#names").append('<li class="pick solid-button--neutral">'+m[i]+"</li>")}function h(){$(".pick").on("click",function(){this.innerHTML==j?($("#userPhoto").attr("src","http://jimpunk.net/Loading/wp-content/uploads/loading18.gif"),setTimeout(function(){$(".progress").html(l.length+" / "+(n.length-1)),o+=1,$(".score").html(o),l.length>=n.length-1&&(alert("you the man"),$(theWinner).html('<img class="image" src="http://i416.photobucket.com/albums/pp250/mychitphoto/comments%20diver/youre-da-man.jpg">')),$("#names").empty(),m=[],e(),g(),h()},100)):(o>p&&(p=o),o>q[9]&&(q.pop(),q.push(o),q.sort(function(a,b){return b-a}),$("#scoreListHighscore1").html(q[0]),$("#scoreListHighscore2").html(q[1]),$("#scoreListHighscore3").html(q[2]),$("#scoreListHighscore4").html(q[3]),$("#scoreListHighscore5").html(q[4]),$("#scoreListHighscore6").html(q[5]),$("#scoreListHighscore7").html(q[6]),$("#scoreListHighscore8").html(q[7]),$("#scoreListHighscore9").html(q[8]),$("#scoreListHighscore10").html(q[9])),$("#game").hide(),$("#finish").show("slow"),$(".finalscore").html("Final Score:"+o),$("#wrongUser").attr("src",k.photo),$("#thisPersonsName").html(k.firstName),o=0,l=[],$(".progress").html("0 / "+(n.length-1)),$("#names").empty(),m=[],e(),g(),h())})}var j,k,l=[],m=[],n=[],o=0,p=0,q=[10,9,8,7,6,5,4,3,2,1];d(),$(".progress").html("0 / "+(n.length-1)),e(),g(),h()})})});