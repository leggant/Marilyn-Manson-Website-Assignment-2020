/* 
      Load Hero Section Background Images
      create an array of each of the divs with the class of .col-img-item
      get the data attributes from each and assign them to a array
      set the background css image url to the data-img value

 */

 const heroScrollImages = querySelector(".hero-container");

/* 
      Mobile Menu Button Click
*/

const menuBtn = document.querySelector('.menu-btn');
const headerMobileMenu = document.querySelector('.site-main-header');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  headerMobileMenu.classList.toggle('open-mobile-main-menu');
});

// WE ARE CHAOS ALBUM INFORMATION JSON DATA




/* 

      Album Cover Information from music API

 */


/*
        Manson Quotes Section Content

        1. Control of background color 
        2. horizontal change of cards
        3. linked to radio button selection

*/