const hamburger = document.querySelector('.hamburger');
const nav2 = document.querySelector('.nav2');

hamburger.addEventListener('click', () => {
    nav2.classList.toggle('active');
});