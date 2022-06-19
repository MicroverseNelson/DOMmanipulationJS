const hamMenu =document.querySelector('.menu');
const nav = document.querySelector('nav');

hamMenu.addEventListener('click', () => {
    nav.classList.toggle('navbar');
    hamMenu.classList.toggle('open');
});