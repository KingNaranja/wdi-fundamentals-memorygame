
var cards = [
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

var checkForMatch = function(cardOne,cardTwo) {
    
    cardOne = parseInt(cardOne); // converts data-id value from str to int
    cardTwo = parseInt(cardTwo);
    
    //if the two user-selected cards match, an alert will pop up
    if (cardOne + cardTwo == 1 || cardOne + cardTwo == 5) {
        console.log('match');
        alert("You found a match!");
    }else {
        console.log('no match');
        alert("Sorry, try again!");
    }
};    
           

//when the user flips a card
var flipCard = function() { 
    var cardId = this.getAttribute('data-id');


    //log the  flipped card name, image, and suit to the console
    console.log("User flipped " + cards[cardId].rank);
    console.log(cards[cardId].cardImage);
    console.log(cards[cardId].suit);
    
    
    cardsInPlay.push(cardId); //adds the selected card to the the 'cards' array;
    console.log(cardsInPlay); //logs that card into the console
    
    console.log("the value of this is", this)
    //the value of this is  <img src=​"images/​back.png" data-id=​"1">​
    
    this.setAttribute('src', cards[cardId].cardImage); // adds card front img to clicked card
    

    if (cardsInPlay.length === 2) {
        //after user selected 2 cards
        // test win condition
        checkForMatch(cardsInPlay[0], cardsInPlay[1]);
    };
    

console.log(parseInt(cardsInPlay));
    
}
// draw the game board;   
var createBoard = function() {
    for (var i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        console.log("cardElement is ", cardElement);     
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement)
    };
    
};







createBoard();//Draws gameboard; sets the cards 