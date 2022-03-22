import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');
const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

player.on('timeupdate', throttle(function (video) {
    localStorage.setItem('videoplayer-current-time', video.seconds)
}, 1000))
const actualVideoTime = localStorage.getItem('videoplayer-current-time')
player.setCurrentTime(actualVideoTime).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});
   