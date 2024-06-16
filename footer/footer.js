class CustomFooter extends HTMLElement {
    connectedCallback() {

        // get html content from the file 
        fetch('/footer/footer.html')
            .then(response => response.text()) // convert the page to text 
            .then(data => {
                this.innerHTML = data; // insert the fetched text to this page
            })
            .catch(error => console.error("Error fetching footer html"))
    }
}

customElements.define("custom-footer", CustomFooter);