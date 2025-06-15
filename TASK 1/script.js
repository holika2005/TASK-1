// Get the navbar element
const navbar = document.querySelector('.navbar');

// Get all the h2 elements in the content section
const subheadings = document.querySelectorAll('.content h2');

// Define the colors for subheadings when active
const subheadingColors = [
    'active-h2-color-1', // Corresponds to --color-h2-active-1 (Terracotta)
    'active-h2-color-2', // Corresponds to --color-h2-active-2 (Vibrant Yellow/Orange)
    'active-h2-color-3', // Corresponds to --color-h2-active-3 (Emerald Green)
    'active-h2-color-4'  // Corresponds to --color-h2-active-4 (Amethyst Purple)
    // Add more classes here if you define more in CSS
];


// Function to check if an element is in viewport
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


// Function to handle scroll events for subheadings
function handleSubheadingScroll() {
    subheadings.forEach((h2, index) => {
        const rect = h2.getBoundingClientRect();
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const navbarHeight = navbar.offsetHeight;

        // Check if the subheading is within the active zone
        // Top edge of h2 is within viewport + some buffer to account for navbar, and bottom edge is visible
        if (rect.top <= navbarHeight + 20 && rect.bottom >= viewportHeight * 0.25) {
            h2.classList.add(subheadingColors[index % subheadingColors.length]);
        } else {
            h2.classList.remove(subheadingColors[index % subheadingColors.length]);
        }
    });
}


// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
    // Navbar scroll effect: Change color when scrolled past 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Subheading color change on scroll
    handleSubheadingScroll();
});

// Run handleSubheadingScroll once on page load to set initial colors if elements are already in view
document.addEventListener('DOMContentLoaded', handleSubheadingScroll);