document.getElementById("generate-poem").addEventListener("click", generatePoem);

async function generatePoem() {
    const mood = document.getElementById("mood").value;
    const poem = await getPoemFromAPI(mood);
    document.getElementById("poem").innerText = poem;
    playMusic();
}

async function getPoemFromAPI(mood) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer YOUR_API_KEY'
        },
        body: JSON.stringify({
            model: 'text-davinci-003',
            prompt: `Escribe un poema de amor para una persona que se siente ${mood}`,
            max_tokens: 100
        })
    });
    const data = await response.json();
    return data.choices[0].text;
}

function playMusic() {
    const audio = document.getElementById("bg-music");
    audio.play();
}
