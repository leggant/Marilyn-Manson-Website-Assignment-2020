const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

/* const DBURI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@mansondb.cnnfy.mongodb.net/MansonDB?retryWrites=true&w=majority`;
mongoose.connect(DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(PORT))
  .catch((err) => { console.log(err)});

// test adding to db
app.get('/add-user', (req, res) => {
  const newuser = new User({
    name: 'Antz',
    email: 'test1@email.com',
    country: 'New Zealand',
    city: 'CHCH'
  });
  newuser.save()
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    console.log(err)
  });
});
 */