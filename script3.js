// Countdown Timer Script
function updateCountdown() {
    const eventDate = new Date("2025-02-13T00:00:00Z").getTime();
    const currentTime = new Date().getTime();
    const timeDifference = eventDate - currentTime;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const timerElement = document.getElementById("timer");
    timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Refresh every second
    setTimeout(updateCountdown, 1000);
}

updateCountdown();

function initMap() {
    const festLocation = { lat: 28.7041, lng: 77.1025 }; // Example: Coordinates for New Delhi
    const map = new google.maps.Map(document.getElementById("map-container"), {
        zoom: 15,
        center: festLocation,
    });

    const marker = new google.maps.Marker({
        position: festLocation,
        map: map,
        title: "Time Travel Fest Location",
    });
}
function click() {
    let btn = document.getElementsByClassName(".tickets");
    btn.addEventListener("click", function() {
        window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdoHz54mGROyAz_oRzLXOazWG15frOfgFKJGr8KsijqpijabA/viewform?usp=dialog"

    });
}
// let currentIndex = 0;
// const slides = document.querySelector(".slides");
// const totalSlides = document.querySelectorAll(".slides img").length;

// function nextSlide() {
//     currentIndex++;
//     if (currentIndex >= totalSlides) {
//         currentIndex = 0; // Loop back to first slide
//     }
//     slides.style.transform = `translateX(${-currentIndex * 600}px)`;
// }

// // Change slide every 3 seconds
// setInterval(nextSlide, 3000);
