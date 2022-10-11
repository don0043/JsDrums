const visualizer = document.querySelector('.visualizer')
const sndVisualizer = document.querySelector('.mid-visualizer')
const trdVisualizer = document.querySelector('.bot-visualizer')
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    if (!audio){
        return
    }
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    visualizer.classList.add('play');
    sndVisualizer.classList.add('sndPlay')
    trdVisualizer.classList.add('trdPlay')

})



function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
    visualizer.classList.remove('play')
    sndVisualizer.classList.remove('sndPlay')
    trdVisualizer.classList.remove('trdPlay')

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));





