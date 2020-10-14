//Establish dependencies
var express = require("express");
//Routing refers to how an application's endpoints(URIs) respond to client requests
//router() creates a chainable route handler for a route path
var router = express.Router();
var oysters = require("../models");

router.get("/", function(req,res){
	res.redirect("/members")
});

router.get("/adventures", function(req,res){
	adventures.selectAll(function(data){
		var hbsObject = {
			adventures: data
		};

		res.render("index", hbsObject);
	})
});

//Export routes for server.js to use
module.exports = router;