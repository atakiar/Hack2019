function swapStyleSheet(sheet) {
  console.log(sheet);
  document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
  var darkmode = document.getElementById("darkmode");
  var dyslexic = document.getElementById("dyslexic");
  var bluelight = document.getElementById("bluelight");
  var largetext = document.getElementById("largetext");
  var normal = document.getElementById("normal");


  normal.onclick = () => swapStyleSheet("/static/style.css");
  darkmode.onclick = () => swapStyleSheet("/static/darkmode.css");
  dyslexic.onclick = () => swapStyleSheet("/static/dyslexic.css");
  bluelight.onclick = () => swapStyleSheet("/static/bluelight.css");
  largetext.onclick = () => swapStyleSheet("/static/largetext.css");
}

window.onload = initate;