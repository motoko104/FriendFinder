// Setting list of friends to a variable
let friendsList = require("../data/friends.js");
//Export module of the routes for the api's
module.exports = function(app) {
    //retrieves list of friends
    app.get("/api/friends", function (req, res) {
        res.json(friendsList);
    });
    //adds a new friend to the list
    app.post("/api/friends", function (req, res){
        //variables
        let input = req.body;
        let scores = input.scores;
        let scoresArr = [];
        let bestMatch = 0;
        //cycle through each friend in the list of friend data
        for(let i =0; i < friendsList.length; i++){
            //set the score difference to 0
            let scoreDiff = 0;
            //cycles through each choice they have made and computes the differences for each question
            for (let j = 0; j < scores.length; j++){
                scoreDiff += (Math.abs(parseInt(friendsList[i].scores[j]) - parseInt(scores[j])));
            }
        //pushes the differences into an array
        scoresArr.push(scoreDiff);
        }
        // looks for the best match by checking which friend has the smallest total difference
        for(let i =0; i<scoresArr.length; i++){
            if(scoresArr[i] <= scoresArr[bestMatch]){
                bestMatch = i;
            }
        }
        //returns the best match generated
        let newFriend = friendsList[bestMatch];
        res.json(newFriend);

        //pushes the newest friend into the friends list data array
        friendsList.push(req.body);
    });
};