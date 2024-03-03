const audioPlayer = document.getElementById('audioPlayer');

function playSound(soundName) {
    audioPlayer.src = `./sounds/${soundName}`;
    audioPlayer.play();
}

function stop() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
}
