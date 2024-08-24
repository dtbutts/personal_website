class CustomFooter extends HTMLElement {
    connectedCallback() {
        fetch('/footer/footer.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
                this.initializeTicker();
            })
            .catch(error => console.error("Error fetching footer HTML"));
    }

    initializeTicker() {
        this.tickerText = this.querySelector('.ticker-text');
        const lines = [
            'GOOG &#9650; +8.2% SPY &#9650; +6.7% (These aren\'t true, just manifesting my investments)',
            'Is there a better movie than Grand Budapest Hotel?',
            'Noah Cyrus > Miley Cyrus',
            'Punks not dead!',
            'The App Store (2021) generated $85.1B while Google Play generated only $47.9B across more apps - develop for the app store first',
            '(June 2024) 87% of developers are using cross-platform frameworks for mobile app development',
        ];
        const shuffledLines = this.shuffleArray(lines);
        this.setTickerContent(shuffledLines);
        this.setTickerSpeed(25); // Adjust the speed in seconds
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]; // Swap elements
        }
        return array;
    }

    setTickerContent(contentArray) {
        const tickerLines = contentArray.map(line => `<div class="ticker-line">${line}</div>`).join('');
        this.tickerText.innerHTML = tickerLines + tickerLines; // Duplicate the content for seamless scrolling
    }

    setTickerSpeed(speedInSeconds) {
        const tickerText = this.querySelector('.ticker-text');
        tickerText.style.animationDuration = `${speedInSeconds}s`;
    }
}

customElements.define("custom-footer", CustomFooter);
