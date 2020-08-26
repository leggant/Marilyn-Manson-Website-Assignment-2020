/* ------------------- Load Hero Section Background Images ------------------ */
/* --- create an array of each of the divs with the class of .col-img-item -- */
/* ------ get the data attributes from each and assign them to a array ------ */
/* --------- set the background css image url to the data-img value --------- */


 const heroScrollImages = querySelector(".hero-container");


/* -------------------------------------------------------------------------- */
/*                          Mobile Menu Button Click                          */
/* -------------------------------------------------------------------------- */


const menuBtn = document.querySelector('.menu-btn');
const headerMobileMenu = document.querySelector('.site-main-header');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  headerMobileMenu.classList.toggle('open-mobile-main-menu');
});


/* -------------------------------------------------------------------------- */
/*               Album Cover Information from theaudiodb API                  */
/* -------------------------------------------------------------------------- */


getAlbumData().then(response =>{
	console.log('image loaded');
})
.catch(error=>	{
	console.log('Error!');
  console.error(error.message);
});

let albumInfo = [];

async function getAlbumData() {
	const dataUrl = 'https://theaudiodb.com/api/v1/json/1/album.php?i=112122';
	const response = await fetch(dataUrl);
  const dataalbum = await response.json();
  createArrayAlbums(dataalbum.album);
}

function createArrayAlbums(data){
  for(var item of data){
  	if((item.strReleaseFormat === "Album") || (item.strReleaseFormat === "EP") || (item.strReleaseFormat === "Live")){
  		albumInfo.push(item);
  	}
  }
  populateHTML(albumInfo);
  createImage(albumInfo);
}

async function populateHTML(dataArray){
	//console.log(dataArray[0].strAlbum);
  // get the dom html elements
}

async function createImages(dataArray){
	//const image = await fetch('https://images.unsplash.com/photo-1598094437687-e80aa66b2fe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80');
  //const data = await image.blob();
  //document.getElementById('photo').src = URL.createObjectURL(data);
}



/*
        Manson Quotes Section Content

        1. Control of background color 
        2. horizontal change of cards
        3. linked to radio button selection

*/



/* ALBUM PREORDER SECTION DATA */

let preorderINFO = [];
const preorderSectionID = document.getElementById("chaos-preorder");
async function preorderData(){
	const preorderDataUrl = 'WEARECHAOSalbumInformaton.json';
	const response = await fetch(preorderDataUrl);
  const preoderinformation = await response.json();
}