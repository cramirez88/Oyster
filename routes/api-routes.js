const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/members", isAuthenticated, (req, res) => {
    db.Adventure.findAll({
      raw: true,
      where: {
        UserId: req.user.id
      },
    }).then(function(data) {
      var user = {
        id: req.user.id,
        user: req.user.email,
        adventures: data
      }
      res.render("index", user);
    });
  });


  app.get("/api/adventures/:id", (req, res)=>{
    db.Adventure.findAll({
      raw: true,
      where: {
        UserId: req.user.id
      },
    }).then(function(data) {
      var user = {
        id: req.user.id,
        user: req.user.email,
        adventures: data
      }
      res.render("index", user);
    });
  });

  //Route for sending a new adventure to the db
  app.post("/api/adventures", function(req, res) {
    var reqDate = req.body.startDate;
    var reqRange = req.body.checkingDates;
    var reqArray = req.body.sendingarray;

    //Object holds values to create a new adventure entry
    var newAdventure = {
      title: req.body.title,
      dateRange: req.body.dateRange,
      description: req.body.description,
      UserId: req.body.UserId
    }

    //YES YOU CAN SEE THIS 
    console.log("****CHECKING TO SEE IF YOU CAN SEE THIS", reqDate);
    console.log("****CHECKING TO SEE IF YOU CAN SEE THIS", reqRange);

 
    db.Adventure.create(newAdventure)
        .then(function(data){ 
          var adData = data; 
          res.json(data); 
          return adData;
        })
        .then(function(adData){ 
          for(var i=0; i<reqArray.length; i++){
            var datval = reqArray[i];
              var dateObj = {
                  date: datval,
                  am_8: "", 
                  am_9: "", 
                  am_10: "", 
                  am_11: "", 
                  pm_12: "", 
                  pm_1: "", 
                  pm_2: "",  
                  pm_3: "",  
                  pm_4: "",
                  pm_5: "",  
                  pm_6: "",  
                  pm_7: "",  
                  pm_8: "",  
                  pm_9: "",  
                  pm_10: "",
                  AdventureId: adData.id
                }
            db.Date.create(dateObj).then(function(dateData){console.log(dateData);})
          } 
        // //end of second then clause
        });
  //end of api post
  });













  //end of exports  
};
