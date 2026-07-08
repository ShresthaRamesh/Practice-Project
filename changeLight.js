

const button = document.getElementById("themeButton");
const bulb = document.getElementById("bulb");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        bulb.src = "LightOFF.png"
        button.textContent = "Turn OFF";
    } else {
        bulb.src = "LightON.png"
        button.textContent = "Turn ON";
        
    }
});