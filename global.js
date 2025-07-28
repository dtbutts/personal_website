
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


/*

    CODE FOR PROFILE PICTURES SLIDES 

// cycle GIF images 
const images = [
    'assets/images/prof_1.jpg',
    'assets/images/prof_2.jpg',
    'assets/images/prof_3.jpg',
    'assets/images/prof_4.jpg',
    'assets/images/prof_1.jpg',
    'assets/images/prof_5.jpg',
    'assets/images/prof_7.jpg',
    'assets/images/prof_6.jpg',
    'assets/images/prof_8.jpg',

];

let currentIndex = 0;

function changeImage() {
    const slideshow = document.getElementById('slideshow');
    currentIndex = (currentIndex + 1) % images.length;
    slideshow.src = images[currentIndex];
}

// Check if the current page is index.html
if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
    setInterval(changeImage, 500);
}

*/