let budget = 100;
let product = 60;
document.getElementById("butt");
document.getElementById("disp");


if (budget >= product) {
    disp.textContent = "je hebt genoeg geld";
    disp.style.backgroundColor = "green";
} else {
    disp.textContent = "je hebt niet genoeg geld";
    disp.style.backgroundColor = "red";
}