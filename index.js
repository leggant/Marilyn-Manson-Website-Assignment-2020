const express = require('express');
const app = express();
const port = 666;
app.listen(port, () => console.log(`listening at ${port}`));
app.use(express.static('public'));




// SPOTIFY API TOKEN FUNCTION
/* 
const SpotifyAPIController = (function(){
    const _getToken = async () => {
        const token = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization' : 'Basic ' + btoa(process.env.SPOTIFY_APP_USER_ID + ':' + process.env.SPOTIFY_APP_SECRET)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await token.json();
        console.log(data);
        return data.access_token;
    }

    const _getAlbums = async (token) => {
        const resultAlbums = await fetch(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}/albums`, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer ' + token}
        });
        const albumData = await resultAlbums.json();
        console.log(albumData);
        return albumData.categories.items;
    }

    const _getManson = async (token) => {
        const MansonInfo = await fetch(`https://api.spotify.com/v1/artists/${process.env.SPOTIFYMARILYNMANSONID}`, {
            method: 'GET',
            headers: {'Authorization' : 'Bearer ' + token}
        });
        const mansonData = await MansonInfo.json();
        console.log(mansonData);
        return mansonData;
    }

    return {
        getToken() {
            return _getToken();
        },
        getManson(token) {
            return _getManson(token);
        },
        getAlbums(token){
            return _getAlbums(token);
        }
    }
})(); */