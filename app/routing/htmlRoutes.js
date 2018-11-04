//Dependencies
const path = require("path");

//Export module of the routes for the html pages
module.exports = function (app) {
    //In the event that the user sends a get request to the server for the survey page, display the survey page
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/survey.html'));
    });
    //Otherwise display the home page html
    app.get("/", function(req, res){
        res.sendFile(path.join(__dirname,  "/../public/home.html"));
    });
};