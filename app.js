//TODO
//metodo para barajar el array de cartas y colocarlas aleatorias.
//metodo para comparar si las cartas elegidas son las mismas.
//metodo para que cuando se alcancen las 8 parejas se acabe el juego.

let cards = [
    { name: "Guilliman", img: "Guilliman.webp" },
    { name: "Horus", img: "Horus.webp" },
    { name: "Konrad", img: "Konrad.webp" },
    { name: "Leman", img: "Leman.webp" },
    { name: "Lion", img: "Lion.webp" },
    { name: "Magnus", img: "Magnus.webp" },
    { name: "Mortarion", img: "Mortarion.webp" },
    { name: "Sanguinius", img: "Sanguinius.webp" },
];
let pickedCars = [];
let counterPair = 0;
let pairClicked = 0;
// let cardBefore;
// let cardNow;
let shuffleCards = () => {
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
};
let randomCard = shuffleCards(cards);

//let click = false;
// let getPair = () => {
//     if (click == false) {
//         click = true;
//         cardBefore = card;
//         document.getElementById(cardBefore).style = 'background: url ("./img/' + cards[cardBefore] + '.webp");';
//         document.getElementById(cardBefore).disabled = true;
//     } else {
//     }
// };

// let checkIfPair = (card1, card2) => {
//     if (card1 === card2) {
//         return true && pairClicked++;
//     } else {
//         return false;
//     }
// };
let card1 = document.getElementById(cards.name);
let card2 = document.getElementById(cards.name);

let checkPair = (card1, card2) => {
    if (card1 === card2) {
        console.log("SOMOS LA MISMA CARTA");
    } else {
        console.log("INTENTALO DE NUEVO");
    }
};
