window.onload = function () {
    let minutes = 0;
    let seconds = 0;
    let milliseconds = 0;

    let interval;

    const addMinutes = document.querySelector(".minutes");
    const addSeconds = document.querySelector(".seconds");
    const addMilliseconds = document.querySelector(".milliseconds");



    const startBtn = document.querySelector(".start");
    const stopBtn = document.querySelector(".stop");
    const resetBtn = document.querySelector(".reset");

    startBtn.onclick = function () {

        clearInterval(interval);
        interval = setInterval(start, 10);
    };

    stopBtn.onclick = function () {

        clearInterval(interval);

    };

    resetBtn.onclick = function () {

        clearInterval(interval);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        addMinutes.innerHTML = "00";
        addSeconds.innerHTML = "00";
        addMilliseconds.innerHTML = "00";

    };

    function start() {
        milliseconds++;

        if (milliseconds < 10) {
            addMilliseconds.innerHTML = "0" + milliseconds;
        } else {
            addMilliseconds.innerHTML = milliseconds;
        }

        // 1 seconds = 1000 milliseconds but I used 10ms interval so I need to check every 10ms

        if (milliseconds > 99) {
            seconds++;
            addSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = 0;
            addMilliseconds.innerHTML = "00";
        }

        if (seconds > 59) {
            minutes++;
            addMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
            addSeconds.innerHTML = "00";
        }
    }

};