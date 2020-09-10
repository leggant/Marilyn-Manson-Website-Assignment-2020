/* ------------------- Load Hero Section Background Images ------------------ */
/* --- create an array of each of the divs with the class of .col-img-item -- */
/* ------ get the data attributes from each and assign them to a array ------ */
/* --------- set the background css image url to the data-img value --------- */





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


/* -------------------------------------------------------------------------- */
/*                      MARILN MANSON QUOTES SECTION TABS                     */
/* -------------------------------------------------------------------------- */

const quotetabs= document.querySelectorAll('[data-target-tab]');

quotetabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    target.classList.add('actve')
  })
})

/* ALBUM PREORDER SECTION DATA */

let albumPreorderData = [];
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
  });
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
    } else if(window.scrollY < 200){
      menuBar.classList.remove("scroll-up");
    }
  }
  currentScroll = window.scrollY;
});