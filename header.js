class CustomHeader extends HTMLElement {
    connectedCallback() {

        // get html content from the file 
        fetch('/header.html')
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
            logo.addEventListener('click', this.handleLogoClick);
        }
    }

    // handle logo click
    handleLogoClick(event) {
        event.preventDefault(); // Prevent the default action if needed
        window.location.href = '/';
    }
}

customElements.define("custom-header", CustomHeader);