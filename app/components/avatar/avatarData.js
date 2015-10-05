var avatarSrc;
var verticalImg;
function avatarDataImg(){
    var nr1 = Math.floor(Math.random() * 200);
    var nr2 = Math.floor(Math.random() * 200);
    var nr3 = Math.floor(Math.random() * 1000);
    var nr4 = Math.floor(Math.random() * 1000);
    var nr5 = Math.floor(Math.random() * 2000);
    var nr6 = Math.floor(Math.random() * 2000);
    var theNumbers = [nr1, nr2, nr3, nr4, nr5, nr6];
    var theHeightNumber = Math.floor(Math.random() * 5);
    var theWidthNumber = Math.floor(Math.random() * 5);
    var theHeight = theNumbers[theHeightNumber];
    var theWidth = theNumbers[theWidthNumber];
    if (theHeight>theWidth) {
      verticalImg = true;
    } else {
      verticalImg = false;
    }
    avatarSrc = 'http://lorempixel.com/' + theWidth + '/' + theHeight;
}
avatarDataImg();
function watwat () {
   avatarDataImg();
   console.log(verticalImg);
   if (verticalImg) {
     $('.avatar').children('img').width('100%').height('auto');
   } else {
     $('.avatar').children('img').height('100%').width('auto');
   }
   $('.avatar').children('img').attr('src', avatarSrc);

}
var avatarData = {
    'avatarData1': {
        'avatar': {
            'src': avatarSrc
        }
    },
    'avatarData2': {
        'avatar': {
            'src': avatarSrc,
            'round': true
        }
    },
    'avatarData3': {
        'avatar': {
            'src': avatarSrc,
            'small': true
        }
    },
    'avatarData4': {
        'avatar': {
            'src': avatarSrc,
            'round': true,
            'small': true
        }
    },
    'avatarDataRandom': {
      'icon': 'icon-system-refresh',
      'class': 'naked-button--neutral',
      'action': 'watwat()'
    }
}
