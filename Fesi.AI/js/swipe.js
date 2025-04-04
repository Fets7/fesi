let currentIndex = 0;

function scrollNext() {
    const container = document.querySelector('.use-case-container');
    const cardWidth = document.querySelector('.use-case-card').offsetWidth;
    const gap = 20; // Dezelfde waarde als in de CSS
    const maxIndex = document.querySelectorAll('.use-case-card').length;

    currentIndex++;
    if (currentIndex >= maxIndex) {
        currentIndex = 0; // Loopt weer naar de eerste kaart als het einde is bereikt
    }

    const scrollAmount = (cardWidth + gap) * currentIndex;
    container.style.transition = "transform 0.5s ease"; // Voeg een overgang toe
    container.style.transform = `translateX(-${scrollAmount}px)`;
}

function scrollBack() {
    const container = document.querySelector('.use-case-container');
    const cardWidth = document.querySelector('.use-case-card').offsetWidth;
    const gap = 20; // Dezelfde waarde als in de CSS
    const maxIndex = document.querySelectorAll('.use-case-card').length;

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = maxIndex - 1; // Loopt weer naar de laatste kaart als het begin is bereikt
    }

    const scrollAmount = (cardWidth + gap) * currentIndex;
    container.style.transition = "transform 0.5s ease"; // Voeg een overgang toe
    container.style.transform = `translateX(-${scrollAmount}px)`;
}

function checkButtonVisibility() {
    const container = document.querySelector('.use-case-container');
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    const leftButton = document.querySelector('.slider-button.left');
    const rightButton = document.querySelector('.slider-button.right');
    
    // Verberg de knoppen als er geen ruimte meer is om te scrollen
    if (contentWidth > containerWidth) {
        rightButton.style.display = 'block';
        leftButton.style.display = 'block';
    } else {
        rightButton.style.display = 'none';
        leftButton.style.display = 'none';
    }
}

// Zorg ervoor dat de slider goed werkt bij het laden van de pagina
window.addEventListener('load', checkButtonVisibility);
window.addEventListener('resize', checkButtonVisibility);
