//Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// Express configuratioin
const app = express();
//Setting of the port to use
const PORT = process.env.PORT || 3040;
//Express set up to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(express.static('app/public'));

//Router
require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);

// Listener
app.listen(PORT, function() {
    console.log("App is listening on Port: " + PORT);
});