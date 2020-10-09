// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });

  app.get("/index", function(req, res) {


                  var cards = [
                    {
                      imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.thecrazytourist.com%2Fwp-content%2Fuploads%2F2016%2F04%2FGrand-Place-Brussels.jpg&imgrefurl=https%3A%2F%2Fwww.thecrazytourist.com%2F15-best-things-brussels-belgium%2F&tbnid=1WpD4swRnTLGqM&vet=12ahUKEwi1kfXLiqbsAhVOS60KHaW8BDgQMygBegUIARDRAQ..i&docid=TRrzpVzff-achM&w=1024&h=687&q=brussels%20belgium&ved=2ahUKEwi1kfXLiqbsAhVOS60KHaW8BDgQMygBegUIARDRAQ',
                      title: ""
                     
                    }, {
                      imagePath: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fapi-abroad.sfo2.cdn.digitaloceanspaces.com%2Fimages%2F_1200x675_crop_center-center_82_line%2Ffrance-paris-tour-eiffel-77676271.jpg&imgrefurl=https%3A%2F%2Fapiabroad.com%2Fstudy-abroad%2Ffrance%2Fparis%2F&tbnid=HsofGLdUiwo8jM&vet=12ahUKEwja1M6ri6bsAhVM0KwKHbNIAnsQMygBegUIARDTAQ..i&docid=NJ8kjM1a9f4ptM&w=1200&h=675&q=paris%20france&ved=2ahUKEwja1M6ri6bsAhVM0KwKHbNIAnsQMygBegUIARDTAQ',
                      title: ""
                      
                    }
                  ];
    // Handlebars requires an object to be sent to the index handlebars file.
  
    // 2. Loop through the animals, and send those that are pets to the index handlebars file.
    // var data = {
    //   animals: []
    // };
  
    // for (var i = 0; i < animals.length; i += 1) {
    //   // Get the current animal.
    //   var currentAnimal = animals[i];
  
    //   // Check if this animal is a pet.
    //   if (currentAnimal.pet) {
    //     // If so, push it into our data.animals array.
    //     data.animals.push(currentAnimal);
    //   }
    // }
  
    res.render("index", data);
  });


});
