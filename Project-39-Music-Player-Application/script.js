let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrl-icon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause() {
    if (ctrlIcon.classList.contains("fa-pause")) {
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    } else {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
}

song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

progress.oninput = function () {
    song.currentTime = progress.value;
    if (song.paused) {
        song.play();
        ctrlIcon.classList.remove("fa-play");
        ctrlIcon.classList.add("fa-pause");
    }
};