/* -------------------------------------------------------------------------- */
/*                         HERO SECTION IMAGE CAROSEL                         */
/* -------------------------------------------------------------------------- */

const headerImageDivs = document.querySelectorAll('.col-img-item');

 headerImageDivs.forEach((imgItem) => {
  imgItem.addEventListener('mouseover', () => {
    imgItem.classList.add("img-hover")
  })
  imgItem.addEventListener('mouseout', () =>{
    imgItem.classList.remove('img-hover')
  })
 });

/* -------------------------------------------------------------------------- */
/*                        HEADER HERO SECTION FORM AREA                       */
/* -------------------------------------------------------------------------- */

 gsap.fromTo(".cta-headline", {opacity: 0, x:-20}, {opacity: 1, x: 0,  duration: 1})
 gsap.fromTo(".chaos", {width: 0, x:10}, {width:"60%", x:10, duration: 0.5, delay:0.5})
 gsap.fromTo(".chaos-mobile", {width: 0, x:10}, {width:"80%", x:10, duration: 0.5, delay:0.5})
 gsap.fromTo(".cta-subheadline", {opacity: 0, y:-20}, {opacity: 1, y: 0,  duration: 0.5, delay:0.5})


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
/*                               QUOTES SECTION                               */
/* -------------------------------------------------------------------------- */

function changeBGclr(col)
{
  const quotesection = document.getElementById('famousQuotes');
	quotesection.style.backgroundColor=col.value;
}


/* -------------------------------------------------------------------------- */
/*               Album Cover Information from theaudiodb API                  */
/* -------------------------------------------------------------------------- */

getAlbumData();
let albumInfo = [];

async function getAlbumData() {
	const dataUrl = 'https://theaudiodb.com/api/v1/json/1/album.php?i=112122';
	const response = await fetch(dataUrl);
  const dataalbum = await response.json();
  dataalbum.album.sort(compare);
  createArrayAlbums(dataalbum.album);
}

function createArrayAlbums(data){
  for(let item of data){
  	if((item.strReleaseFormat === "Album") || (item.strReleaseFormat === "EP") || (item.strReleaseFormat === "Live")){
      albumInfo.push(item);
      createCard("Manson-Albums-Catalog", item.strAlbum, item.strAlbumThumb, item.intYearReleased);
  	}
  }
}

function compare( a, b ) {
  if ( a.intYearReleased < b.intYearReleased ){
    return -1;
  }
  if ( a.intYearReleased > b.intYearReleased ){
    return 1;
  }
  return 0;
}

async function createCard(containerid, title, image, year){
  let catalogSection = document.getElementById(containerid);
  let divtag = document.createElement("DIV");
  let imgWrapper = document.createElement("DIV");
  let h4tag = document.createElement("H4");
  let imageTag = document.createElement("IMG");
  catalogSection.appendChild(divtag).className = "album";
  divtag.appendChild(imgWrapper);
  imgWrapper.className = "album-img-wrapper";
  imgWrapper.appendChild(imageTag).src = image;
  imageTag.className = "album-img";
  divtag.appendChild(h4tag).innerHTML = title;
  h4tag.className = "album-title";
  if(year){
    let yeartag = document.createElement("P");
    yeartag.classList = "yearReleased";
    divtag.appendChild(yeartag).innerHTML = year;
    yeartag.className = "year-of-release";
  }
}

/* Scroll Up Menu Bar */

let currentScroll = 0;
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
});

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

/* burgerBtn.addEventListener('click', (e) => {
  
}); */
/* const mediaQuery = window.matchMedia( '( max-width: 700px )' )

// Note the `matches` property
if ( mediaQuery.matches ) {
  console.log('Media Query Matched!')
} */