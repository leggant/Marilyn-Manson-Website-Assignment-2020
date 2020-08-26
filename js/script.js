/* ------------------- Load Hero Section Background Images ------------------ */
/* --- create an array of each of the divs with the class of .col-img-item -- */
/* ------ get the data attributes from each and assign them to a array ------ */
/* --------- set the background css image url to the data-img value --------- */


 //const heroScrollImages = querySelector(".hero-container");


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
  console.log(dataalbum);
  createArrayAlbums(dataalbum.album);
}

function createArrayAlbums(data){
  for(let item of data){
  	if((item.strReleaseFormat === "Album") || (item.strReleaseFormat === "EP") || (item.strReleaseFormat === "Live")){
  		albumInfo.push(item);
      createHTMLElements(item);
  	}
  }
}

async function createHTMLElements(data){
  let catalogSection = document.getElementById("Manson-Albums-Catalog");
  let divtag = document.createElement("DIV");
  //let blurbtag = document.createElement("P");
  let yeartag = document.createElement("P");
  let h4tag = document.createElement("H4");
  let imageTag = document.createElement("IMG");
  catalogSection.appendChild(divtag).className = "past-album";
  divtag.appendChild(imageTag).src = data.strAlbumThumb;
  imageTag.className = "past-album-img";
  divtag.appendChild(h4tag).innerHTML = data.strAlbum;
  h4tag.className = "past-album-title";
  divtag.appendChild(yeartag).innerHTML = data.intYearReleased;
  yeartag.className = "year-of-release";
  
  //divtag.appendChild(blurbtag).innerHTML = data.strDescriptionEN;
  //blurbtag.className = "album-blurb";
}



/*
        Manson Quotes Section Content

        1. Control of background color 
        2. horizontal change of cards
        3. linked to radio button selection

*/



/* ALBUM PREORDER SECTION DATA */

/* let preorderINFO = [];
const preorderSectionID = document.getElementById("chaos-preorder");
async function preorderData(){
	const preorderDataUrl = 'WEARECHAOSalbumInformaton.json';
	const response = await fetch(preorderDataUrl);
  const preoderinformation = await response.json();
} */