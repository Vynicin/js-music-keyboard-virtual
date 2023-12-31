let mapedKeys = [];
let audio = new Audio(`./assets/sounds/a.wav`)
const keys = document.querySelectorAll(".piano-keys .key")
const volumeSlider = document.querySelector(".volume-slider")
const keysCheck = document.querySelector('.keys-check input');


function playTune (key) {
    audio.src = `./assets/sounds/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    });

}

function handleVolume (e) {
    audio.volume = e.target.value;
}

function showHideKeys () {
    keys.forEach(key => key.classList.toggle('hide'));
};


keys.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
})

volumeSlider.addEventListener("input", handleVolume)
keysCheck.addEventListener("click", showHideKeys)
