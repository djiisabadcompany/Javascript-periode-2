let PP = prompt("tell us what year your born in");
let AGE = 2026;

if (PP !== null) {
    document.getElementById("PP").innerHTML =
        "Je bent ongeveer " + (AGE - PP) + " jaar oud"
}

console.log(AGE - PP);