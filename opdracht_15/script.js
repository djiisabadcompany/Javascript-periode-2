let redbull = 0;
const display = document.getElementById("redbull");
const discette = document.getElementById("antwoord");

function updateDisplay() {
    if (redbull === 0) {
        display.style.backgroundColor = "white";
        discette.textContent = "neem een redbulletje";
    } else if (redbull >= 1 && redbull <= 3) {
        display.style.backgroundColor = "red";
        discette.textContent = "geniet";
    } else if (redbull >= 4) {
        display.style.backgroundColor = "orange";
        discette.textContent = "das genoeg";
    }
    else {
        display.style.backgroundColor = "";
    }
}

function dracula() {
    redbull++;
    updateDisplay();
    display.textContent = redbull;

}

function count() {
    redbull--;
    updateDisplay();
    if (redbull <= 0) {
        redbull = 0;
    }

    display.textContent = redbull;
}

function reset() {
    redbull = 0;
    updateDisplay();
    display.textContent = redbull;
} 

updateDisplay();
