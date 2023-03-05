import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

 const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
const LOKALSTORAGE_KEY = "videoplayer-current-time";

const onPlay = function(data) {
    localStorage.setItem(LOKALSTORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

const storedTime = localStorage.getItem(LOKALSTORAGE_KEY);

if (storedTime) {
    player.setCurrentTime(storedTime);
}