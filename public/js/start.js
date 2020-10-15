$(document).ready(function(){
    
    $("#random-button").on("click", function() {
    
    var quotes = ["Adventure is worthwhile in itself. - Amelia Earheart",
    "Life is either a daring adventure or nothing. - Hellen Keller ",
    "People don’t take trips, trips take people. -John Steinbeck",
    "To live would be an awfully big adventure.– J.M. Barrie, Peter Pan",
    "There are far better things ahead than the ones we leave behind. – C.S. Lewis",
    "If we were meant to stay in one place, we’d have roots instead of feet. – Rachel Wolchin",
    "You can’t find happiness at the end of your journey if you didn’t bring it with you all along. – Katrina Mayer",
    "Life is a blank canvas, and you need to throw all the paint on it you can. – Danny Kaye",
    "The path is the goal -Mahatma Gandhi",
    "Oh, the places you’ll go. – Dr. Seus",
    "Have love, will travel. - The Sonics"
    ];
    
    var ranQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    $("#random-quote").text(ranQuote);
    });
});