
//console.log("User flipped" + cardOne);

cards = ["queen", "queen","king","king"];

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

    console.log("User flipped " + cards[cardId]);// logs flipped card to the console

    cardsInPlay.push(cards[cardId]);
    /*adds the selected card the the 'cards' array;
    the parameter is the index number of the cards in the cards array.*/
     
    
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
