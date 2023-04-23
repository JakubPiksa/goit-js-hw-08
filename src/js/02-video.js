import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveTime = data => localStorage.setItem('videoplayer-current-time', data.seconds);
const saveTimeDelay = throttle(saveTime, 1000);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveTimeDelay(data);
});




