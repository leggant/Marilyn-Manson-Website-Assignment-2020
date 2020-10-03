/* const express = require('express');
const datastore = require('nedb');

const app = express();
app.listen(3000, () => console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));

const database = new datastore('database.db');
database.loadDatabase();
//database.insert({name: 'Yogi', age: 11, location: 'Dunedin', species: 'Dog'});
//database.insert({name: 'Bella', age: 3, location: 'Dunedin', species: 'Dog'});
app.get('/api', (request, response) => {
    database.find({}, (error, data) => {
        if(error) {
            response.end();
            return;
        } else {
            response.json(data);
        }
    });
});
app.post('/api', (request, response) => {
 const data = request.body;
 const timestamp = Date.now();
 data.timestamp = timestamp;
 database.insert(data);
 response.json({
     status: "success",
     name: data.name,
     timestamp: timestamp,
     latitude: data.latitude,
     longitude: data.longitude
 });
});
 */