import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.getElementById('vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpd, 1000));

window.addEventListener('DOMContentLoaded', setTime);

function onTimeUpd(data) {
  const currentTime = JSON.stringify(data.seconds);

  localStorage.setItem('videoplayer-current-time', currentTime);

  // console.log(currentTime);
}

function setTime() {
  const time = localStorage.getItem('videoplayer-current-time');
  console.log(+time);

  player.setCurrentTime(+time);
}
