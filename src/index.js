// Parallax Effect on Scroll
window.addEventListener('scroll', () => {
    const parallax1 = document.getElementById('parallax1');
    const parallax2 = document.getElementById('parallax2');
    const parallax3 = document.getElementById('parallax3');

    let offset = window.pageYOffset;

    parallax1.style.backgroundPositionY = offset * 0.7 + 'px';
    parallax2.style.backgroundPositionY = offset * 0.5 + 'px';
    parallax3.style.backgroundPositionY = offset * 0.3 + 'px';
});