require("dotenv").config();
const express = require("express");
const cors = require("cors");
const exphbs = require("express-handlebars");
const parser = require("body-parser");
const mongoose = require("mongoose");

// Website Routes
const home = require('./routes/home');
const preorderalbum = require("./routes/preorders");
const spotify = require("./routes/spotify");
//const tourdates = require("./routes/tour-update");
//const feedbackForm = require("./routes/feedbackForm");

// db models
const preorder = require('./models/preorder');

// declare the express app
const app = express();
// cors middleware
app.use(cors());
// body parser middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
// Set Static Path
app.use(express.static("public"));

// Database Connection
mongoose.connect(process.env.DBURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((req, res) => {
    // Set Ports when connected to the database
    const PORT = process.env.PORT || 3000;
    app.listen(PORT);
  })
  .then(console.log("DB Connected"))
  .catch((err) => {
    console.log(err);
  });

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app use imported webpage routes
app.use('/', home);
app.use('/spotify', spotify);
app.use('/preorders', preorderalbum);

//404 page || No Page Found
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Marilyn Manson || Page Not Found",
  });
});
