const button = document.getElementById("button");
const input = document.getElementById("input");
const output = document.getElementById("output");


button.addEventListener("click", () => {
    output.textContent = `Hello, ${input.value}!`;
    if (input.value === "") {
        output.textContent = "Please enter your name.";
    }
    input.value = "";
});