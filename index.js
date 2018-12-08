let frames = [
    'https://www.mqw.at/',
    'https://www.heute.at/',
    'https://derstandard.at/'
];

let frame = document.getElementById('frame');
frame.style.height = document.body.scrollHeight - 5 + 'px';

function setProgress(progressPercentage){
    let progressBar = document.getElementById('progress-value');

    progressBar.style.width = progressPercentage%100 + '%';
}

let progress = 0;
let exposure = 40;
let exposureLeft = exposure;
setProgress(progress);

function calculateTickSize(impressDuration){
    if (! impressDuration ) {
        impressDuration = 60;
    }

    return 100/impressDuration;
}


function tick(){
    if (exposureLeft === 0) {
        loadNextFrame();
        progress = 0;
        exposureLeft = exposure;
        setProgress(0);
    }
    exposureLeft -= 1;
    progress += calculateTickSize(exposure)
    setProgress(progress);
}

function loadNextFrame(){
    let nextDestination = frames.shift();
    frames.push(nextDestination);
    frame.src = nextDestination;
}

setInterval(tick, 1000);