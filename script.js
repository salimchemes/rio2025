const targetDate = new Date("2025-11-16T02:55:00");

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerHTML = "La monada se fue a RIO!!!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

// Modal functionality
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

// Show modal on page load
window.addEventListener("load", function() {
    document.getElementById("modal").classList.remove("hidden");
});

setInterval(updateCountdown, 1000);
updateCountdown();