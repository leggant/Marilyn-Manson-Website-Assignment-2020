const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.main-nav');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    mobileMenu.classList.add('open-mobile-main-menu');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    mobileMenu.classList.remove('open-mobile-main-menu');
    menuOpen = false;
  }
});