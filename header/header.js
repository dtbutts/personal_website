class CustomHeader extends HTMLElement {
    connectedCallback() {
        fetch('/header/header.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
                this.addEventListenerToLogo();
                this.addEventListenersToMenuItems();
                this.addHamburgerToggle();
            })
            .catch(error => console.error("Error fetching header html"));
    }

    addEventListenerToLogo() {
        const logo = this.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => this.scrollToSectionHeader('landing-image'));
        }
    }

    addEventListenersToMenuItems() {
        const menuItems = this.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const sectionId = e.target.getAttribute('data-section');
                this.scrollToSectionHeader(sectionId);

                // Close menu on mobile after clicking link
                this.closeMobileMenu();
            });
        });
    }

    addHamburgerToggle() {
        const hamburger = this.querySelector('.hamburger');
        const menu = this.querySelector('.menu');
        if (hamburger && menu) {
            hamburger.addEventListener('click', () => {
                menu.classList.toggle('show');
            });
        }
    }

    closeMobileMenu() {
        const menu = this.querySelector('.menu');
        if (menu && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    }

    scrollToSectionHeader(sectionId) {
        const headerOffset = 80;
        const currentPage = window.location.pathname;

        if (currentPage === '/index.html' || currentPage === '/') {
            const sectionElement = document.getElementById(sectionId);
            if (sectionElement) {
                const sectionPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset - headerOffset;
                window.scrollTo({
                    top: sectionPosition,
                    behavior: 'smooth'
                });
            }
        } else {
            // Redirect with hash to scroll after load
            window.location.href = `/index.html#${sectionId}`;
        }
    }
}

customElements.define("custom-header", CustomHeader);
