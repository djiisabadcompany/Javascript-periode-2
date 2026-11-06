const button = document.getElementById("ja");
const buttonA = document.getElementById("jaA");
const divvyA = document.getElementById("divvyA");
const divvy = document.getElementById("divvy");
const output = document.getElementById("output");
const vraag = document.getElementById("vraag");
const antwoord = document.getElementById("antwoord");
const array = ["ja", "nee", "misschien", "ik weet het niet", "vraag het later nog eens", "ik ben er niet zeker van", "het is mogelijk", "het is onwaarschijnlijk", "het is zeker", "het is onmogelijk"];

button.addEventListener("click", () => {
    if (vraag.value.trim() === "") {
        output.textContent = "vul een vraag in";
        return;
    } else {
        antwoord.textContent = vraag.value + ", " + array[Math.floor(Math.random() * array.length)];
        antwoord.style.color = "#" + Math.floor(Math.random() * 1991).toString(16);
        output.textContent = "";
        divvy.classList.toggle("hidden");
        divvyA.classList.toggle("shown");
        divvyA.animate([
            { transform: 'translateY(-100%)', opacity: 0 },
            { transform: 'translateY(0)', opacity: 1 }
        ], {
            duration: 500,
            easing: 'ease-out'
        });
    }
});

buttonA.addEventListener("click", () => {
    divvy.classList.toggle("hidden");
    divvyA.classList.toggle("shown");
    divvy.animate([
        { transform: 'translateY(-100%)', opacity: 0 },
        { transform: 'translateY(0)', opacity: 1 }
    ], {
        duration: 500,
        easing: 'ease-out'
    });
});

