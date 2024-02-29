const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let audio = new Audio('audio');

const playTune = (key) => {
    audio.src = `src/audio/${key}.wav`;
    audio.currentTime = 0;
    audio.play();

    const clickedKey = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 300);
};

pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener('click', () => {
        playTune(key.dataset.key);
    });
});

document.addEventListener('keydown', (event) => {	
    if (event.repeat) return;
    const key = event.key;
    const pianoKey = document.querySelector(`.piano-keys .key[data-key="${key}"]`);
    if (pianoKey) {
        playTune(key);
    }
});

const handleVolumeChange = () => {
    audio.volume = volumeSlider.value;
};

volumeSlider.addEventListener('input', handleVolumeChange);

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hidden');
    });
};

keysCheck.addEventListener('change', showHideKeys);