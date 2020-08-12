const menuBtn = document.querySelector('.menu-btn');
const headerMobileMenu = document.querySelector('.site-main-header');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    headerMobileMenu.classList.add('open-mobile-main-menu');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    headerMobileMenu.classList.remove('open-mobile-main-menu');
    menuOpen = false;
  }
});