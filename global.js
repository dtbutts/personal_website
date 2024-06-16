

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
