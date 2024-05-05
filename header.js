document.addEventListener('DOMContentLoaded', function () {
    const headerPlaceholder = document.getElementById('header-container');

    fetch('header.html')
        .then(response => response.text())
        .then(html => {
            headerPlaceholder.innerHTML = html;
        });
});
