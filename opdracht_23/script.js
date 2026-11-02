const button = document.getElementById("button");
const input = document.getElementById("input");
const button2 = document.getElementById("button2");
const total = document.getElementById("total");
const snacksslot = [
    document.getElementById("snack1"),
    document.getElementById("snack2"),
    document.getElementById("snack3")
];

let snacks = [];

button.addEventListener("click", () => {
    const snack = input.value.trim();

    if (snack === "") {
        return;
    }
    if (snacks.length >= snacksslot.length) {
        return;
    }
    snacks.push(snack);

    snacksslot[snacks.length - 1].textContent = snack;

    input.value = "";
    total.textContent = `total snacks: ${snacks.length}`;
});

button2.addEventListener("click", () => {
    snacks.pop();
    snacksslot[snacks.length].textContent = "";
    total.textContent = `total snacks: ${snacks.length}`;
});