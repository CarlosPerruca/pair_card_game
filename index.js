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
//
let random = 0; //Almacena numeros randoms en mezclar()
let clicks = 1; //Indica si hemos hecho 1 click o 2.
let counter = 0; //Cuenta el numero de parejas acertadas
let idAnterior; //Guarda el id de la primera imagen mostrada
let idActual; //Guarda el id de la segunda imagen mostrada

let copyPrimarchs = new Array(8); //Lo usamos para mezclar()

shuffle();

function shuffle() {
    for (let i = 0; i < arrayPrimarchs.length; i++) {
        random = parseInt(Math.random() * 12);

        while (copyPrimarchs[random] != null) {
            //En JavaScript el contenido de un array creado por defecto es null

            random = parseInt(Math.random() * 12);
        }
        copyPrimarchs[random] = arrayPrimarchs[i];
    }

    arrayPrimarchs = copyPrimarchs;
}

function time(ms) {
    setTimeout(draw, ms);
}

function draw() {
    document.getElementById(idActual).style = 'background-image: url("./img/backCard.jpg")';
    document.getElementById(idAnterior).style = 'background-image: url("./img/backCard.jpg")';
}

function getPair(num) {
    if (clicks == 1) {
        //Cuando se hace click en la primera imagen
        clicks = 2;
        idAnterior = num;
        document.getElementById(idAnterior).style = 'background: url("./img/' + arrayPrimarchs[idAnterior].name + '.webp");';
        //Deshabilitamos el boton para que no se pueda volver a pulsar y nos lo cuente como un click
        document.getElementById(idAnterior).disabled = true;
        console.log(arrayPrimarchs[idAnterior].name);
    } else {
        //Cuando se ha mostrado la primera y se hace click en la segunda imagen
        clicks = 1;
        idActual = num;
        document.getElementById(idActual).style = 'background: url("./img/' + arrayPrimarchs[idActual].name + '.webp");';
        document.getElementById(idActual).disabled = true; //Deshabilitamos el segundo boton pulsado
        console.log(arrayPrimarchs[idActual].name);

        //Hacemos que el programa se espere para que podamos visualizar la segunda imagen cuando son distintas, antes de que se de la vuelta

        if (arrayPrimarchs[idActual] != arrayPrimarchs[idAnterior]) {
            //Si las imagenes son distintas
            time(500);
            //Borramos el atributo disabled de los 2 botones pulsados, para que podamos volverlos a pulsar
            document.getElementById(idAnterior).removeAttribute("disabled");
            document.getElementById(idActual).removeAttribute("disabled");
        } else {
            //Si las imagenes son iguales
            counter++;
            document.getElementById("encontradas").innerHTML = "Encontradas: " + counter;
        }

        if (counter == 8) {
            alert("Has ganado!  ^_^");
        }
    }
}

let cardToCheck = [];
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
