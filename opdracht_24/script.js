const array = ["😊", "😢", "😡", "😍", "🥳"]
const HI = document.getElementById("HI")
let index = 0;

setInterval(() => {
    HI.innerHTML = array[index];
    index = (index + 1) % array.length;
}, 500);