// ==========================================
// HC PRO DJ HUMBERTO
// CONTROL PRINCIPAL
// ==========================================

const video = document.getElementById("videoPlayer");
const videoFile = document.getElementById("videoFile");
const audioFile = document.getElementById("audioFile");

const vinylA = document.getElementById("vinylA");
const vinylB = document.getElementById("vinylB");

const trackName = document.getElementById("trackName");
const videoStatus = document.getElementById("videoStatus");

let audioPlayer = new Audio();

let deckAPlaying = false;
let deckBPlaying = false;


// ==========================================
// CARGAR VIDEO
// ==========================================

videoFile.addEventListener("change", function () {

  const file = this.files[0];

  if (!file) return;

  const videoURL = URL.createObjectURL(file);

  video.src = videoURL;

  video.load();

  videoStatus.textContent = "VIDEO CARGADO";

  videoStatus.style.color = "#00ffcc";

});


// ==========================================
// CARGAR AUDIO
// ==========================================

audioFile.addEventListener("change", function () {

  const file = this.files[0];

  if (!file) return;

  const audioURL = URL.createObjectURL(file);

  audioPlayer.src = audioURL;

  trackName.textContent = file.name;

  audioPlayer.load();

});


// ==========================================
// PLAY AUDIO
// ==========================================

function playAudio() {

  if (!audioPlayer.src) {

    alert("Primero selecciona un archivo de audio.");

    return;
  }

  audioPlayer.play();

  vinylA.classList.add("playing");

  vinylB.classList.add("playing");

}


// ==========================================
// PAUSE AUDIO
// ==========================================

function pauseAudio() {

  audioPlayer.pause();

  vinylA.classList.remove("playing");

  vinylB.classList.remove("playing");

}


// ==========================================
// STOP AUDIO
// ==========================================

function stopAudio() {

  audioPlayer.pause();

  audioPlayer.currentTime = 0;

  vinylA.classList.remove("playing");

  vinylB.classList.remove("playing");

}


// ==========================================
// CONTROL DECK A / B
// ==========================================

function toggleDeck(deck) {

  if (deck === "A") {

    deckAPlaying = !deckAPlaying;

    vinylA.classList.toggle(
      "playing",
      deckAPlaying
    );

  }

  if (deck === "B") {

    deckBPlaying = !deckBPlaying;

    vinylB.classList.toggle(
      "playing",
      deckBPlaying
    );

  }

}


// ==========================================
// CARGAR AUDIO DESDE DECK
// ==========================================

function loadAudio(deck) {

  audioFile.click();

}


// ==========================================
// VOLUMEN MASTER
// ==========================================

const masterVolume =
  document.getElementById("masterVolume");

masterVolume.addEventListener("input", function () {

  audioPlayer.volume = this.value;

  video.volume = this.value;

});


// ==========================================
// VIDEO
// ==========================================

video.addEventListener("play", function () {

  videoStatus.textContent = "VIDEO EN REPRODUCCIÓN";

  videoStatus.style.color = "#00ffcc";

});

video.addEventListener("pause", function () {

  videoStatus.textContent = "VIDEO PAUSADO";

});


// ==========================================
// PANTALLA COMPLETA
// ==========================================

function fullscreenVideo() {

  if (video.requestFullscreen) {

    video.requestFullscreen();

  } else if (video.webkitRequestFullscreen) {

    video.webkitRequestFullscreen();

  }

}


// ==========================================
// ANIMACIÓN DE VINILOS SEGÚN AUDIO
// ==========================================

audioPlayer.addEventListener("play", function () {

  vinylA.classList.add("playing");
  vinylB.classList.add("playing");

});

audioPlayer.addEventListener("pause", function () {

  vinylA.classList.remove("playing");
  vinylB.classList.remove("playing");

});

audioPlayer.addEventListener("ended", function () {

  vinylA.classList.remove("playing");
  vinylB.classList.remove("playing");

});


// ==========================================
// TECLADO DJ
// ==========================================

document.addEventListener("keydown", function(event) {

  // ESPACIO = PLAY / PAUSE

  if (event.code === "Space") {

    event.preventDefault();

    if (audioPlayer.paused) {

      playAudio();

    } else {

      pauseAudio();

    }

  }

});


// ==========================================
// INICIO
// ==========================================

audioPlayer.volume = 0.8;

console.log(
  "HC PRO DJ HUMBERTO — Sistema iniciado correctamente."
);
