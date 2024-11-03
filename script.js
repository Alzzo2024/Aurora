document.addEventListener('DOMContentLoaded', () => {
    const downloadsCountElement = document.getElementById('downloads-count');
    const androidDownloadBtn = document.getElementById('downloadAndroidBtn');
    const appleDownloadBtn = document.getElementById('downloadAppleBtn');
    const themeSelector = document.getElementById('themeSelector');
    const sybillaLink = document.getElementById('sybillaLink');
    const sybillaAlert = document.getElementById('sybillaAlert');

    // Initialize downloads count
    let downloads = 17000;
    downloadsCountElement.textContent = downloads;

    // Android download button
    androidDownloadBtn.addEventListener('click', () => {
        downloads++;
        downloadsCountElement.textContent = downloads;
        // Android download link is handled by href attribute
    });

    // Apple download button
    appleDownloadBtn.addEventListener('click', () => {
        downloads++;
        downloadsCountElement.textContent = downloads;
        // iOS download link is handled by href attribute
    });

    // Theme selector
    themeSelector.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        document.body.className = `theme-${selectedTheme}`;
        localStorage.setItem('theme', selectedTheme);
    });

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
        themeSelector.value = savedTheme;
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Sybilla alert
    sybillaLink.addEventListener('click', (e) => {
        e.preventDefault();
        sybillaAlert.style.display = 'block';
        setTimeout(() => {
            sybillaAlert.style.display = 'none';
        }, 5000);
    });

    // Adjust body padding based on header height
    function adjustBodyPadding() {
        const headerHeight = document.querySelector('.header').offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
    }

    window.addEventListener('load', adjustBodyPadding);
    window.addEventListener('resize', adjustBodyPadding);
});
