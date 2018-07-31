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

// set up array of player options
// first person to enter their name is assigned Player 1, second person is assigned Player 2
// player one picks an option, then submits.  Option is held until player 2 makes a selection
// once Player 1 and Player 2 have made their choice, selections of Player 1 and Player 2 compared
// a "You Win" message appears in the box of the winning player, and their score increases by 1 point
// score is kept, event when the browser is refreshed
// players can talk with each other through form submission

});