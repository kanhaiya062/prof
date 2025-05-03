let navbar=document.querySelector(".nav-links")
let hamburger=document.querySelector(".hamburger")
let icons=document.querySelectorAll("i")

if (hamburger && navbar) {
    hamburger.addEventListener('click', function(event){
        let isVisible = navbar.getAttribute('data-visible');
        if(isVisible == 'true'){
            navbar.setAttribute('data-visible','false');
            icons[0].setAttribute('data-visible','true');
            icons[1].setAttribute('data-visible','false')
        }
        else
        {
            navbar.setAttribute('data-visible','true');
            icons[0].setAttribute('data-visible','false');
            icons[1].setAttribute('data-visible','true')
        }
    })
}

const roles = ["Web Developer", "Freelancer", "Prompt Engineer"];
let currentRole = 0;
let i = 0;
let isDeleting = false;

function typeText() {
const text = roles[currentRole];
const element = document.getElementById("changing-role");

if (isDeleting) {
    element.textContent = text.substring(0, i - 1);
    i--;
} else {
    element.textContent = text.substring(0, i + 1);
    i++;
}

let speed = isDeleting ? 50 : 100;

if (!isDeleting && i === text.length) {
    isDeleting = true;
    speed = 1500; // Pause before deleting
} else if (isDeleting && i === 0) {
    isDeleting = false;
    currentRole = (currentRole + 1) % roles.length;
    speed = 500; // Pause before typing next role
}

setTimeout(typeText, speed);
}

// Start the animation when the page loads
document.addEventListener("DOMContentLoaded", () => setTimeout(typeText, 500));


// Portfolio Filter
document.addEventListener('DOMContentLoaded', function() {
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
button.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    // Filter projects
    projectCards.forEach(card => {
        if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
});
});
