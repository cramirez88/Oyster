// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const { createSecureContext } = require("tls");
const db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    var user = { user: req.user}
    res.render("index", user);
  });

  app.get("/map", (req, res)=>{
    res.render("map");
  });

  app.get("/intro", (req, res)=>{
    res.render("intro");
  });

  app.get("/create", isAuthenticated, (req, res)=>{
    var user = { user: req.user}
    res.render("create", user);
  });

};
