function toggle(css) {
    var e = document.getElementById("body");
    if (!css) {
        e.className = "normal";
    } else {
        e.classList.toggle(css);
    }
}

function bark() {
    if ('speechSynthesis' in window) {
        var text = document.getElementById("text").innerText;
        var synthesis = window.speechSynthesis;

        // Get the first `en` language voice in the list
        var voice = synthesis.getVoices().filter(function(voice) {
            return voice.lang === 'en';
        })[0];

        synthesis.getVoices().forEach((x) => {

            console.log(x.name);
            console.log(x.lang);
        });

        // Create an utterance object
        var utterance = new SpeechSynthesisUtterance(text);
        //32k character limit

        // Set utterance properties
        utterance.voice = voice;
        utterance.pitch = 1.0;
        utterance.rate = 1.0;
        utterance.volume = 1.0;

        // Speak the utterance
        synthesis.speak(utterance);

    } else {
        alert('Text-to-speech not supported');
        console.log('Text-to-speech not supported.');
    }
}

function initate() {
    var darkmode = document.getElementById("darkmode");
    var dyslexic = document.getElementById("dyslexic");
    var bluelight = document.getElementById("bluelight");
    var largetext = document.getElementById("largetext");
    var normal = document.getElementById("normal");
    var bark_button = document.getElementById("bark");

    normal.onclick = () => toggle("");
    darkmode.onclick = () => toggle("darkmode");
    dyslexic.onclick = () => toggle("dyslexic");
    bluelight.onclick = () => toggle("bluelight");
    largetext.onclick = () => toggle("largetext");
    bark_button.onclick = () => bark();
}

window.onload = initate;