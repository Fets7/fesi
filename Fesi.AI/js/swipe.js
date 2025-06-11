
  let currentIndex;      // niet meteen een waarde geven
  const gap = 40;        // zelfde als in --uc-gap

  function updateSlider() {
    const container      = document.querySelector('.use-case-container');
    const card           = document.querySelector('.use-case-card');
    const cardWidth      = card.offsetWidth;
    const containerWidth = container.parentElement.offsetWidth;

    // 1) padding zodat de “eerste” kaart in het midden staat
    const centerOffset = (containerWidth - cardWidth) / 2;
    container.style.paddingLeft  = `${centerOffset}px`;
    container.style.paddingRight = `${centerOffset}px`;

    // 2) raw translate voor currentIndex
    const rawOffset = (cardWidth + gap) * currentIndex;
    container.style.transform = `translateX(-${rawOffset}px)`;
  }

  function scrollNext() {
    const total = document.querySelectorAll('.use-case-card').length;
    currentIndex = (currentIndex + 1) % total;
    updateSlider();
  }

  function scrollBack() {
    const total = document.querySelectorAll('.use-case-card').length;
    currentIndex = (currentIndex - 1 + total) % total;
    updateSlider();
  }

  function checkButtonVisibility() {
    const container      = document.querySelector('.use-case-container');
    const containerWidth = container.parentElement.offsetWidth;
    const contentWidth   = container.scrollWidth;
    const leftBtn        = document.querySelector('.slider-button.left');
    const rightBtn       = document.querySelector('.slider-button.right');

    if (contentWidth > containerWidth) {
      leftBtn.style.display  = 'block';
      rightBtn.style.display = 'block';
    } else {
      leftBtn.style.display  = 'none';
      rightBtn.style.display = 'none';
    }
  }

  window.addEventListener('load', () => {
    const totalCards = document.querySelectorAll('.use-case-card').length;
    currentIndex = Math.floor(totalCards / 2);  // start op middelste kaart
    checkButtonVisibility();
    updateSlider();
  });

  window.addEventListener('resize', () => {
    checkButtonVisibility();
    updateSlider();
  });
