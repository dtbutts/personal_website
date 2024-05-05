class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = '<div class="header">' +
            '<div class="logo">PUT LOGO</div>' +
            '<ul class="header-menu">' +
            '<li class="menu-item"><a href="pages/about.html" class="menu-link">About</a></li>' +
            '<li class="menu-item"><a href="pages/experience.html" class="menu-link">Experience</a></li>' +
            '<li class="menu-item"><a href="pages/projects.html" class="menu-link">Projects</a></li>' +
            '<li class="menu-item"><a href="pages/resume.html" class="menu-link">Resume</a></li>' +
            '<li class="menu-item"><a href="pages/contact.html" class="menu-link">Contact</a></li>' +
            '</ul>' +
            '</div>';
    }
}

customElements.define("custom-header", CustomHeader);