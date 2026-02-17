export const words = [
    "Full Stack Developer",
    "Cyber Security Analyst",
    "Software Engineer",
    "Security Engineer"
];

document.addEventListener('mousemove', (e) => {
    bubble.textContent = getRandomMessage(generalMessages);
});
