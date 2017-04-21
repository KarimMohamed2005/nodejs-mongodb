/*
    Project: Sample application to demonstrate the CURD operation with Nodejs and MongoDB
    Author: shrisha.sb@gmail.com
*/

/*globals require, process */
/*eslint no-console: ["error", { allow: ["log", "warn", "error"] }] */

const express  = require("express"),
	app        = express(),
	bodyParser = require("body-parser"),
	router     = express.Router(),
	dish       = require("./route/dishRouter.js");
	/*leader     = require("./route/leaderRouter.js"),
    promo      = require("./route/promoRouter.js");*/

// Body-parser (To parse the request body)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/* 
    Add to avoid cross origin access.
    Access-Control-Allow-Origin is set to '*' so that server REST APIs are accessible for all the domains.
    By setting domain name to some value, the API access can be restricted to only the mentioned domain. 
    Eg, Access-Control-Allow-Origin: 'mywebsite.com'
*/
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	next();
});

// Set the port no
app.set("port", process.env.PORT || 3000);

// Api to get the list of dishes.
router.get("/:id", dish.getDishes);
// Api to update the dish.
router.put("/:id", dish.updateDish);
// Api to delete the dishes not required
router.delete("/:id", dish.deleteDish);

app.use("/dishes", router);

// Start the service
app.listen(app.get("port"));
console.log("Sample node server Started @ " + new Date() + " Running on port no: " + app.get("port"));