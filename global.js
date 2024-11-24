

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
    const section = document.getElementById(sectionId);
    if (section) {
        const offset = window.innerWidth <= 768 ? 30 : 75;

        // Calculate the target scroll position for the entire document
        const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;

        if (window.innerWidth <= 768) {
            const rightColumn = document.querySelector('.right-column');
            const rightColumnRect = rightColumn.getBoundingClientRect();
            const sectionTopInRightColumn = section.getBoundingClientRect().top - rightColumnRect.top + rightColumn.scrollTop;

            // Check if the section is within the right column's scrollable area
            if (sectionTopInRightColumn >= 0 && sectionTopInRightColumn <= rightColumn.scrollHeight) {
                rightColumn.scrollTo({
                    top: sectionTopInRightColumn - offset,
                    behavior: 'smooth'
                });
            } else {
                // Fallback to scrolling the whole window if the section is not within the right column
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        }
    }
}

function testPrint() {
    console.log("Cliked");
}

function goTo(input, openInNewWindow = false) {
    if (openInNewWindow) {
        window.open(input, '_blank');
    } else {
        window.location.href = input;
    }
}



window.goTo = goTo;
window.testPrint = testPrint;
window.scrollToSection = scrollToSection;
window.scrollToContent = scrollToContent;


// cycle GIF images 
const images = [
    'assets/images/construction_monkey.png',
    'assets/images/band.jpg',
    'assets/images/emailIcon.svg',
];

let currentIndex = 0;

function changeImage() {
    const slideshow = document.getElementById('slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

// Check if the current page is index.html
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    setInterval(changeImage, 1000); // Change image every 1 second
}