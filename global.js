

const glow = document.getElementById('glow');
var lumosOn = false;

document.addEventListener("mousemove", function (event) {

    if (lumosOn) {
        // Get mouse coordinates
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        // Adjust glow position to follow mouse
        const offsetX = 700; // Adjust this value to center the glow around the mouse cursor
        const offsetY = 400; // Adjust this value to center the glow around the mouse cursor
        glow.style.transform = `translate(${mouseX - offsetX}px, ${mouseY - offsetY}px)`;

        // Show the glow effect
        glow.style.opacity = 1;
    }

});

document.addEventListener("mouseleave", function () {
    if (lumosOn) {
        // Hide the glow effect when mouse leaves the document
        glow.style.opacity = 0;
    }
});

function scrollToContent(sectionId) {
    const headerOffset = 59; // The height of the header
    const sectionElement = document.getElementById(sectionId);
    const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

    window.scrollTo({
        top: sectionPosition,
        behavior: 'smooth'
    });
}
function scrollToSection(sectionId) {
    const headerOffset = 60; // Adjust this based on your header height
    const sectionElement = document.getElementById(sectionId);

    if (sectionElement) {
        const rightColumn = document.querySelector('.right-column');
        const sectionPosition = sectionElement.getBoundingClientRect().top + rightColumn.scrollTop - headerOffset - 20;

        rightColumn.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    } else {
        console.error(`Section with ID ${sectionId} not found`);
    }
}

window.scrollToSection = scrollToSection;
window.scrollToContent = scrollToContent;
