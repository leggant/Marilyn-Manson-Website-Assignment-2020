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

/* -------------------------------------------------------------------------- */
/*          PREORDER SECTION CONTENT CALLED FROM MONGO ATLAS DATABASE         */
/* -------------------------------------------------------------------------- */

const getPreorderData = async () => {
    const response = await fetch('/preorders');
    const preorderData = await response.json()
    .then((data) => {
      createPreorderHeadlines(data);
      createPreorderAlbums(data);
    })
    .catch(err => console.log(err));
}

getPreorderData();

const preTitle = document.getElementById('preorderTitles');
const createPreorderHeadlines = async (data) => {
  data.forEach((item) => {
    const h2 = document.createElement('h2');
    h2.id = "preorderid-" + item.option;
    h2.classList = "album-title preorder-title";
    h2.innerText = item.edition;
    preTitle.appendChild(h2);
  })
}

const preAlbum = document.getElementById('homepage-preorder');
const createPreorderAlbums = async (data) => {
  data.forEach((item) => {
    const wrapper = document.createElement('div');
    wrapper.id = `preorderAlbum${item.option}`;
    wrapper.className = "album";
    const albumTitle = document.createElement('h4');
    albumTitle.className = "album-title";
    albumTitle.textContent = item.edition;
    const imgwrapper = document.createElement('div');
    imgwrapper.className = "album-img-wrapper";
    const albumimg = document.createElement('img');
    albumimg.className = "album-img";
    albumimg.src = item.image;
    albumimg.alt = `Image of We Are Chaos ${item.edition}`;
    imgwrapper.appendChild(albumimg);
    const albumshipping = document.createElement('h5');
    albumshipping.className = "album-shipping";
    albumshipping.innerHTML = `<span>Est. Shipping Date: </span> ${item.shipping}`;
    const albumprice = document.createElement('h6');
    albumprice.className = "album-price";  
    const link = document.createElement('a');
    link.className = "preorderBTN";
    link.setAttribute("target", "_blank");
    link.href = item.url;
    link.textContent = "Order Now";
    wrapper.appendChild(albumTitle);
    wrapper.appendChild(imgwrapper);
    wrapper.appendChild(albumshipping);
    wrapper.appendChild(albumprice);
    wrapper.appendChild(link);
    preAlbum.appendChild(wrapper);
  })
}

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


/* -------------- GET THE USERS LOCATION TO SEND TO THE SERVER -------------- */
/* ----------------------- TO USE WITH THE SPOTIFY API ---------------------- */

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


/* -------------------------------------------------------------------------- */
/*                  HEADER SECTION ALBUM RELEASE UPDATE FORM                  */
/* -------------------------------------------------------------------------- */

const headerForm = document.querySelector('#hero-form');
const headerFormSubmitBtn = document.querySelector('.cta-signup-btn');

headerForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

headerFormSubmitBtn.addEventListener('click', (e) => {
  let userEmail = document.querySelector('#hero-form #email');
  let userName = document.querySelector('#hero-form #Name');
  const postReq = {
    name: userName.value,
    email: userEmail.value
  };
  fetch('/releaseUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postReq)
  })
  .then(() => {
    headerForm.reset();
    const currentP = document.querySelector('.cta-text');
    currentP.insertAdjacentHTML('afterend', '<p class="cta-text success-alert">Success!!</p>');
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});


/* -------------------------------------------------------------------------- */
/*                                FEEDBACK FORM                               */
/* -------------------------------------------------------------------------- */

const feedbackForm = document.querySelector('#feedback-form');
//const feedbackFormSubmit = document.querySelector('#feedback-form .signup-btn');

feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
});


/* -------------------------------------------------------------------------- */
/*                              TOUR UPDATE FORM                              */
/* -------------------------------------------------------------------------- */

const tourUpdateForm = document.querySelector('#tourUpdate-Form');
const tourUpdateBTN = document.querySelector('#tourUpdate-Form .signup-btn');


tourUpdateForm.addEventListener('submit', (e) => {
  e.preventDefault();
});

tourUpdateBTN.addEventListener('click', (e) => {
  let userEmail = document.querySelector('#tour-update-email');
  let userName = document.querySelector('#tour-update-name');
  const postReq = {
    name: userName.value,
    email: userEmail.value
  };
  fetch('/tourUpdate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postReq)
  })
  .then(() => {
    tourUpdateForm.reset();
    const xP = document.querySelector('.tour-form-col .subheading');
    xP.innerHTML = '<p class="cta-text success-alert">Success!!</p>';
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});