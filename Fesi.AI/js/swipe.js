let currentIndex = 0;

function scrollNext() {
    const container = document.querySelector('.use-case-container');
    const cardWidth = document.querySelector('.use-case-card').offsetWidth;
    const gap = 20; // Dezelfde waarde als in de CSS
    currentIndex++;
    const maxIndex = container.children.length - 1;
    
    if (currentIndex > maxIndex) {
        currentIndex = 0; // Ga terug naar de eerste kaart
    }
    
    const scrollAmount = (cardWidth + gap) * currentIndex;
    container.style.transform = `translateX(-${scrollAmount}px)`;
    checkButtonVisibility();
}

function scrollLeft() {
    const container = document.querySelector('.use-case-container');
    const cardWidth = document.querySelector('.use-case-card').offsetWidth;
    const gap = 20; // Dezelfde waarde als in de CSS
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = container.children.length - 1; // Ga naar de laatste kaart
    }
    
    const scrollAmount = (cardWidth + gap) * currentIndex;
    container.style.transform = `translateX(-${scrollAmount}px)`;
    checkButtonVisibility();
}

function checkButtonVisibility() {
    const container = document.querySelector('.use-case-container');
    const containerWidth = container.offsetWidth;
    const contentWidth = container.scrollWidth;
    const leftButton = document.querySelector('.slider-button.left');
    const rightButton = document.querySelector('.slider-button.right');
    
    if (contentWidth > containerWidth) {
        rightButton.style.display = 'block';
        leftButton.style.display = 'block';
    } else {
        rightButton.style.display = 'none';
        leftButton.style.display = 'none';
    }
}

// Controleer de zichtbaarheid van de knoppen bij het laden van de pagina en bij het aanpassen van de grootte van het venster
window.addEventListener('load', checkButtonVisibility);
window.addEventListener('resize', checkButtonVisibility);