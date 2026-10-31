document.getElementById("hoi");
document.getElementById("main");
let isevil = false;

hoi.addEventListener("click", () => {
    isevil = !isevil;

    if (isevil) {
        main.style.background = "red";
        hoi.textContent = "evil hi";
    }

    else {
        main.style.background = "white";
        hoi.textContent = "hi";
    }
});