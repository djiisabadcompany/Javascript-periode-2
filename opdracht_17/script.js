const bissel = document.getElementById("bissel");
const hid = document.getElementById("hid");

bissel.addEventListener("mouseover", () => {
    bissel.style.backgroundColor = "red";
    hid.style.color = "black";
    bissel.style.width = "500px";
    hid.textContent = "hover!";
});

bissel.addEventListener("mouseout", () => {
    bissel.style.backgroundColor = "grey";
    hid.style.color = "black";
    bissel.style.width = "400px";
    hid.textContent = "nice";
});