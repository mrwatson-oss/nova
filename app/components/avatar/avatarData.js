var avatarSrc;
function avatarDataImg(){
    var nr1 = Math.floor(Math.random() * 100);
    var nr2 = Math.floor(Math.random() * 100);
    var nr3 = Math.floor(Math.random() * 1000);
    var nr4 = Math.floor(Math.random() * 1000);
    var nr5 = Math.floor(Math.random() * 2000);
    var nr6 = Math.floor(Math.random() * 2000);
    var theNumbers = [nr1, nr2, nr3, nr4, nr5, nr6];
    var theHeightNumber = Math.floor(Math.random() * 6);
    var theWidthNumber = Math.floor(Math.random() * 6);
    var theHeight = theNumbers[theHeightNumber];
    var theWidth = theNumbers[theWidthNumber];
    avatarSrc = 'http://lorempixel.com/' + theHeight + '/' + theWidth;
}
avatarDataImg();
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
    }
}

