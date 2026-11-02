const button = document.getElementById("button");
const advicef = document.getElementById("advicef");

button.addEventListener("click", () => {
    const array = [
        "go for a walk",
        "read a book",
        "call a friend",
        "try a new recipe",
        "practice mindfulness",
    ]
    const kibbler = [
        "by getting a move on",
        "by reading a book",
        "by calling a friend",
        "by trying a new recipe",
        "by practicing mindfulness",
    ]

    const randomIndex = Math.floor(Math.random() * array.length);
    const randomKibblerIndex = Math.floor(Math.random() * kibbler.length);

    advicef.innerHTML = "Today you should " + array[randomIndex] + " " + kibbler[randomKibblerIndex] + "!";

});