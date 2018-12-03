let frames = [
    'admiral.at',
    'facebook.com',
    'derstandard.at'
];

let frame = document.getElementById('frame');
frame.style.height = document.body.scrollHeight - 5 + 'px';

function setProgress(progressPercentage){
    let progressBar = document.getElementById('progress-value');

    progressBar.style.width = progressPercentage%100 + '%';
}

let progress = 1;
setProgress(progress);


function tick(){
    if (progress%100 === 0) {
        loadNextFrame();
        progress = 0;
        setProgress(0);
    }
    progress += 2
    setProgress(progress);
}

setInterval(tick, 1000);