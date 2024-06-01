document.getElementById('register-btn').addEventListener('click', function() {
    alert('Thank you for registering! We look forward to seeing you at the event.');
});

// Image Slider
var currentImageIndex = 0;
var images = document.querySelectorAll('.car-details img');

document.getElementById('next-btn').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].style.display = 'block';
});

document.getElementById('prev-btn').addEventListener('click', function() {
    images[currentImageIndex].style.display = 'none';
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].style.display = 'block';
});

// Countdown Timer
var eventDate = new Date('2024-06-15T10:00:00'); // Event date and time
var countdownElement = document.getElementById('countdown');

function updateCountdown() {
    var currentDate = new Date();
    var timeDifference = eventDate - currentDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    if (timeDifference <= 0) {
        clearInterval(timer); // Stop the countdown when the event starts
        countdownElement.textContent = 'Event has started!';
    }
}

updateCountdown(); // Initial call to display countdown
var timer = setInterval(updateCountdown, 1000);