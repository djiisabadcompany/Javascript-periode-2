age = prompt("What's your age?");
disp = document.getElementById("disp");

if (age >= 65) {
    disp.textContent = "Hallo senior";
    disp.style.backgroundColor = "grey";
} else if (age >= 18) {
    disp.textContent = "Welkom!";
    disp.style.backgroundColor = "green";
} else {
    disp.textContent = "je mag hier nog niet naar binnen";
    disp.style.backgroundColor = "red";
}