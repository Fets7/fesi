function toggleMenu() {
    const overlay = document.getElementById('overlay');
    const body = document.body;

    overlay.classList.toggle('active');
    body.classList.toggle('menu-open'); // Hiermee verbergen we de rest van de pagina
}
