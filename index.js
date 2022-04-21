//TODO
//metodo para barajar el array de cartas y colocarlas aleatorias.
//metodo para comparar si las cartas elegidas son las mismas.
//metodo para que cuando se alcancen las 8 parejas se acabe el juego.

let arrayPrimarchs = [
    { name: "Guilliman", img: "Guilliman.webp" },
    { name: "Horus", img: "Horus.webp" },
    { name: "Konrad", img: "Konrad.webp" },
    { name: "Leman", img: "Leman.webp" },
    { name: "Lion", img: "Lion.webp" },
    { name: "Magnus", img: "Magnus.webp" },
    { name: "Mortarion", img: "Mortarion.webp" },
    { name: "Sanguinius", img: "Sanguinius.webp" },
];

let random = 0;
let clicks = "one";
let counter = 0;
let idFirstCard;
let idSecondCard;

let copyPrimarchs = new Array(arrayPrimarchs.length);

let shuffle = () => {
    for (let i = 0; i < arrayPrimarchs.length; i++) {
        random = parseInt(Math.random() * arrayPrimarchs.length);

        while (copyPrimarchs[random] != null) {
            random = parseInt(Math.random() * arrayPrimarchs.length);
        }
        copyPrimarchs[random] = arrayPrimarchs[i];
    }

    arrayPrimarchs = copyPrimarchs;
};

let time = (ms) => {
    setTimeout(draw, ms);
};

let draw = () => {
    document.getElementById(idSecondCard).style = 'background-image: url("./img/backCard.jpg")';
    document.getElementById(idFirstCard).style = 'background-image: url("./img/backCard.jpg")';
};

let getPair = (num) => {
    if (clicks == "one") {
        clicks = "two";
        idFirstCard = num;
        document.getElementById(idFirstCard).style = 'background: url("./img/' + arrayPrimarchs[idFirstCard].name + '.webp"); background-size: cover; background-repeat: no-repeat;';
        document.getElementById(idFirstCard).disabled = true;
        console.log(arrayPrimarchs[idFirstCard].name);
    } else {
        clicks = "one";
        idSecondCard = num;
        document.getElementById(idSecondCard).style = 'background: url("./img/' + arrayPrimarchs[idSecondCard].name + '.webp"); background-size: cover; background-repeat: no-repeat;';
        document.getElementById(idSecondCard).disabled = true;
        console.log(arrayPrimarchs[idSecondCard].name);

        if (arrayPrimarchs[idSecondCard] != arrayPrimarchs[idFirstCard]) {
            time(500);

            document.getElementById(idFirstCard).removeAttribute("disabled");
            document.getElementById(idSecondCard).removeAttribute("disabled");
        } else {
            counter++;
            document.getElementById("cardsPair").innerHTML = "cardsPair: " + counter;
        }

        if (counter == 8) {
            alert("Has ganado!  ^_^");
        }
    }
};

shuffle();

//let cardToCheck = [];
// let pickedCards = [];
// let counterPair = 0;
// let pairClicked = 0;

// let shuffleCards = () => {
//     let currentIndex = cards.length,
//         randomIndex;

//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
//         // Pick a remaining element.
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         // And swap it with the current element.
//         [cards[currentIndex], cards[randomIndex]] = [cards[randomIndex], cards[currentIndex]];
//     }

//     return cards;
// };
// let randomCard = shuffleCards(cards);

// let card1 = document.getElementById(cards.name);
// let card2 = document.getElementById(cards.name);

// let takeCard = () => {
//     pickedCards.push(document.getElementById(cards));
//     console.log(pickedCards);
// };

// let checkPair = (pickedCars) => {
//     if (pickedCars[0] == pickedCars[1]) {
//         console.log("SOMOS LA MISMA CARTA");
//     } else {
//         console.log("INTENTALO DE NUEVO");
//     }
// };
