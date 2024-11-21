class CustomHeader extends HTMLElement {
    connectedCallback() {

        // get html content from the file 
        fetch('/header/header.html')
            .then(response => response.text()) // convert the page to text 
            .then(data => {
                this.innerHTML = data; // insert the fetched text to this page
                this.addEventListenerToLogo();  // add listener to home
            })
            .catch(error => console.error("Error fetching header html"))
    }

    addEventListenerToLogo() {
        const logo = this.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', this.scrollToSectionHeader);
        }
    }

    scrollToSectionHeader(sectionId) {
        const headerOffset = 60; // The height of the header
        const sectionElement = document.getElementById('landing-image');
        const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: sectionPosition,
            behavior: 'smooth'
        });
    }

    scrollToSectionHeader(sectionId) {
        const headerOffset = 60; // The height of the header
        const currentPage = window.location.pathname; // Get the current page URL path
        const sectionElement = document.getElementById(sectionId); // Get the section element by ID

        // Check if we're on the index.html page
        if (currentPage === '/index.html' || currentPage === '/') {
            const sectionElement = document.getElementById('landing-image');
            const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        } else {
            // If not on index.html, redirect to index.html
            window.location.href = '/index.html'; // Redirect to index.html
        }
    }


}

customElements.define("custom-header", CustomHeader);