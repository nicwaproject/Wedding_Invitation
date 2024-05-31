document.addEventListener("DOMContentLoaded", function() {
    function getQueryParameter(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const coupleNames = getQueryParameter('couple');
    if (coupleNames) {
        document.getElementById('coupleNames').textContent = coupleNames;
    } else {
        document.getElementById('coupleNames').textContent = 'Zhapran & Fira'; // Default names
    }

    const guestName = getQueryParameter('guest');
    if (guestName) {
        document.getElementById('guestName').textContent = guestName;
    } else {
        document.getElementById('guestName').textContent = 'Guest';
    }

    const openButton = document.getElementById('openButton');
    const invitationCover = document.getElementById('invitationCover');
    const invitationContent = document.getElementById('invitationContent');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const playPauseButton = document.getElementById('playPauseButton');
    const audioControls = document.querySelector('.audio-controls');

    let isPlaying = false;

    openButton.addEventListener('click', function() {
        invitationCover.style.display = 'none';
        invitationContent.style.display = 'flex';
        audioControls.style.display = 'block'; // Show the button
        togglePlayPause();
    });

    function togglePlayPause() {
        if (isPlaying) {
            backgroundMusic.pause();
            playPauseButton.src = 'play.png'; // Change this to the path of your play button image
        } else {
            backgroundMusic.play();
            playPauseButton.src = 'pause.png'; // Change this to the path of your pause button image
        }
        isPlaying = !isPlaying;
    }

    playPauseButton.addEventListener('click', togglePlayPause);
});

document.addEventListener("DOMContentLoaded", function() {
    function calculateCountdown() {
        const weddingDate = new Date('2024-06-30'); // Set your wedding date here
        const currentDate = new Date();
        let timeRemaining = weddingDate - currentDate;

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    setInterval(calculateCountdown, 1000);
    calculateCountdown();
});

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add the float-in animation class to elements in the viewport
function floatInSection() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (isInViewport(section)) {
            section.classList.add('float-in');
        }
    });
}

// Event listener for scroll event
document.addEventListener('scroll', floatInSection);

// Initial float-in animation for elements in viewport on page load
floatInSection();

// SEND MESSAGE
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('whatsappForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Replace "1234567890" with the couple's WhatsApp number
        const whatsappNumber = "+6287860929667";
        
        // Get the message from the form
        const message = encodeURIComponent(document.getElementById('message').value);
        
        // Construct the WhatsApp URL
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
        
        // Open WhatsApp in a new tab
        window.open(whatsappUrl, '_blank');
    });
});

function copyAccountDetails() {
    const accountDetails = document.querySelector('.bank-number').innerText;
    navigator.clipboard.writeText(accountDetails)
        .then(() => {
            alert('Account details copied!');
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
        });
}
