//Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Express configuratioin
const app = express();
//Setting of the port to use
const port = process.env.port || 3040;
//Express set up to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Router
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listener
app.listen(port, function() {
    console.log("App is listening on Port: " + port);
});