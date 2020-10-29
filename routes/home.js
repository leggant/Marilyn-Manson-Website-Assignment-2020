require("dotenv").config();
const express = require("express");
const router = express.Router();

// Homepage Route
router.get("/", (req, res) => {
    res.render("homepage", {
        title: "Marilyn Manson || WE ARE CHAOS"
    });
});

module.exports = router;