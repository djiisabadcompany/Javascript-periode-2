let person = prompt("Please enter your name");

if (person != null) {
    document.getElementById("HEAD").innerHTML =
        "Hallo  " + person + "  welkom bij mijn eerste JavaScript-pagina!";
}

console.log(person);