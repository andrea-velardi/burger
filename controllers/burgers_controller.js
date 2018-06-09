// Here is where you create all the functions that will do the routing for your app, and the logic of each route.
//
var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');


//base route of / and render burgers in views folder
router.get('/', function (req, res) {
	res.render('index');
});

// route defined for the /burgers URI
// GET method - selectAll callback function
router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

// route defined for the /burgers/create URI

router.post('/burgers/create', function (req, res) {
	burger.insertOne(['burger_name','devoured'], [req.body.burger_name,0], function () {
		res.redirect('/burgers');
	});
});

// route defined for the /burgers/update/[params] URI
// In index.handlebars, we used method-override using a query value
// to override POST with a PUT

router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});


module.exports = router;
