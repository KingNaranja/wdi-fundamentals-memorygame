
//console.log("User flipped" + cardOne);

cards = [
    {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
    },
    {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
    },
    {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
    },
    {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
    }      
];

cardsInPlay = [];

var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
        } else {
        console.log("Sorry, try again.");
        }
    };    
           


var flipCard = function(cardId) {
    //this block will run when the user flips a card 

    // Log the  flipped card name, image, and suit to the console
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    
    
    cardsInPlay.push(cards[cardId].rank);
    //adds the selected card to the the 'cards' array;
    
    
    if (cardsInPlay.length === 2) {
        //if the two user-selected cards match, an alert will pop up
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!")
        } else {
            alert("Sorry, try again")
        };
        checkForMatch();
    };
    
}

flipCard(0);
flipCard(2);

