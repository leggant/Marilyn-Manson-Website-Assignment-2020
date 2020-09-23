/* -------------------------------------------------------------------------- */
/*                          Mobile Menu Button Click                          */
/* -------------------------------------------------------------------------- */

/* 
const menuBtn = document.querySelector('.menu-btn');
const headerMobileMenu = document.querySelector('.site-main-header');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  headerMobileMenu.classList.toggle('open-mobile-main-menu');
});

 */

/* -------------------------------------------------------------------------- */
/*                         HERO SECTION IMAGE CAROSEL                         */
/* -------------------------------------------------------------------------- */

const headerImageDivs = document.querySelectorAll('.col-img-item');

 headerImageDivs.forEach((imgItem) => {
  imgItem.addEventListener('mouseover', () => {
    console.log(imgItem.classList);
    imgItem.classList.add("img-hover")
  })
  imgItem.addEventListener('mouseout', () =>{
    imgItem.classList.remove('img-hover')
  })
 });

/* -------------------------------------------------------------------------- */
/*                        HEADER HERO SECTION FORM AREA                       */
/* -------------------------------------------------------------------------- */

 gsap.fromTo(".cta-headline", {opacity: 0, x:-20}, {opacity: 1, x: 0,  duration: 1});
 gsap.fromTo(".chaos", {width: 0, x:10}, {width:"60%", x:10, duration: 0.5, delay:0.5});
 gsap.fromTo(".cta-subheadline", {opacity: 0, y:-20}, {opacity: 1, y: 0,  duration: 0.5, delay:0.5});

/* -------------------------------------------------------------------------- */
/*                         ALBUM PREORDER SECTION DATA                        */
/* -------------------------------------------------------------------------- */

const preorderHeadlineArea = document.getElementById("preorderTitles");
let albumPreorderData = [];

async function preorderHeadline(headline, option) {
  let h2tag = document.createElement("H2");
  h2tag.innerHTML = headline;
  h2tag.className = "album-title preorder-title";
  h2tag.id = "preorderid"+option;
  preorderHeadlineArea.appendChild(h2tag);
}

async function loadAlbumPreorderInfo() {
  const preorderDataJSON = 'js/WEARECHAOSalbumInformation.json';
  const preorder = await fetch(preorderDataJSON);
  const preorderinfo = await preorder.json();
  createPreorder(preorderinfo.WEARECHAOSALBUM_PREORDER_INFO);
}
loadAlbumPreorderInfo();

async function createPreorder(preorderinfo) {
  preorderinfo.forEach(item => {
    createCard("homepage-preorder", item.edition, item.image)
    preorderHeadline(item.edition, item.option)
  });
}

/* -------------------------------------------------------------------------- */
/*                      PREORDER SECTION STICKY SCROLLING                     */
/* -------------------------------------------------------------------------- */
let preordertarget = document.querySelector('#homepage-preorder').children;

console.log(preordertarget);
/* const preorderoptions = {
  root: document.querySelector('#homepage-preorder'),
  rootMargin: '0px',
  threshold: 0.2
}
const preorderObserver = new IntersectionObserver((callback) => {
  
}, preorderoptions);
console.log(preorderObserver); */
/* let target = document.querySelectorAll('#homepage-preorder .album');
preorderObserver.observe(target);
let callback = (entries, preorderobserver) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
}; */

//const preorderarea = gsap.timeline();

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

/* -------------------------------------------------------------------------- */
/*                               QUOTES SECTION                               */
/* -------------------------------------------------------------------------- */

/* const tabs = document.querySelectorAll('[data-target-tab]');
const quoteContent = document.querySelectorAll('[data-tab-content]');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.targetTab)
    console.log(target)
    quoteContent.forEach(quote => {
      quote.classList.remove('active')
      quote.classList.add('inactive')
    })
    target.classList.add('active')
    target.classList.remove('inactive')
  })
}); */

/* let quoteTimeLine = gsap.timeline({
  scrollTrigger:{
    trigger: "#famousQuotes",
    markers: true,
    pin: true,
    start: "top top",
    end: "+=500",
    scrub: 1,
    snap: {

    }
  }
}); */

