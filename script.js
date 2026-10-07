let notes = [2, 3, 4];
let time = 0;
let speed = 10;
let beats = document.getElementById("beats");
let BPM = 10;
let beatInterval = 60/10
function beatsInterval() {
    setInterval(function() {
        time += 1;
        checkTime();
    },1000);
}
beatsInterval();
function checkTime() {
    for(i=0;i<notes.length; i++) {
        if (time === notes[i]) {
            let note = document.createElement("span");
            note.classList.add("beat");
            beats.appendChild(note);

        }
    }
}

function moveBeat(beat) {
    
}