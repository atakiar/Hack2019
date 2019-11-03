function toggle(css) {
    var e = document.getElementById("body");
    console.log("hi");
    if (!css) {
        e.className = "normal";
    } else {
        e.classList.toggle(css);
    }
}

function initate() {
    var darkmode = document.getElementById("darkmode");
    var dyslexic = document.getElementById("dyslexic");
    var bluelight = document.getElementById("bluelight");
    var largetext = document.getElementById("largetext");
    var normal = document.getElementById("normal");

    normal.onclick = () => toggle("");
    darkmode.onclick = () => toggle("darkmode");
    dyslexic.onclick = () => toggle("dyslexic");
    bluelight.onclick = () => toggle("bluelight");
    largetext.onclick = () => toggle("largetext");
}

window.onload = initate;