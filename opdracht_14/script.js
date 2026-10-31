let drink = prompt("Wat wil je drinken?");
document.getElementById("disp");

if (drink === "cola") {
    disp.textContent = "Je krijgt een blikje cola";
    disp.style.backgroundColor = "red";
} else if (drink === "water") {
    disp.textContent = "Je krijgt water, lekker gezond";
    disp.style.backgroundColor = "blue";
} else if (drink === "koffie") {
    disp.textContent = "redbull maar maak het zwart en gezonder";
    disp.style.backgroundColor = "grey";
} else {
    disp.textContent = "dit drankje is helaas op";
    disp.style.backgroundColor = "yellow";
}