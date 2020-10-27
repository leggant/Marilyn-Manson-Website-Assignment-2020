/* -------------------------------------------------------------------------- */
/*                         HERO SECTION IMAGE CAROSEL                         */
/* -------------------------------------------------------------------------- */

const headerImageDivs = document.querySelectorAll('.col-img-item');

headerImageDivs.forEach((imgItem) => {
    imgItem.addEventListener('mouseover', () => {
        imgItem.classList.add("img-hover")
    })
    imgItem.addEventListener('mouseout', () => {
        imgItem.classList.remove('img-hover')
    })
});

/* -------------------------------------------------------------------------- */
/*                        HEADER HERO SECTION FORM AREA                       */
/* -------------------------------------------------------------------------- */

gsap.fromTo(".cta-headline", { opacity: 0, x: -20 }, { opacity: 1, x: 0, duration: 1 })
gsap.fromTo(".chaos", { width: 0, x: 10 }, { width: "60%", x: 10, duration: 0.5, delay: 0.5 })
gsap.fromTo(".chaos-mobile", { width: 0, x: 10 }, { width: "80%", x: 10, duration: 0.5, delay: 0.5 })
gsap.fromTo(".cta-subheadline", { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.5, delay: 0.5 })


/* -------------------------------------------------------------------------- */
/*                      PREORDER SECTION STICKY SCROLLING                     */
/* -------------------------------------------------------------------------- */
/* let preorderOptions = {
  threshold: 1
}
let preorderScrollObserver = new IntersectionObserver(preorderScroll, preorderOptions);
let preorderSectionTarget = document.getElementById('NewAlbumPreOrder');
preorderScrollObserver.observe(preorderSectionTarget)
console.log(preorderScrollObserver)

async function preorderScroll(entries, preorderScrollObserver){
  let pretitles = await preorderHeadlineArea.getElementsByClassName('preorder-title');
  let preordertarget = await document.querySelectorAll('.album');
  let preorderarray = await Array.prototype.slice.call(preordertarget)
}
*/

const getPreorderData = async() => {
    const response = await fetch('/preorders');
    const returnData = await response.json()
    return returnData;
}

getPreorderData()
  .then((data) => {
    console.log(data)
  }).catch();
 
/* -------------------------------------------------------------------------- */
/*                               QUOTES SECTION                               */
/* -------------------------------------------------------------------------- */

function changeBGclr(col) {
    const quotesection = document.getElementById('famousQuotes');
    quotesection.style.backgroundColor = col.value;
}


/* -------------------------------------------------------------------------- */
/*                     HEADER MENU CLASS CHANGE ON SCROLL                     */
/* -------------------------------------------------------------------------- */



const header = document.querySelector("#main-header");
const maincontent = document.querySelector("main");
const mainOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const mainObserver = new IntersectionObserver(function(
        entries,
        mainObserver
    ) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.remove("scroll-up");
            } else {
                header.classList.add("scroll-up");
            }
        });
    },
    mainOptions);
mainObserver.observe(maincontent);

/* let currentScroll = 0;
window.addEventListener("scroll", (xevent) =>{
  let menuBar = document.getElementById("main-header");
  if (window.scrollY > currentScroll) {
    menuBar.classList.remove("scroll-up");
  } else if(window.scrollY < currentScroll) {
    if(window.scrollY > 1500){
      menuBar.classList.add("scroll-up");
    } else if(window.scrollY < 1000){
      menuBar.classList.remove("scroll-up");
    }
  }
  currentScroll = window.scrollY;
}); */

/* --------------------------- FOOTER FORM POP-UP --------------------------- */
const formDivWrapper = document.getElementsByClassName('floating-popup');
const formButton = document.getElementById('formPopup');
const formInputWrapper = document.getElementById('popup-form');
const closebtn = document.getElementById('float-form-close-button');

formButton.addEventListener('click', () => {
    formInputWrapper.classList.add('form-open');
    formButton.classList.add('form-open');
    closebtn.addEventListener('click', () => {
        formInputWrapper.classList.remove('form-open');
        formButton.classList.remove('form-open');
    });
});

/* -------------------------- HEADER BURGER BUTTON -------------------------- */
const burgerBtn = document.getElementsByClassName('menu-btn');

const mediaQuery = window.matchMedia('( max-width: 700px )');

// Note the `matches` property
/* if ( mediaQuery.matches ) {
  burgerBtn.style.display = "flex";
  console.log('Media Query Matched!')
  function myFunction(x) {
  if (x.matches) { // If media query matches
    document.body.style.backgroundColor = "yellow";
  } else {
    document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
} */


/* -------------- GET THE USERS LOCATION TO SEND TO THE SERVER -------------- */
/* ----------------------- TO USE WITH THE SPOTIFY API ---------------------- */

const locationSuccessCallback = (position) => {
    console.log(position);
}

const locationErrorCallback = (error) => {
    console.error(error);
}
navigator.geolocation.getCurrentPosition(locationSuccessCallback, locationErrorCallback);


const getSpotifyData = async() => {
    const response = await fetch('/spotify');
    const returnData = await response.json()
    return returnData;
}

getSpotifyData()
    .then((data) => {
        document.querySelector(".spotify-cards-area").innerHTML = data.topTracks;
        document.querySelector("#Manson-Albums-Catalog").innerHTML = data.backCatalog;
    })
    .then(() => {
        let preloadimage = document.querySelectorAll(".preloading");
        preloadimage.forEach(image => {
            image.remove();
        })

    })
    .catch(err => console.log(err));