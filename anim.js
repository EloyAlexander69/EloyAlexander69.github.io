var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

var lyricsData = [
  { text: "if you dance, i'll dance", time: 19 },
  { text: "and if you don't, i'll dance anyway", time: 24 },
  { text: "give peace a chance", time: 29 },
  { text: "let the fear you have fall away", time: 34 },
  { text: "i've got my eye on you", time: 39 },
  { text: "i've got my eye on you", time: 44 },
  { text: "say yes to heaven", time: 49 },
  { text: "say yes to me", time: 54 },
  { text: "say yes to heaven", time: 59 },
  { text: "say yes to me", time: 64 },
  { text: "if you go, i'll stay", time: 69 },
  { text: "you come back, i'll be right here", time: 74 },
  { text: "like a barge at sea", time: 79 },
  { text: "in the storm, i stay clear", time: 94 },
  { text: "'cause i've got my mind on you", time: 99 },
  { text: "I got my mind on you", time: 104 },
  { text: "say yes to heaven", time: 109 },
  { text: "say yes to me", time: 114 },
  { text: "say yes to heaven", time: 119 },
  { text: "say yes to me", time: 124 },
  { text: "If you dance, I'll dance", time: 135 },
  { text: "I'll put my red dress on, get it on", time: 144 },
  { text: "And if you fight, I'll fight", time: 148 },
  { text: "It doesn't matter now, it's all gone", time: 152 },
  { text: "I've got my mind on you", time: 153 },
  { text: "I got my mind on you", time: 156 },
  { text: "Say yes to Heaven", time: 159 },
  { text: "Say yes to me", time: 161 },
  { text: "Say yes to heaven", time: 163 },
  { text: "Say yes to me", time: 165 },
  { text: "I've got my eye on you", time: 170 },
  { text: "I've got my eye on you, mm", time: 173 },
  { text: "I've got my eye on you", time: 176 },
  { text: "I've got my eye on you", time: 179 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    var fadeInDuration = 0.1; 
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}

setTimeout(ocultarTitulo, 216000);