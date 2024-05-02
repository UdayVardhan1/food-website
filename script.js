let header = document.getElementsByClassName('navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.scrolly > 0);
});