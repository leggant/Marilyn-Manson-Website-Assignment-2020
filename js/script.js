// WE ARE CHAOS ALBUM INFORMATION JSON DATA



// Mobile Menu Button Click

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

// Album Cover Information from http://user.music-story.com/ music API

const key = "0d391c8edccaba80434fd9ba5b7e44fdefa10d43";
const signature = "ce94f195f755edcad23d050694ca5b51f094d8a1";
const http_method = 'GET'
//GET&http://api.music-story.com%2Foauth%2Frequest_token&oauth_consumer_key%3D<0d391c8edccaba80434fd9ba5b7e44fdefa10d43>
//http://api.music-story.com/oauth/request_token?oauth_consumer_key=0d391c8edccaba80434fd9ba5b7e44fdefa10d43&oauth_signature=ce94f195f755edcad23d050694ca5b51f094d8a1
//const apiAddress = 'http://api.music-story.com/oauth/request_token?oauth_consumer_key=<VOTRE CONSUMER KEY>&oauth_signature=<SIGNATURE OAUTH>';
/* function sign_request(request, consumer_secret, token_secret = null, http_method) {

} */
