//Establish dependencies
var express = require("express");
//Routing refers to how an application's endpoints(URIs) respond to client requests
//router() creates a chainable route handler for a route path
var router = express.Router();
var burgers = require("../models");

router.get("/", function(req,res){
	res.redirect("")
});

//Export routes for server.js to use
module.exports = router;