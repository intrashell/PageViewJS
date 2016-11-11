// ============================================================
// File: PageView.js
// Description:  This will be the main object for this project.  
// Project will allow you to host a JS file.
// The JS file will have a self created token.  This is to better
// Stay connected to the same results.  This JS file has one job.
// To see everything that is on the page, create an object and 
// read where the viewer is on the page and how long they view it.
// Where they clicked, and where they went when they left.  The 
// idea here is to have a better understanding of where our viewers
// go and what they look at.
// ============================================================
// ============================================================
// Requirements
// ExpressJS - To host the javascript file and receive updates from viewers
// bodyParser - to accept POST responses
// mongoosejs - to work with MongoDB and save results

var Express = require('express'),
		app = Express(),
		BodyParser = require('body-parser'),
		Mongoose = require('mongoose');

// ============================================================
// ============================================================
// MongoDB Connection

mongoose.connect('mongodb://localhost:27017/pvjs'); // connect to database

// ============================================================
// ============================================================
// Configuring Body-Parser as middleware

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// ============================================================
// ============================================================
// Setting Port Number

var port = process.env.PORT || 8080;

// ============================================================
// ============================================================
// Routes

// ============================================================
// ============================================================
// Starting Server
app.use('/', route);
app.listen(port);
console.log('Server is Running On Port ' + port);
// ============================================================