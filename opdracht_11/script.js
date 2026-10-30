document.getElementById("body");
document.getElementById("H1");
document.getElementById("img");
document.getElementById("butt");
document.getElementById("butt");
function destroythesun() {
    body.style.backgroundColor = "black";
    H1.style.color = "white";
    img.style.filter = "invert(100%)";
    H1.textContent = "Good Evening"
    butt.style.borderColor = "white";
    butt.style.backgroundColor = "black";
    butt.style.color = "white";
}
function destroytheabscence() {
    body.style.backgroundColor = "white";
    H1.style.color = "black";
    img.style.filter = "invert(0%)";
    H1.textContent = "Good Morning"
    butt2.style.borderColor = "black";
    butt2.style.backgroundColor = "white";
    butt2.style.color = "black";
}