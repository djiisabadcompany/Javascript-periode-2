let pizza = 0;
const display = document.getElementById("pizza");
const discette = document.getElementById("mentalsupport");
const main = document.getElementById("main");
const playagaina = document.getElementById("playagaina");
const resetbutton = document.getElementById("resetbutton");
const winner = document.getElementById("winner");

function updateDisplay() {
    winner.classList.toggle("show", pizza >= 10);
    resetbutton.hidden = pizza < 10;

    if (pizza === 0) {
        display.style.backgroundColor = "white";
        discette.textContent = "klik voor pizza!!!";
        main.style.backgroundColor = "white";
    } else if (pizza >= 1 && pizza <= 3) {
        display.style.backgroundColor = "grey";
        discette.textContent = "MEER";
        main.style.backgroundColor = "grey";
    } else if (pizza >= 4 && pizza <= 9) {
        display.style.backgroundColor = "red";
        discette.textContent = "GOOO";
        main.style.backgroundColor = "red";
    } else if (pizza >= 10) {
        display.style.backgroundColor = "orange";
        discette.textContent = "GEWONNEN!!!!";
        main.style.backgroundColor = "orange";
    }
    else {
        display.style.backgroundColor = "";
    }
}

function dracula() {
    pizza++;
    updateDisplay();
    display.textContent = pizza;

}

function count() {
    pizza--;
    updateDisplay();
    if (pizza <= 0) {
        pizza = 0;
    }

    display.textContent = pizza;
}

function reset() {
    if (pizza >= 10) {
        pizza = 0;
        updateDisplay();
        display.textContent = pizza;
    }
}

updateDisplay();
