$(document).ready(function() {
    var config = {
        apiKey: "AIzaSyD8jJiWzC_c4BXlSV9aY1pKDu3z5J9df04",
        authDomain: "rps-multiplayer-game-84369.firebaseapp.com",
        databaseURL: "https://rps-multiplayer-game-84369.firebaseio.com",
        projectId: "rps-multiplayer-game-84369",
        storageBucket: "rps-multiplayer-game-84369.appspot.com",
        messagingSenderId: "353088295276"
    };

    firebase.initializeApp(config);

    var database = firebase.database();
    var options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
    var playerIntro = $("#playerIntro").hide();
    var ref; 
    var messageField;
    
function createButtons() {
    $("#playerOne").empty();
    for(var i = 0; i < options.length; i++) {
        $("#playerOne").append("<p type='button' class='btn btn-outline-secondary' value='" + options[i] + "'>" + options[i] + "</p>");
    }
};

$("#startButton").on("click", function(event) {
    event.preventDefault();
    var name = $("#nameInput").val().trim();
    var newPlayer1 = {
        status: null,
        name: name,
        gamesWon: 0,
        gamesLost: 0,
    };
    $("#nameForm").hide();
    $("#playerIntro").show().text("Hello " + newPlayer.name + " you are Player 1!");
    database.ref().push(newPlayer);
  });

  database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    var playerName = snapshot.val().name;
    $("#playerOne").text(playerName);
}, function(errorObject){
  console.log("You have an error: " + snapshot.val());
});

function sendChatMessage() {
    ref = firebase.database.ref("/chat");
    messageField = document.querySelector("#displayComments");

    ref.push().set({
        name: firebase.auth().currentUser.displayName,
        message: messageField.val()
    })
    ref.on("child_added", function(snapshot) {
        var message = snapshot.val();
        addChatMessage(message.name, message.message);
    })
}

$("#commentButton").on("click", function(event) {
    event.preventDefault();
    sendChatMessage();
})

// Pseudo Code:
// set up Firebase code to push and retrieve stored data
// data saved to Firebase: player's name, player's wins/loses, and indicate who's turn it is  
// set up array of player options
// first person to enter their name is assigned Player 1, second person is assigned Player 2
// hide the name submission form and display message to indicate if person is player 1 or 2
// options appear for player one to choose from.  player clicks option that appears on player's screen only
// once Player 1 submits option, Player 2 has options displayed to choose from.
// once Player 1 and Player 2 have made their choice, selections of Player 1 and Player 2 compared
// a "You Win" message appears in the box of the winning player, and their score increases by 1 point
// score is kept, event when the browser is refreshed
// players can talk with each other through form submission

});