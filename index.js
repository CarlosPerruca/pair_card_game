//TODO
//metodo para barajar el array de cartas y colocarlas aleatorias.
//metodo para comparar si las cartas elegidas son las mismas.
//metodo para que cuando se alcancen las 8 parejas se acabe el juego.

let arrayPrimarchs = [
    "Guilliman",
    "Horus",
    "Konrad",
    "Leman",
    "Lion",
    "Magnus",
    "Mortarion",
    "Sanguinius",
    "Khan",
    "Fulgrim",
    "Alpharius",
    "Vulkan",
    "Guilliman",
    "Horus",
    "Konrad",
    "Leman",
    "Lion",
    "Magnus",
    "Mortarion",
    "Sanguinius",
    "Khan",
    "Fulgrim",
    "Alpharius",
    "Vulkan",
];

let aleatory = 0;
let clicks = "one";
let counter = 0;
let idFirstCard;
let idSecondCard;

let copyPrimarchs = new Array(12);

shuffle();

function shuffle() {
    for (let i = 0; i < arrayPrimarchs.length; i++) {
        aleatory = parseInt(Math.random() * 12);
        console.log("for", aleatory);

        while (copyPrimarchs[aleatory] != null) {
            aleatory = parseInt(Math.random() * 12);
        }
        copyPrimarchs[aleatory] = arrayPrimarchs[i];
        console.log(`en la posición ${i} meto la carta ${aleatory + 1}`);
    }

    arrayPrimarchs = copyPrimarchs;
}

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
        document.getElementById(idFirstCard).style = 'background: url("./img/' + arrayPrimarchs[idFirstCard] + '.webp"); background-size: cover; background-repeat: no-repeat;';
        document.getElementById(idFirstCard).disabled = true;
        console.log(arrayPrimarchs[idFirstCard]);
    } else {
        clicks = "one";
        idSecondCard = num;
        document.getElementById(idSecondCard).style = 'background: url("./img/' + arrayPrimarchs[idSecondCard] + '.webp"); background-size: cover; background-repeat: no-repeat;';
        document.getElementById(idSecondCard).disabled = true;
        console.log(arrayPrimarchs[idSecondCard]);

        if (arrayPrimarchs[idSecondCard] != arrayPrimarchs[idFirstCard]) {
            time(500);

            document.getElementById(idFirstCard).removeAttribute("disabled");
            document.getElementById(idSecondCard).removeAttribute("disabled");
        } else {
            counter++;
            document.getElementById("cardsPair").innerHTML = "cardsPair: " + counter;
        }

        if (counter == 16) {
            alert("YOU WIN... an orbital bomber in your position =][= Have a nice day =][=");
        }
    }
};

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
