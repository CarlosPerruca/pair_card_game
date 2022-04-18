//TODO
//metodo para barajar el array de cartas y colocarlas aleatorias.
//metodo para comparar si las cartas elegidas son las mismas.
//metodo para que cuando se alcancen las 8 parejas se acabe el juego.
let cards = ["Guilliman", "Horus", "Konrad", "Leman", "Lion", "Magnus", "Mortarion", "Sanguinius"];
let pickedCars = [];
let counterPair = 0;
class MemoryGame {
    constructor(cards) {
        this.cards = cards;
        this.cardName = cardName;
        this.cardImg = cardImg;
        this.pairClicked = pairClicked;
        this.pairGuessed = pairGuessed;
    }
    shuffleCards() {
        let currentIndex = cards.length,
            randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
        }

        return cards;
        // function shuffle(cards) {}
        shuffleCards(cards);

        // Used like so
        // var arr = [2, 11, 37, 42];
    }
    checkIfPair() {}
    checkIfEnd() {}
}
