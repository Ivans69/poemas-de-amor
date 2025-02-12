document.getElementById("generate-poem").addEventListener("click", generatePoem);

function generatePoem() {
    const mood = document.getElementById("mood").value;
    const poem = getPoemForMood(mood);
    document.getElementById("poem").innerText = poem;
    playMusic();
}

function getPoemForMood(mood) {
    switch(mood) {
        case 'feliz':
            return "La felicidad brilla en tus ojos,\ncomo el sol en el cielo azul.";
        case 'triste':
            return "La tristeza nos acompaña, pero todo pasará,\ncomo la lluvia que se va.";
        case 'enamorada':
            return "En tus ojos veo estrellas,\nmi corazón late solo por ti.";
        default:
            return "Escoge cómo te sientes...";
    }
}

function playMusic() {
    const audio = document.getElementById("bg-music");
    audio.play();
}
