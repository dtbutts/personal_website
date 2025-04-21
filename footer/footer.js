class CustomFooter extends HTMLElement {
    connectedCallback() {
        fetch('/footer/footer.html')
            .then(response => response.text())
            .then(data => {
                this.innerHTML = data;
                // this.initializeTicker();
            })
            .catch(error => console.error("Error fetching footer HTML"));
    }

    // initializeTicker() {
    //     const tickerTape = this.querySelector(".ticker-tape");
    //     if (tickerTape) {
    //         // Define the ticker tape lines
    //         const lines = [
    //             "GOOG &#9650; +8.2% SPY &#9650; +6.7% (These aren't true, just manifesting my investments)",
    //             "(June 2024) 87% of developers are using cross-platform frameworks for mobile app development",
    //             "The weirder you are, the more unique you are, the more competitive and interesting you are",
    //             "Noah Cyrus > Miley Cyrus",
    //             "The App Store (2021) generated $85.1B while Google Play generated only $47.9B across more apps",
    //             "Justice for Peanut 🐿️",
    //             "Strive to work like Gail Lewis",
    //         ];

    //         // Shuffle and create three copies
    //         let allSpans = [];
    //         for (let i = 0; i < 3; i++) {
    //             const shuffledLines = this.shuffleArray([...lines]);
    //             shuffledLines.forEach(line => {
    //                 const span = document.createElement('span');
    //                 span.innerHTML = line;
    //                 allSpans.push(span);
    //             });
    //         }

    //         // Clear existing ticker tape and append new spans
    //         tickerTape.innerHTML = "";
    //         allSpans.forEach(span => tickerTape.appendChild(span));
    //     }
    // }

    // shuffleArray(array) {
    //     // Fisher-Yates shuffle algorithm
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    //     return array;
    // }
}

customElements.define("custom-footer", CustomFooter);
