require("dotenv").config();
const express = require("express");
const Querystring = require("querystring");
const cors = require("cors");
const exphbs = require("express-handlebars");
const parser = require("body-parser");
const axios = require("axios");
const mongoose = require("mongoose");



// Database models
const User = require("./models/users");
const PreorderModel = require('./models/preorder');
const Tour = require("./models/tour");
const FeedbackForm = require("./models/userFeedback");

// Website Routes
const preorderalbum = require("./routes/preorders");
const spotify = require("./routes/spotify");
const tourdates = require("./routes/tour-update");
const feedbackForm = require("./routes/feedbackForm");

// declare the express app
const app = express();
// cors middleware
app.use(cors());
// body parser middleware
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));
// Set Static Path
app.use(express.static("public"));
// Set Ports 
const PORT = process.env.PORT || 3000;
app.listen(PORT);

// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use('/spotify', spotify);
app.use('/preorders', preorderalbum);

// Homepage Route
app.get("/", (req, res) => {
  res.render("homepage", {
    title: "Marilyn Manson || WE ARE CHAOS"
  });
});

//404 page || No Page Found
app.use((req, res) => {
  res.status(404).render("404", {
    title: "Marilyn Manson || Page Not Found",
  });
});
