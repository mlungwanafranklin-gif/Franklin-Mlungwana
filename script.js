const words = [
  "Full Stack Web Developer",
  "Cyber Security Analyst",
  "Software Developer",
  "Security Engineer"
];

let index = 0;
let charIndex = 0;
const textSpan = document.querySelector(".changing-text");
const typingSpeed = 100;   

0
const erasingSpeed = 50;   
const delayBetweenWords = 1500; 

function typeWord() {
  if (charIndex < words[index].length) {
    textSpan.textContent += words[index][charIndex];
    charIndex++;
    setTimeout(typeWord, typingSpeed);
  } else {
    setTimeout(eraseWord, delayBetweenWords);
  }
}

function eraseWord() {
  if (charIndex > 0) {
    textSpan.textContent = words[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, erasingSpeed);
  } else {
    index = (index + 1) % words.length;
    setTimeout(typeWord, typingSpeed);
  }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", typeWord);

const bubble = document.getElementById('speech-bubble');

// Messages
const generalMessages = [
    "Welcome to my page!",
    "Explore my work!",
    "Check out my skills!",
    "Nice to see you here!"
];

const contactMessages = [
    "Let's talk about your project!",
    "Reach out now, don't hesitate!",
    "I'd love to hear from you!"
];

const servicesMessages = [
    "Discover our awesome services!",
    "We make your ideas come to life!",
    "Check out what we offer!"
];

// Buttons
const contactBtn = document.getElementById('contact-btn');
const servicesBtn = document.getElementById('services-btn');

// Navbar
const navbar = document.querySelector('.navbar');

let lastUpdate = 0; // timestamp of last text change
const interval = 10000; // 10 seconds

// Helper functions
function getRandomMessage(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function showBubble(messages) {
    bubble.textContent = getRandomMessage(messages);
    bubble.style.opacity = 1;
}

function hideBubble() {
    bubble.style.opacity = 0;
}

// Move bubble with mouse
document.addEventListener('mousemove', (e) => {
    const now = Date.now();

    // Check if over navbar
    const overNavbar = e.target.closest('.navbar') !== null;
    if (overNavbar) {
        hideBubble();
        return;
    }

    bubble.style.left = e.pageX + 'px';
    bubble.style.top = e.pageY + 'px';

    // Only update text every 10 seconds
    if (now - lastUpdate > interval) {
        lastUpdate = now;

        if (contactBtn.matches(':hover')) {
            showBubble(contactMessages);
        } else if (servicesBtn.matches(':hover')) {
            showBubble(servicesMessages);
        } else {
            showBubble(generalMessages);
        }
    }
});

// Hide bubble when leaving the page
document.addEventListener('mouseleave', hideBubble);

// Hover events for buttons (immediate text update)
contactBtn.addEventListener('mouseenter', () => showBubble(contactMessages));
contactBtn.addEventListener('mouseleave', () => showBubble(generalMessages));

servicesBtn.addEventListener('mouseenter', () => showBubble(servicesMessages));
servicesBtn.addEventListener('mouseleave', () => showBubble(generalMessages));
