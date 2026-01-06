let powerOn = false;
const btn = document.querySelector(".power-btn");

btn.addEventListener("click", () => {
    powerOn = !powerOn;

    if (powerOn) {
        document.body.classList.add("power-on");
        btn.textContent = "Deactivate Power";
        alert("🔥 FAHMAN POWER ACTIVATED!");
    } else {
        document.body.classList.remove("power-on");
        btn.textContent = "Activate Power";
        alert("⚡ FAHMAN POWER DEACTIVATED!");
    }
});
