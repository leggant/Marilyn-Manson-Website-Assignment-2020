
// Spotify Middleware
/* let spotify = new SpotifyAPI({
    id: process.env.SPOTIFY_APP_USER_ID,
    secret: process.env.SPOTIFY_APP_SECRET
});

// spotify constants

const spotifyInfo = [];
const SpotifyTotalFollowers = [];

// spotify functions
function totalFollowers(data) {
  SpotifyTotalFollowers[0] = {
      followers: data
  };
};
 */
/* function returnInfo(data) {
  data.forEach((element, index) => {
      spotifyInfo[index] = {
          rank: index + 1,
          trackname: element.name,
          albumname: element.album.name,
          popularity: element.popularity,
          releasedate: element.album.release_date,
          albumimage: element.album.images[1].url,
          spotifytrackurl: element.external_urls.spotify,
          spotifyartisturl: element.artists[0].external_urls.spotify,
          spotifyalbumurl: element.album.external_urls.spotify
      };
  });
}; */
 
/* // get top ten marilyn manson tracks for NZ
spotify.request(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/top-tracks?market=${process.env.SPOTIFYCOUNTRYCODE}`)
    .then(function(data) {
        returnInfo(data.tracks);
    })
    .catch(function(err) {
        console.error('Error occurred: ' + err);
});


// Get total manson Followers on spotify
spotify
  .search({ type: 'artist', query: 'Marilyn Manson' })
  .then(function(data) {
    totalFollowers(data.artists.items[0].followers.total);
  })
  .catch(function(err) {
    console.log(err);
  }); */