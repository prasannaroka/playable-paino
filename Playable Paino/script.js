const pianoKeys = document.querySelectorAll(".paino-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

 let allkeys = [],
audio = new Audio("tunes/a.wav");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();

   const clickedkey = document.querySelector(`[data-key="${key}"]`);
   clickedkey.classList.add("active");
   setTimeout(() => {
    clickedkey.classList.remove("active");

   }, 150);
}

pianoKeys.forEach(key => {
    allkeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    
});

const handleVolume = (e) => {
   audio.volume = e.target.value;
}

const showHidekeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const pressedkey = (e) => {
  if(allkeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", showHidekeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedkey);
