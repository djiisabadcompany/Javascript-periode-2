const buttonJ = document.getElementById("ja");
const buttonN = document.getElementById("nee");
const divvy = document.getElementById("divvy");

buttonJ.addEventListener("click", () => {
    divvy.classList.toggle("hidden");

})

buttonN.addEventListener("click", () => {
    divvy.classList.toggle("hidden");

})