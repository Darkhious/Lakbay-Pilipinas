let currentPoint = 1;
const totalPoints = 5;

function changeMap(direction) {
    // Hide the current point
    document.getElementById(`point-${currentPoint}`).style.display = 'none';

    // Update the current point
    currentPoint += direction;

    // Wrap around if needed
    if (currentPoint < 1) currentPoint = totalPoints;
    if (currentPoint > totalPoints) currentPoint = 1;

    // Show the new point
    document.getElementById(`point-${currentPoint}`).style.display = 'flex';
}

// Optional: make sure only point-1 is visible on page load
window.onload = function() {
    for (let i = 1; i <= totalPoints; i++) {
        document.getElementById(`point-${i}`).style.display = (i === 1) ? 'flex' : 'none';
    }
};


// Set up an Intersection Observer to detect when cards enter the viewport
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
    });
}, {
    threshold: 0.5 // Trigger animation when 50% of the card is in the viewport
});

// Observe each card
cards.forEach(card => {
    observer.observe(card);
});
