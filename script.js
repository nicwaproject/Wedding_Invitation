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


// SEND MESSAGE
// URL backend Glitch Anda
const backendUrl = 'https://weddinginvitation.glitch.me/api/messages';

// Fungsi untuk mengirim pesan
async function sendMessage(message) {
  const response = await fetch(backendUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  });
  const data = await response.json();
  return data;
}

// Fungsi untuk mengambil pesan
async function getMessages() {
  const response = await fetch(backendUrl);
  const messages = await response.json();
  return messages;
}

// Fungsi untuk menampilkan pesan di halaman web
function displayMessages(messages) {
  const messagesList = document.getElementById('messagesList');
  messagesList.innerHTML = '';
  messages.forEach(message => {
    const listItem = document.createElement('li');
    listItem.textContent = message;
    messagesList.appendChild(listItem);
  });
}

// Event listener untuk form submit
document.getElementById('messageForm').addEventListener('submit', async (event) => {
  event.preventDefault();
  const messageInput = document.getElementById('messageInput');
  const message = messageInput.value;
  if (message) {
    await sendMessage(message);
    messageInput.value = '';
    const messages = await getMessages();
    displayMessages(messages);
  }
});

// Memuat pesan saat halaman pertama kali dibuka
document.addEventListener('DOMContentLoaded', async () => {
  const messages = await getMessages();
  displayMessages(messages);
});
// COPY BANK NUMBER
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
