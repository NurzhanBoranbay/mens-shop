
const burger = document.querySelector('.header__burger');
const nav = document.querySelector('.nav');
const link = document.querySelectorAll('a');

link.forEach(l => {
  l.addEventListener('click', event => event.preventDefault());
})

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
})